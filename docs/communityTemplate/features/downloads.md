---
sidebar_position: 6
---

# Downloads

The downloads system lets you publish files and releases for your community to download. Supports large file uploads (up to 50 GB by default) via chunked upload. Requires the `manageDownloads` permission.

## Public Downloads Page

Files are listed at `/downloads`. Visitors can browse available releases, view file details, and download files.

:::info
Banned users are blocked from downloading files. Attempting to access any `/downloads/` route while banned shows an error.
:::

## Managing Downloads

Go to **Admin Panel > Downloads** to manage all releases.

### Creating a Release

Click **New Release** and fill in:

| Field           | Notes                                                         |
| --------------- | ------------------------------------------------------------- |
| **Title**       | Name of the release shown in the listing                      |
| **Version**     | Version string (e.g., `1.0.0`, `v2.3`)                        |
| **Description** | Markdown description of the release - changelogs, notes, etc. |
| **File**        | The file to attach - uploaded via chunked upload              |
| **Category**    | Optional category for organization                            |
| **Visible**     | Whether the release is publicly visible                       |

### File Uploads

Files are uploaded in chunks, which allows large files (multiple gigabytes) to upload reliably even on slow connections. Progress is shown during upload.

The maximum upload size is controlled by `BODY_SIZE_LIMIT` in your `.env` (default 50 GB) and also by the `client_max_body_size` in your Nginx config.\
Also within the `server.js` file you will find several body limit or similar items that affect this.

### Unused File Cleanup

Community Template automatically cleans up orphaned files on startup. If a file exists on disk but is no longer referenced by any release, it is deleted. This keeps disk usage tidy if releases are deleted without manually removing the files.

### Visibility

Set a release to **not visible** to hide it from the public listing without deleting it. Hidden releases are still accessible to admins.
