---
sidebar_position: 1
---

# Overview and Authentication

CDN Manager provides a versioned HTTP API for managing assets from deployment tools, content pipelines, and other services.

All API routes use this base URL:

```text
https://cdn.example.com/api/v1
```

Replace `https://cdn.example.com` with the `ORIGIN` configured for your CDN Manager instance.

## Create an API Key

You need the `admin.api.manage` permission to open **Admin > Manage API** (`/admin/api`) and manage API keys.

1. Open **Admin > Manage API**.
2. Select **Create API Key**.
3. Enter a recognizable name for the service.
4. Select at least one allowed root and one scope.
5. Optionally set an expiration, IPv4/CIDR allowlist, per-key request limit, or maintenance bypass.
6. Create the key and copy the token immediately.

:::warning[Copy the key now]
The complete token is displayed only once. CDN Manager stores a hash of its secret and cannot show the token again. Create a replacement key if it is lost.
:::

Treat an API key like a password. Keep it in a secret manager, never place it in client-side code, and never commit it to source control.

## Authenticate Requests

Send the complete key as a bearer token:

```bash
curl "https://cdn.example.com/api/v1/assets?path=/" \
  --header "Authorization: Bearer YOUR_API_KEY"
```

API keys begin with `cdnm_`. A missing, malformed, expired, revoked, or otherwise inactive key receives a `401` response.

### JavaScript Example

```js
const origin = 'https://cdn.example.com';
const apiKey = process.env.CDN_MANAGER_API_KEY;

const response = await fetch(`${origin}/api/v1/assets?path=/`, {
	headers: {
		Authorization: `Bearer ${apiKey}`,
	},
});

const body = await response.json();
if (!response.ok) {
	throw new Error(`${body.error.code}: ${body.error.message}`);
}

console.log(body.data);
```

## Scopes

Scopes limit what an API key can do. Grant only the scopes a service needs.

| Scope             | Allows                                                | Permission required from the key manager |
| ----------------- | ----------------------------------------------------- | ---------------------------------------- |
| `assets.read`     | List assets and read asset metadata                   | `cdn.view`                               |
| `assets.download` | Download file content                                 | `cdn.download`                           |
| `assets.upload`   | Use direct and chunked uploads                        | `cdn.upload`                             |
| `assets.rename`   | Rename files and folders                              | `cdn.edit`                               |
| `assets.move`     | Move files and folders                                | `cdn.move`                               |
| `assets.delete`   | Delete files                                          | `cdn.delete`                             |
| `folders.create`  | Create folders                                        | `cdn.folder.create`                      |
| `folders.delete`  | Delete folders                                        | `cdn.folder.delete`                      |
| `access.read`     | Read file and folder delivery settings                | Both permission-management permissions   |
| `access.write`    | Update file and folder delivery settings              | Both permission-management permissions   |
| `grants.read`     | List resource-specific user grants                    | Both permission-management permissions   |
| `grants.write`    | Add, replace, or remove resource-specific user grants | Both permission-management permissions   |

“Both permission-management permissions” means `cdn.file.permissions` and `cdn.directory.permissions`.

When a key is created or edited, the manager must have `admin.api.manage` and every permission shown above at every selected root. For example, granting `assets.delete` for `/releases` requires permission to delete assets at `/releases`. At request time, the key is authorized by its scopes and allowed roots, and its creator must still be an active user with `admin.api.manage`.

The key remains tied to its creator. It stops authenticating if that user is removed, banned, or loses `admin.api.manage`.

## Allowed Roots

Every key has one or more allowed roots. A root authorizes that path and its descendants on path-segment boundaries:

- `/media` allows `/media` and `/media/images/logo.png`.
- `/media` does not allow `/media-private/file.png`.
- `/` allows the entire asset tree.

Operations involving two paths, such as moving an asset, require both paths to be allowed. A key's scopes and allowed roots do not override the creator's CDN permissions.

## Optional Key Controls

### Expiration

Set a future expiration time for temporary integrations. An expired key returns `401 expired_api_key`.

### Source IP Allowlist

Restrict a key to exact IPv4 addresses or IPv4 CIDR ranges, one entry per line. Requests from other addresses return `403 ip_not_allowed`.

If CDN Manager runs behind a reverse proxy, configure `TRUSTED_PROXY_CIDRS` so the application can identify the client address safely. See [Configuration](/cdnManager/install/config#trusted-reverse-proxies).

### Rate Limit Override

The global API limit defaults to 300 requests per minute. A key can have a higher per-key limit, but its override cannot be lower than the global baseline. See [Errors, Limits, and Retries](./errors-and-limits#rate-limits).

### Maintenance Bypass

API requests normally receive `503 maintenance` while maintenance mode is enabled. Select **Allow during maintenance** only for services that must continue operating during maintenance.

## Edit and Revoke Keys

The Remote API page shows each key's prefix, creator, creation date, last use, expiration, scopes, roots, and restrictions. You can edit an active key without changing its token.

Revocation is permanent and takes effect on the next request. Create a new key when rotating credentials; do not revoke the old key until the integration has switched successfully.

## Next Steps

- [Assets and Folders](./assets-and-folders)
- [Chunked Uploads](./chunked-uploads)
- [Access and User Grants](./access-and-grants)
- [Errors, Limits, and Retries](./errors-and-limits)
