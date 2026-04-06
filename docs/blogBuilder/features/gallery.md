---
sidebar_position: 4
---

# Gallery

Blog Builder includes an image gallery for managing and displaying media. Images are automatically optimized on upload.

## Admin Panel

- **Location:** Admin Panel > Gallery (`/admin/gallery`)
- **Required permission:** `managePages`

## Uploading Images

Images can be uploaded directly from the gallery admin page.

- **Supported formats:** JPEG, PNG, WebP, GIF, AVIF
- **Recommend max file size:** 50 MB per file (direct upload)
- **Larger files** can be uploaded using the chunked upload method (handled automatically)

### Automatic Processing

When an image is uploaded, Blog Builder automatically:

- Converts the image to **WebP** format for optimized delivery
- Generates a **thumbnail** (400px wide) for listings and admin views
- Generates a **blur placeholder** (tiny data URL) used while the full image loads

GIFs are preserved as-is to maintain animation. A thumbnail is generated from the first frame.

## Image Fields

Each gallery image has the following editable fields:

| Field    | Description                                                          |
| -------- | -------------------------------------------------------------------- |
| Alt Text | Accessible description of the image (used by screen readers and SEO) |
| Caption  | Optional caption displayed below the image                           |
| Category | Free-text category label used for filtering                          |
| Tags     | Comma-separated tags                                                 |
| Link     | Optional URL (clicking the image navigates to this URL)              |
| Visible  | Toggle to show or hide the image on the public gallery page          |

## Organizing Images

- Images can be filtered by category in the admin panel
- Images can be given a tag in the admin panel
- Images can be hidden via the admin panel
- The display order set in the admin panel is reflected on the public gallery page

## Public Route

| Route      | Description                                    |
| ---------- | ---------------------------------------------- |
| `/gallery` | Public gallery page showing all visible images |

:::info
The `/gallery` route can be disabled in Settings > General > Page Toggles if you do not want a public gallery page.
:::

## Image CDN

Uploaded images are served from the `/cdn/` path:

- Full image: `/cdn/[context]/[filename].webp`
- Thumbnail: `/cdn/[context]/thumbs/[filename].webp`

The context is the upload type (e.g. `gallery`, `blog`, `team`, `settings`).
