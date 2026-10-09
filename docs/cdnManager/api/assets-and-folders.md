---
sidebar_position: 2
---

# Assets and Folders

Assets are files or folders. External integrations address an asset by its stable `id`; logical paths are used for listing, destinations, and allowed-root checks.

## Asset Object

Endpoints that return asset metadata use this representation:

```json
{
	"id": "ASSET_ID",
	"name": "logo.png",
	"path": "/media/logo.png",
	"type": "file",
	"mimeType": "image/png",
	"size": 48231,
	"fileCount": null,
	"ownerId": "USER_ID",
	"createdAt": "2026-10-09T12:00:00.000Z",
	"updatedAt": "2026-10-09T12:00:00.000Z",
	"views": 12,
	"downloads": 3,
	"url": "https://cdn.example.com/cdn/media/logo.png"
}
```

For folders, `type` is `folder`, `fileCount` contains the stored child count, and `url` is `null`. Missing MIME types, owners, or timestamps are returned as `null` where applicable.

## List Assets

`GET /api/v1/assets` lists the direct children of a directory.

- Scope: `assets.read`
- Allowed-root check: the requested `path`
- Success: `200`

| Query parameter | Default | Description                                                  |
| --------------- | ------- | ------------------------------------------------------------ |
| `path`          | `/`     | Directory to list                                            |
| `limit`         | `100`   | Page size from 1 through 250                                 |
| `cursor`        | none    | Opaque `nextCursor` from the previous response               |
| `type`          | any     | `file` or `folder`                                           |
| `search`        | none    | Case-insensitive name search, up to 100 characters           |
| `mimeType`      | none    | Exact type such as `image/png` or wildcard such as `image/*` |
| `extension`     | none    | Extension with or without a leading dot, such as `png`       |

`mimeType` and `extension` apply only to files and cannot be combined with `type=folder`.

```bash
curl --get "https://cdn.example.com/api/v1/assets" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --data-urlencode "path=/media" \
  --data-urlencode "type=file" \
  --data-urlencode "mimeType=image/*" \
  --data-urlencode "limit=50"
```

```json
{
	"data": [
		{
			"id": "ASSET_ID",
			"name": "logo.png",
			"path": "/media/logo.png",
			"type": "file",
			"mimeType": "image/png",
			"size": 48231,
			"fileCount": null,
			"ownerId": "USER_ID",
			"createdAt": "2026-10-09T12:00:00.000Z",
			"updatedAt": "2026-10-09T12:00:00.000Z",
			"views": 12,
			"downloads": 3,
			"url": "https://cdn.example.com/cdn/media/logo.png"
		}
	],
	"meta": {
		"path": "/media",
		"limit": 50,
		"filters": {
			"type": "file",
			"search": null,
			"mimeType": "image/*",
			"extension": null
		},
		"nextCursor": null
	}
}
```

Pass `meta.nextCursor` unchanged to retrieve the next page. Treat cursors as opaque and do not construct or edit them.

Common errors include `400 invalid_limit`, `400 invalid_cursor`, invalid filter errors, and `404 directory_not_found`.

## Get Asset Metadata

`GET /api/v1/assets/{id}` returns one asset.

- Scope: `assets.read`
- Allowed-root check: the asset's current path
- Success: `200`

```bash
curl "https://cdn.example.com/api/v1/assets/ASSET_ID" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

The response contains the [asset object](#asset-object) in `data`. A missing ID returns `404 asset_not_found`.

## Download File Content

`GET /api/v1/assets/{id}/content` streams a file as an attachment.

- Scope: `assets.download`
- Allowed-root check: the file's current path
- Success: `200`

```bash
curl "https://cdn.example.com/api/v1/assets/ASSET_ID/content" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --output "downloaded-file.png"
```

The response includes the file's `Content-Type`, `Content-Length`, `Content-Disposition`, and an `ETag` containing its asset ID. Downloading increments the asset's download count.

A folder returns `400 not_a_file`; missing stored content returns `404 asset_content_missing`.

## Upload a File Directly

`POST /api/v1/assets/upload` accepts one file of up to 50 MiB as `multipart/form-data`.

- Scope: `assets.upload`
- Allowed-root check: the destination `path`
- Success: `201`

| Input                     | Required | Description                                                   |
| ------------------------- | -------- | ------------------------------------------------------------- |
| Query `path`              | No       | Destination folder; defaults to `/`                           |
| Query `filename`          | No       | Overrides the multipart filename                              |
| Form field `file`         | Yes      | The single file to upload                                     |
| Header `X-Content-SHA256` | No       | Hexadecimal SHA-256 checksum; required when using idempotency |
| Header `Idempotency-Key`  | No       | Makes a retry replay-safe for 24 hours                        |

```bash
curl --request POST \
  "https://cdn.example.com/api/v1/assets/upload?path=%2Fmedia&filename=logo.png" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "X-Content-SHA256: FILE_SHA256" \
  --header "Idempotency-Key: upload-logo-20261009" \
  --form "file=@./logo.png;type=image/png"
