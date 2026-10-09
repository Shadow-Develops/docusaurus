---
sidebar_position: 3
---

# Chunked Uploads

:::info
The main reason for this 50MiB restriction is due to our system expecting chunk uploading for large files to help keep things smooth. Additionally, we use Cloudflare and without paying, Cloudflare doesn't allow files over 50MiB to be uploaded.
:::

Files larger than 50 MiB must use the chunked upload API. A chunked upload has four stages:

1. Create an upload session.
2. Upload every numbered chunk.
3. Complete the upload to assemble and store the asset.
4. Cancel the session instead if the upload will not be completed.

All chunked upload endpoints require the `assets.upload` scope and access to the upload's target path. An upload session belongs to the API key that created it; another key cannot use or cancel it.

## Upload Rules

- Chunk size is exactly 50 MiB (`52,428,800` bytes), except for the final chunk.
- Chunk indexes are zero-based: `0`, `1`, `2`, and so on.
- Every chunk requires its own hexadecimal SHA-256 checksum.
- The declared total size must be greater than 50 MiB and no larger than `BODY_SIZE_LIMIT`.
- Sessions expire one hour after creation. An expired session returns `410 upload_expired`.
- The destination file name must not already exist.
- The optional whole-file SHA-256 checksum is checked when the upload is completed.

## 1. Initialize an Upload

`POST /api/v1/uploads` creates an upload session.

- Scope: `assets.upload`
- Allowed-root check: `targetPath`
- Success: `201`
- Supports `Idempotency-Key`

| JSON field   | Required | Description                                                             |
| ------------ | -------- | ----------------------------------------------------------------------- |
| `filename`   | Yes      | Final asset name                                                        |
| `targetPath` | No       | Destination folder; defaults to `/`                                     |
| `size`       | Yes      | Total byte length; must be greater than 50 MiB                          |
| `mimeType`   | No       | MIME type, up to 255 characters; defaults to `application/octet-stream` |
| `sha256`     | No       | Hexadecimal SHA-256 checksum for the complete file                      |

```bash
curl --request POST "https://cdn.example.com/api/v1/uploads" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --header "Idempotency-Key: initialize-release-video" \
  --data '{
    "filename":"release-video.mp4",
    "targetPath":"/media/videos",
    "size":125829120,
    "mimeType":"video/mp4",
    "sha256":"WHOLE_FILE_SHA256"
  }'
```

```json
{
	"data": {
		"id": "UPLOAD_ID",
		"filename": "release-video.mp4",
		"targetPath": "/media/videos",
		"size": 125829120,
		"chunkSize": 52428800,
		"totalChunks": 3,
		"expiresAt": "2026-10-09T13:00:00.000Z"
	}
}
```

Use the returned `chunkSize` and `totalChunks`; do not hard-code a different chunk plan. Common errors include `400 invalid_upload_size`, `400 invalid_checksum`, `404 directory_not_found`, `409 asset_conflict`, and `413 invalid_upload_size` when the configured maximum is exceeded.

## 2. Upload a Chunk

`PUT /api/v1/uploads/{uploadId}/chunks/{index}` uploads one raw binary chunk.

- Scope: `assets.upload`
- Allowed-root check: the session's target path
- Success: `200`
- Required header: `X-Chunk-SHA256`
- Supports `Idempotency-Key`

```bash
curl --request PUT \
  "https://cdn.example.com/api/v1/uploads/UPLOAD_ID/chunks/0" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/octet-stream" \
  --header "X-Chunk-SHA256: CHUNK_SHA256" \
  --header "Idempotency-Key: UPLOAD_ID-chunk-0" \
  --data-binary "@./chunk-0.bin"
```

```json
{
	"data": {
		"index": 0,
		"state": "complete",
		"size": 52428800,
		"checksum": "CHUNK_SHA256",
		"uploadedAt": "2026-10-09T12:05:00.000Z",
		"replayed": false
	}
}
```

Uploading an already completed index with the same checksum is safe and returns `replayed: true`. A different checksum returns `409 chunk_conflict`. Common validation errors include `400 invalid_chunk_index`, `400 checksum_mismatch`, `400 invalid_chunk_size`, and `413 chunk_too_large`.

