---
sidebar_position: 4
---

# Access and User Grants

The API exposes two separate access-control systems:

- **Access settings** control how a file or folder can be delivered: publicly, to signed-in users, through the CDN host, or to an allowlist.
- **User grants** set CDN management permissions for a specific user and resource path.

These endpoints use stable asset IDs in the URL and evaluate allowed roots against the asset's current logical path.

## Access Settings Object

```json
{
	"path": "/media/logo.png",
	"accessMode": "public",
	"downloadMode": "public",
	"allowedDomains": [],
	"allowedIPs": [],
	"inherited": true,
	"inheritedFrom": "/media"
}
```

`accessMode` accepts:

- `public`
- `users-only`
- `cdn-only`
- `whitelist`

`downloadMode` accepts:

- `public`
- `users-only`
- `whitelist`

An allowlist can contain up to 100 domain entries and 100 IPv4 or IPv4/CIDR entries. Domain values cannot contain whitespace or `/`. Wildcard domains use the form `*.example.com`.

When settings are inherited, `inherited` is `true` and `inheritedFrom` identifies the source folder. Updating the asset creates explicit settings for that path.

## Get Access Settings

`GET /api/v1/assets/{id}/access` returns effective settings, including inherited values.

- Scope: `access.read`
- Allowed-root check: the asset's current path
- Success: `200`

```bash
curl "https://cdn.example.com/api/v1/assets/ASSET_ID/access" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

The response contains the [access settings object](#access-settings-object) in `data`. A missing asset returns `404 asset_not_found`.

## Update Access Settings

`PUT /api/v1/assets/{id}/access` replaces the asset's explicit delivery settings.

- Scope: `access.write`
- Allowed-root check: the asset's current path
- Success: `200`
- Supports `Idempotency-Key`

All four JSON fields are accepted. Send empty arrays when no domain or IP entries are needed.

```bash
curl --request PUT "https://cdn.example.com/api/v1/assets/ASSET_ID/access" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --header "Idempotency-Key: access-ASSET_ID-v1" \
  --data '{
    "accessMode":"whitelist",
    "downloadMode":"users-only",
    "allowedDomains":["assets.example.com","*.example.net"],
    "allowedIPs":["203.0.113.10","198.51.100.0/24"]
  }'
```

```json
{
	"data": {
		"assetId": "ASSET_ID",
		"settings": {
			"accessMode": "whitelist",
			"downloadMode": "users-only",
			"allowedDomains": ["assets.example.com", "*.example.net"],
			"allowedIPs": ["203.0.113.10", "198.51.100.0/24"]
		}
	}
}
```

Invalid modes or allowlist entries return `400 invalid_access_settings`.

## List User Grants

`GET /api/v1/assets/{id}/grants` lists users with a resource-specific grant on the asset.

- Scope: `grants.read`
- Allowed-root check: the asset's current path
- Success: `200`

```bash
curl "https://cdn.example.com/api/v1/assets/ASSET_ID/grants" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

```json
{
	"data": [
		{
			"userId": "USER_ID",
			"username": "Example User",
			"email": "user@example.com",
			"permissions": {
				"path": "/media",
				"view": true,
				"download": true,
				"upload": false,
				"edit": false,
				"delete": false,
				"move": false,
				"createFolder": false,
				"manageFilePermissions": false,
				"manageDirectoryPermissions": false
			}
		}
	]
}
```

## Permission Fields

A folder grant accepts these boolean fields:

| Field                        | Meaning                         |
| ---------------------------- | ------------------------------- |
| `view`                       | View the folder and its content |
| `download`                   | Download files                  |
| `upload`                     | Upload files into the folder    |
| `edit`                       | Edit file content               |
| `delete`                     | Delete files or folders         |
| `move`                       | Move or rename assets           |
| `createFolder`               | Create child folders            |
| `manageFilePermissions`      | Manage file grants              |
| `manageDirectoryPermissions` | Manage folder grants            |

A file grant accepts `view`, `download`, `edit`, `delete`, `move`, and `manageFilePermissions`.

Updating a grant produces a complete permission object: any allowed field omitted from the request is stored as `false`. Unknown fields or non-boolean values return `400 invalid_permissions`.

## Set a User Grant

`PUT /api/v1/assets/{id}/grants/{userId}` adds or replaces one user's grant.

- Scope: `grants.write`
- Allowed-root check: the asset's current path
- Success: `200`
- Supports `Idempotency-Key`

```bash
curl --request PUT \
  "https://cdn.example.com/api/v1/assets/ASSET_ID/grants/USER_ID" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Content-Type: application/json" \
  --header "Idempotency-Key: grant-ASSET_ID-USER_ID-v1" \
  --data '{
    "permissions": {
      "view": true,
      "download": true,
      "upload": true,
      "createFolder": true
    },
    "syncToChildren": true
  }'
```

`syncToChildren` is used only for folders. Set it to `true` to apply the normalized permissions to existing descendants as well as the selected folder.

```json
{
	"data": {
		"assetId": "ASSET_ID",
		"userId": "USER_ID",
		"permissions": {
			"view": true,
			"download": true,
			"upload": true,
			"edit": false,
			"delete": false,
			"move": false,
			"createFolder": true,
			"manageFilePermissions": false,
			"manageDirectoryPermissions": false
		},
		"syncResult": {
			"directoriesUpdated": 4,
			"filesUpdated": 18
		}
	}
}
```

When child synchronization is not requested, `syncResult` is `null`. A missing user returns `404 user_not_found`.

## Remove a User Grant

`DELETE /api/v1/assets/{id}/grants/{userId}` removes the resource-specific grant. The user then falls back to any applicable inherited or general permissions.

- Scope: `grants.write`
- Allowed-root check: the asset's current path
- Success: `200`
- Supports `Idempotency-Key`

```bash
curl --request DELETE \
  "https://cdn.example.com/api/v1/assets/ASSET_ID/grants/USER_ID" \
  --header "Authorization: Bearer YOUR_API_KEY" \
  --header "Idempotency-Key: remove-grant-ASSET_ID-USER_ID"
```

```json
{
	"data": {
		"deleted": true,
		"assetId": "ASSET_ID",
		"userId": "USER_ID"
	}
}
```
