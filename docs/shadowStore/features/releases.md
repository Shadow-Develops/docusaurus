---
sidebar_position: 2
pagination_next: null
pagination_prev: null
---

# Releases

The Releases feature allows you to manage product versions, updates, and file distributions for your digital products. This system provides version tracking, release notes, file management, and automatic notifications to keep your customers informed about product updates.

## Access Control

Access to releases is automatically controlled based on product ownership:

- **Free Products**: Public access by default (configurable via the "Require Account" setting)
- **Paid Products**: Only customers who have purchased the product can view and download releases
- **Admins**: Users with `owner` or `manageProducts` permissions can always access all releases

## Creating a Release

1. Navigate to the product's releases page: `/releases/[product-id]`
2. Click "Create New Release" (admin only)
3. Fill in the release information:
   - **Title**: Release name (e.g., "Major Update", "Bug Fixes")
   - **Version**: Semantic version number (e.g., "1.0.0", "2.3.1")
   - **Description**: Detailed release notes (supports Markdown)
   - **Files**: Upload release files (stored in `/static/files`)
4. Click "Create Release"

## Managing Releases

### Viewing Releases

Users can view all releases for a product they own at `/releases/[product-id]`. The releases are displayed in chronological order with the newest first.

### Editing Releases

Admins can edit existing releases by navigating to `/releases/edit/[product-id]` and selecting the release to modify. You can update:

- Release title
- Version number
- Description/notes
- Replace or add files

### Deleting Releases

Releases can be deleted from the edit interface. This will also remove associated files from the server.

## File Management

Release files are automatically managed by the system:

- Files are stored in `/static/files` directory
- File uploads are processed and linked to the release
- Download access is restricted based on product ownership
- Multiple files can be attached to a single release

## Discord Notifications

When a new release is created, Shadow Store can automatically send notifications to your Discord server:

1. Configure Discord integration in **Admin Panel > Integrations > Discord**
2. Set up release notification settings:
   - **Channel ID**: The Discord channel to post release announcements
   - **Ping Role**: Optional role to ping (role ID, `everyone`, or `here`)
3. New releases will automatically post formatted announcements with:
   - Product name
   - Release title and version
   - Release notes
   - Download link

## Permissions

To manage releases, users must have one of the following permissions:

- `owner` - Full store owner access
- `manageProducts` - Product management permissions

Regular customers can only view releases for products they own.

## API Access

Release version information is also available via the API. See the [Release Version API documentation](/shadowStore/api/version) for details on programmatically checking for updates.
