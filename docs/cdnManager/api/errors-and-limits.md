---
sidebar_position: 5
---

# Errors, Limits, and Retries

## JSON Response Format

Successful JSON endpoints place their result in `data` and may add pagination information in `meta`:

```json
{
	"data": {},
	"meta": {}
}
```

Errors use a stable machine-readable shape:

```json
{
	"error": {
		"code": "insufficient_scope",
		"message": "API key requires the assets.read scope",
		"requestId": "REQUEST_ID"
	}
}
```

Some validation errors can also include an `error.details` value. Use `error.code` for program logic and retain `requestId` when contacting support. Do not depend on the human-readable message remaining unchanged.

The file-content endpoint returns raw file bytes on success rather than a JSON envelope.

## Request IDs

Every API response includes an `X-Request-ID` header. The same value appears as `error.requestId` in JSON error responses and in the administrator's API usage log.

Log this value with integration failures:

```bash
curl --include "https://cdn.example.com/api/v1/assets?path=/" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

## HTTP Status Codes

| Status | Meaning                                                                           |
| ------ | --------------------------------------------------------------------------------- |
| `200`  | Request completed successfully                                                    |
| `201`  | Asset, folder, or upload session created                                          |
| `400`  | Invalid path, name, filter, body, checksum, chunk, or other input                 |
| `401`  | API key is missing, invalid, expired, revoked, or owned by an inactive user       |
| `403`  | Scope, allowed-root, source-IP, ban, or creator permission denied the request     |
| `404`  | Endpoint, asset, directory, user, upload session, or stored content was not found |
| `409`  | Conflicting asset, idempotency reuse, active request, chunk, or upload state      |
| `410`  | Upload session expired                                                            |
| `413`  | Direct upload, chunk, or total upload exceeds a limit                             |
| `429`  | API rate limit exceeded                                                           |
| `500`  | Unexpected server or storage failure                                              |
| `503`  | Maintenance mode is enabled and the key cannot bypass it                          |

Common authentication and authorization codes include:

- `authentication_required`
- `invalid_api_key`
- `revoked_api_key`
- `expired_api_key`
- `inactive_api_key_owner`
- `ip_not_allowed`
- `insufficient_scope`
- `path_not_allowed`
- `banned`
- `maintenance`

Resource and conflict errors use more specific codes such as `asset_not_found`, `directory_not_found`, `asset_conflict`, `user_not_found`, `upload_not_found`, `missing_chunks`, and `request_in_progress`.

Unknown `/api/v1` routes return a JSON `404 endpoint_not_found` response.

## Rate Limits

The default global limit is 300 requests per minute. Administrators can change it under **Admin > Manage API > Global limit** from 1 through 100,000 requests per minute.

An individual key can have a higher override. The effective limit is the greater of the global baseline and that key's configured override.

API responses provide these headers:

| Header                | Description                                        |
| --------------------- | -------------------------------------------------- |
| `RateLimit-Limit`     | Effective request allowance for the current minute |
| `RateLimit-Remaining` | Requests remaining in the current window           |
| `RateLimit-Reset`     | Seconds until the current window resets            |
| `Retry-After`         | Seconds to wait after a `429` response             |

On `429 rate_limit_exceeded`, wait for `Retry-After` before retrying. Add jitter when many workers share a key so they do not all retry simultaneously.

## Idempotent Mutations

Send a unique `Idempotency-Key` header when a network failure might cause a state-changing request to be repeated:

```bash
curl --request POST "https://cdn.example.com/api/v1/folders" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --header "Idempotency-Key: deploy-842-create-assets" \
  --data '{"parentPath":"/releases","name":"842"}'
```

The key can contain visible, non-whitespace ASCII characters and can be up to 200 characters. Idempotency records are retained for 24 hours and are isolated per API key.

If the first request completed, CDN Manager returns the stored status and response body with:

```text
Idempotency-Replayed: true
```

If the same idempotency key is used with a different method, path, or request payload, the API returns `409 idempotency_conflict`. If the matching first request is still running, it returns `409 request_in_progress`.

The following mutations support idempotency:

- Direct upload, upload-session creation, chunk upload, completion, and cancellation
- Folder creation
- Asset rename, move, and deletion
- Access-setting updates
- User-grant updates and removal

For direct uploads, `X-Content-SHA256` is required when `Idempotency-Key` is present. Keep both header values unchanged when retrying. Chunk uploads always require `X-Chunk-SHA256`.

### Retry Guidance

- Retry connection failures, `429`, and temporary `5xx` responses with exponential backoff and jitter.
- Reuse the original idempotency key and identical payload for a mutation retry.
- Do not automatically retry `400`, `401`, `403`, `404`, `409`, `410`, or `413` until the reported condition is resolved.
- A `409 request_in_progress` means the original operation may still finish; wait and retry with the same key.

## API Usage Logs

Administrators with `admin.api.manage` can review API usage under **Admin > Manage API**. Each record includes the request time, key/public ID, action, route, status, source IP, duration, request ID, targets, and error code when applicable.

The page supports filtering by key, action, IP address, status group, and date range. Usage records are retained for 90 days and then removed automatically.