```

The response contains the created [asset object](#asset-object). Files larger than 50 MiB return `413 direct_upload_too_large` and must use the [chunked upload API](./chunked-uploads). Other common errors are `400 missing_file`, `400 checksum_mismatch`, `404 directory_not_found`, and `409 asset_conflict`.

### JavaScript Direct Upload

```js
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const origin = 'https://cdn.example.com';
const apiKey = process.env.CDN_MANAGER_API_KEY;
const bytes = await readFile('./logo.png');
const checksum = createHash('sha256').update(bytes).digest('hex');
const form = new FormData();
form.append('file', new Blob([bytes], { type: 'image/png' }), 'logo.png');

const response = await fetch(
	`${origin}/api/v1/assets/upload?path=${encodeURIComponent('/media')}`,
	{
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'X-Content-SHA256': checksum,
			'Idempotency-Key': 'upload-logo-20261009',
		},
		body: form,
	},
);

const body = await response.json();
if (!response.ok) throw new Error(`${body.error.code}: ${body.error.message}`);
console.log(body.data);
```

## Create a Folder

`POST /api/v1/folders` creates a folder and inherits applicable directory permissions from its parent.

- Scope: `folders.create`
- Allowed-root check: `parentPath`
- Success: `201`
- Supports `Idempotency-Key`

```bash
curl --request POST "https://cdn.example.com/api/v1/folders" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --header "Idempotency-Key: create-brand-assets" \
  --data '{"parentPath":"/media","name":"brand-assets"}'
```

The response contains the created folder's [asset object](#asset-object). Common errors are `400 invalid_name`, `404 directory_not_found`, and `409 asset_conflict`.

## Rename an Asset

`POST /api/v1/assets/{id}/rename` renames a file or folder.

- Scope: `assets.rename`
- Allowed-root check: both the current and resulting paths
- Success: `200`
- Supports `Idempotency-Key`

```bash
curl --request POST "https://cdn.example.com/api/v1/assets/ASSET_ID/rename" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --header "Idempotency-Key: rename-ASSET_ID-v2" \
  --data '{"name":"logo-v2.png"}'
```

The response contains the updated asset object. Renaming a folder also updates descendant paths and related settings and grants. Invalid names return `400 invalid_name`; a duplicate destination returns `409 asset_conflict`.

## Move an Asset

`POST /api/v1/assets/{id}/move` moves a file or folder into another folder.

- Scope: `assets.move`
- Allowed-root check: both the asset's current path and `targetPath`
- Success: `200`
- Supports `Idempotency-Key`

```bash
curl --request POST "https://cdn.example.com/api/v1/assets/ASSET_ID/move" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --header "Idempotency-Key: move-ASSET_ID-archive" \
  --data '{"targetPath":"/archive"}'
```

The response contains the updated asset object. Moving a folder also moves descendants and updates related settings and grants. A missing destination returns `404 directory_not_found`; a duplicate destination returns `409 asset_conflict`.

## Delete an Asset

`DELETE /api/v1/assets/{id}` permanently deletes a file or folder. Deleting a folder recursively removes its descendants.

- File scope: `assets.delete`
- Folder scope: `folders.delete`
- Allowed-root check: the asset's current path
- Success: `200`
- Supports `Idempotency-Key`

```bash
curl --request DELETE "https://cdn.example.com/api/v1/assets/ASSET_ID" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Idempotency-Key: delete-ASSET_ID"
```

```json
{
	"data": {
		"deleted": true,
		"id": "ASSET_ID"
	}
}
```

:::danger[Permanent deletion]
The API does not provide a recycle bin or restore endpoint. Back up important content before deleting it.
:::
