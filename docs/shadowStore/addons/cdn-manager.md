---
sidebar_position: 4
---

# CDN Manager

The CDN Manager integration lets Shadow Store administrators browse and select media from a [CDN Manager](https://shadowdevs.com/store/cdnmanager) installation without copying public URLs between applications. Selected assets are registered with Shadow Store and delivered through the store, so CDN delivery rules continue to apply.

## Requirements

- A running CDN Manager installation with its public `ORIGIN` configured
- A CDN Manager user who can create remote API keys
- Owner access to **Admin Panel > Integrations** in Shadow Store
- A CDN Manager API key whose allowed root contains the folder Shadow Store will use

The complete API key is displayed only once. Store it as a server-side secret and never place it in client-side code or commit it to source control.

## Create the CDN Manager API Key

In CDN Manager:

1. Open **Admin Panel > Manage API** (`/admin/api`).
2. Select **Create API Key**.
3. Give the key a recognizable name, such as `Shadow Store`.
4. Add the folder Shadow Store should use as an **Allowed Root**, such as `/media/store`.
5. Grant the scopes required for the access mode you intend to use:

| Shadow Store mode | Required scopes                                  |
| ----------------- | ------------------------------------------------ |
| Read only         | `assets.read`                                    |
| Read/write        | `assets.read`, `assets.upload`, `folders.create` |

6. Create the key and copy the complete token immediately.

The user creating the key must hold `admin.api.manage` and the corresponding CDN permissions at every selected root. See [CDN Manager API authentication, scopes, and allowed roots](/cdnManager/api/overview) for the complete delegation rules.

:::tip[Use a dedicated root]
Grant Shadow Store access only to the media it needs. For example, use `/media/store` instead of `/` and use that same path as the Shadow Store **Base root**.
:::

## Configure the Server

Add these values to the Shadow Store server environment:

```env
CDN_MANAGER_ORIGIN=https://cdn.example.com
CDN_MANAGER_API_KEY=cdnm_your_complete_api_key
```

- `CDN_MANAGER_ORIGIN` is the public origin of the CDN Manager installation. Do not include `/api/v1` or another path.
- `CDN_MANAGER_API_KEY` is the complete server-side API key created in CDN Manager.

Restart Shadow Store after changing its environment. These values are intentionally not editable in the admin panel.

## Enable the Integration

1. Open **Admin Panel > Integrations > CDN Manager**.
2. Set **Integration** to **Enabled**.
3. Choose an **Access mode**:
   - **Read only** allows browsing and selecting existing assets.
   - **Read/write** also allows uploading media and creating folders from Shadow Store.
4. Set **Base root** to an allowed root on the API key, such as `/media/store`.
5. Choose a **Media input policy**:
   - **Allow any media URL** keeps direct URL fields available alongside the CDN picker.
   - **CDN Manager only** requires new or changed direct media to be selected from CDN Manager. Existing unchanged media URLs remain valid.
6. Save the settings.
7. Select **Test connection**.

The connection test verifies `assets.read` access and confirms that the base root is available to the Shadow Store server. In read/write mode, upload and folder-creation permissions are checked when those actions are first used.

## Use the Asset Picker

When the integration is configured and enabled, supported image and video fields display **Add from CDN**. The picker lets authorized administrators:

- Browse within the configured base root using breadcrumbs
- Search the current folder
- Refresh the listing or load additional results
- Select one asset for a single-media field
- Select multiple assets for gallery and carousel fields
- Upload media or create folders when read/write mode is enabled

The picker filters results for the field being edited. Image fields show image assets, while video fields show video assets. Assets outside the configured base root or assets that Shadow Store cannot deliver are hidden.

For multi-select fields, select each asset and then choose **Use selected**. The returned store media URLs are added to the existing list without removing its current entries.

### Upload Behavior

- Files up to and including 50 MiB use a direct upload.
- Larger files automatically use a chunked upload with progress reporting.
- Failed chunked uploads are cancelled automatically when possible.
- Upload and folder controls appear only in read/write mode.

## Media Delivery and Access

Shadow Store does not save the CDN Manager API key in page or product content. When an administrator selects an asset, Shadow Store registers it and saves a store media URL. The store then checks the asset's CDN delivery access and proxies supported image or video content to visitors.

This means:

- The API key remains server-side.
- CDN Manager delivery restrictions remain in effect.
- Unavailable, unsupported, or no-longer-authorized assets return as unavailable instead of exposing the upstream resource.
- Moving the configured base root can make previously selected assets outside the new root unavailable.

The authenticated `/api/cdn-manager/*` routes in Shadow Store support the admin picker and media delivery. They are internal integration routes, not a public automation API. Use [CDN Manager's public `/api/v1` API](/cdnManager/api/) for external automation.

## Permissions

Only the store owner can configure or test the integration. The asset picker is available to owners and staff whose work requires media selection through one of these permissions:

- `manageProducts`
- `manageContent`
- `manageLayout`
- `manageStore`

The picker still enforces the permissions of the page or product editor in which it appears.

## Troubleshooting

### CDN Manager is not configured

- Confirm both environment variables are present on the Shadow Store server.
- Confirm `CDN_MANAGER_ORIGIN` is a valid `http://` or `https://` origin without `/api/v1`.
- Restart Shadow Store after changing the environment.

### Connection test returns 401 or 403

- Confirm the complete API key was copied and is still active.
- Confirm the key's creator is active and still has `admin.api.manage`.
- Grant `assets.read` at the configured root.
- Confirm the Shadow Store base root is equal to or below one of the key's allowed roots.
- If the key has an IP allowlist, include the public source IP used by the Shadow Store server.

### Upload or folder creation fails

- Set the Shadow Store access mode to **Read/write**.
- Grant `assets.upload` to upload files.
- Grant `folders.create` to create folders.
- Confirm those scopes and their matching user permissions apply to the configured root.

### Assets are missing from the picker

- Check that the asset is inside the configured base root.
- Confirm the field accepts the asset's media type.
- Confirm CDN delivery settings allow the Shadow Store origin to retrieve the asset.
- Select **Refresh** to bypass the cached listing and delivery check.

### CDN-only policy rejects a save

Use **Add from CDN** for every new or changed direct image or video. The policy allows unchanged legacy URLs, but it prevents adding or replacing media with another external URL.