Do not send the same chunk concurrently. An active duplicate returns `409 chunk_in_progress`.

## 3. Complete the Upload

`POST /api/v1/uploads/{uploadId}/complete` verifies all chunks, assembles them in index order, validates the total size and optional whole-file checksum, and creates the asset.

- Scope: `assets.upload`
- Allowed-root check: the session's target path
- Success: `201`
- Supports `Idempotency-Key`

```bash
curl --request POST \
  "https://cdn.example.com/api/v1/uploads/UPLOAD_ID/complete" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Idempotency-Key: UPLOAD_ID-complete"
```

The response contains the created [asset object](./assets-and-folders#asset-object). Completion returns `409 missing_chunks` if any chunk is absent, `400 upload_size_mismatch` if the combined size differs, or `400 checksum_mismatch` if the whole-file checksum differs.

## Cancel an Upload

`DELETE /api/v1/uploads/{uploadId}` cancels a pending upload and removes its stored chunks.

- Scope: `assets.upload`
- Allowed-root check: the session's target path
- Success: `200`
- Supports `Idempotency-Key`

```bash
curl --request DELETE \
  "https://cdn.example.com/api/v1/uploads/UPLOAD_ID" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Idempotency-Key: UPLOAD_ID-cancel"
```

```json
{
	"data": {
		"cancelled": true,
		"id": "UPLOAD_ID"
	}
}
```

A session cannot be cancelled while a chunk is actively being written or after completion has started. These cases return `409 upload_not_pending`.

## Complete JavaScript Workflow

This Node.js example reads and uploads one chunk at a time, so it does not load the complete file into memory.

```js
import { createHash } from 'node:crypto';
import { open, stat } from 'node:fs/promises';

const origin = 'https://cdn.example.com';
const apiKey = process.env.CDN_MANAGER_API_KEY;
const sourcePath = './release-video.mp4';
const filename = 'release-video.mp4';
const targetPath = '/media/videos';

async function readChunk(file, length, position) {
	const buffer = Buffer.allocUnsafe(length);
	let offset = 0;
	while (offset < length) {
		const { bytesRead } = await file.read(
			buffer,
			offset,
			length - offset,
			position + offset,
		);
		if (bytesRead === 0) throw new Error('Unexpected end of file');
		offset += bytesRead;
	}
	return buffer;
}

async function api(path, options = {}) {
	const response = await fetch(`${origin}/api/v1${path}`, {
		...options,
		headers: {
			Authorization: `Bearer ${apiKey}`,
			...options.headers,
		},
	});
	const body = await response.json();
	if (!response.ok)
		throw new Error(`${body.error.code}: ${body.error.message}`);
	return body.data;
}

const { size } = await stat(sourcePath);
const upload = await api('/uploads', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Idempotency-Key': `init-${filename}-${size}`,
	},
	body: JSON.stringify({ filename, targetPath, size, mimeType: 'video/mp4' }),
});

const file = await open(sourcePath, 'r');
try {
	for (let index = 0; index < upload.totalChunks; index += 1) {
		const offset = index * upload.chunkSize;
		const length = Math.min(upload.chunkSize, size - offset);
		const chunk = await readChunk(file, length, offset);
		const checksum = createHash('sha256').update(chunk).digest('hex');

		await api(`/uploads/${upload.id}/chunks/${index}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/octet-stream',
				'X-Chunk-SHA256': checksum,
				'Idempotency-Key': `${upload.id}-chunk-${index}`,
			},
			body: chunk,
		});
	}
} finally {
	await file.close();
}

const asset = await api(`/uploads/${upload.id}/complete`, {
	method: 'POST',
	headers: { 'Idempotency-Key': `${upload.id}-complete` },
});

console.log(asset);
```

If the process stops before the one-hour session expiry, retry initialization with the same idempotency key, then resend chunks with the same checksums and idempotency keys. Completed requests are replayed safely during the 24-hour idempotency window. After the upload session expires, start a new session with a new idempotency key.
