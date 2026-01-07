---
sidebar_position: 2
---

# File Management

This guide covers all the file management features in CDN Manager, from uploading files to organizing your content library.

## Uploading Files

CDN Manager supports multiple methods for uploading files:

### Single File Upload

1. Navigate to the desired directory
2. Click the "Upload" button
3. Select a file from your computer
4. Wait for the upload to complete
5. The file will appear in your current directory

### Multiple File Upload

1. Click the "Upload" button
2. Select multiple files using Ctrl/Cmd+Click or Shift+Click
3. All selected files will upload simultaneously
4. Progress is shown for each file

### Large File Upload (Chunked)

For files larger than a certain threshold, CDN Manager automatically uses chunked uploading:

- Files are split into 50MB+ chunks
- Each chunk uploads separately
- Chunks are automatically combined after upload completes
- More reliable for large files and slow connections
- Resumable if connection is interrupted

## Creating Folders

Organize your files with folders:

1. Click the "New Folder" button
2. Enter a folder name
3. Click Create
4. The folder appears in your current directory

**Folder Naming Tips:**

- Use descriptive names
- Avoid special characters
- Use hyphens or underscores instead of spaces
- Keep names concise but meaningful

## Viewing Files

CDN Manager can display many file types directly in the browser:

### Supported File Types

**Images:**

- JPEG, PNG, GIF, WebP, SVG
- Automatic thumbnail generation
- Full-size preview on click

**Videos:**

- MP4, WebM, OGG
- Built-in video player
- Streaming support

**Documents:**

- PDF files (in-browser PDF viewer)
- Text files (TXT, MD, JSON, etc.)
- Code files with syntax highlighting

### How to View Files

1. Click on a file in the file manager
2. Or click the "View" button/icon
3. File opens in a preview modal or new tab
4. For images, click to zoom

## Downloading Files

Download files directly to your computer:

### Single File Download

1. Right-click on a file
2. Select "Download"
3. Or click the download icon/button
4. File downloads to your browser's download folder

### Multiple File Download

CDN Manager does not currently support bulk downloads, but you can:

- Download files individually
- Use the CDN routes to access files programmatically

## Moving Files

Reorganize your content by moving files and folders:

### Move Single Item

1. Right-click on a file or folder
2. Select "Move"
3. Choose the destination folder
4. Click Confirm
5. Item moves to the new location

### Move Multiple Items

1. Enable selection mode
2. Select multiple files/folders
3. Click "Move Selected"
4. Choose destination folder
5. All selected items move together

**Important Notes:**

- Moving a folder moves all its contents
- Thumbnails and child paths are automatically updated
- Update any hardcoded links if you've shared CDN URLs

## Renaming Files

Change file or folder names:

1. Right-click on the item
2. Select "Rename"
3. Enter the new name
4. Press Enter or click Save

**Renaming Tips:**

- Keep the same file extension
- Avoid special characters
- Update any hardcoded links if you've shared CDN URLs

## Deleting Files

Remove unwanted files or folders:

### Delete Single Item

1. Right-click on a file or folder
2. Select "Delete"
3. Confirm the deletion
4. Item is permanently removed

### Delete Multiple Items

1. Enable selection mode
2. Select multiple files/folders
3. Click "Delete Selected"
4. Confirm the deletion
5. All selected items are removed

**Warning:**

- Deletion is permanent and cannot be undone
- Deleting a folder deletes all contents recursively
- Thumbnails are also removed

## Bulk Operations

Manage multiple files at once:

### Mass Selection

1. Click the checkbox icon to enable selection mode
2. Click individual items to select them
3. Or use "Select All" to select everything in current view

### Bulk Actions Available

**Move:** Move all selected items to a new folder

**Delete:** Remove all selected items at once

**Name List:** Export selected file paths in various formats:

- Comma-separated
- Newline-separated
- JSON array

### Name File Lists

1. Select files you want to export
2. Click "Name List"
3. Choose format:
   - **Comma-separated:** `file1.jpg, file2.png, file3.pdf`
   - **Newline-separated:** One file per line
   - **JSON array:** `["file1.jpg", "file2.png", "file3.pdf"]`
4. Copy the output to your clipboard
5. Use in scripts, documentation, or external tools

## Searching and Filtering

Find files quickly in large libraries:

### Search by Name

1. Use the search box at the top
2. Type part of a filename
3. Results filter in real-time
4. Search is case-insensitive

### Sorting

Sort your files by:

- **Name** (alphabetical)
- **Type** (groups by file extension)
- **Size** (smallest to largest or reverse)
- **Date** (newest first or oldest first)

Click column headers to change sort order.

## Thumbnails

Images automatically get thumbnail previews:

### Automatic Generation

- Thumbnails created on upload
- Generated using Sharp (high quality)
- Stored separately from original files
- Faster loading in file manager

### Thumbnail Sizes

- Optimized for grid view
- Click thumbnail to see full-size image
- Original files remain unchanged

## File Information

View detailed information about files:

1. Click on a file
2. View metadata:
   - File name
   - File size
   - File type
   - Upload date
   - Last modified
   - View/download count (if enabled)

## CDN Links

Every file has a CDN link:

### Getting CDN Links

1. Click the file name
2. Link is copied to clipboard

Or

1. Hit "View" button for a file
2. Select the URL in the address bar
3. Copy

### CDN Link Format

```
https://yourdomain.com/cdn/path/to/file.jpg
```

### CDN Link Options

**View:** Default action (view in browser)

```
https://yourdomain.com/cdn/path/to/file.jpg
```

**Download:** Force download

```
https://yourdomain.com/cdn/path/to/file.jpg?action=download
```

### Access Control

CDN links respect permissions:

- Public files: accessible to anyone
- Users-only: requires login
- Whitelist: only from whitelisted IPs/domains
- File permissions override directory permissions

## Best Practices

### Organize with Folders

- Create a clear folder structure
- Group related files together
- Use descriptive folder names

### Use Consistent Naming

- Develop a naming convention
- Include dates or versions if needed
- Avoid spaces (use hyphens or underscores)

### Regular Cleanup

- Delete unused files periodically
- Review file statistics to find unused content
- Keep your CDN organized and efficient

### Large Files

- Let chunked upload handle large files
- Don't interrupt large uploads
- Check file size before uploading

### Thumbnails

- Let CDN Manager generate thumbnails automatically
- Don't upload separate thumbnail versions
- Thumbnails are optimized for performance

## Troubleshooting

### Upload Fails

- Check file size limits (configured in `.env`)
- Verify you have upload permissions
- Check available disk space
- Try a smaller file first

### Cannot View File

- Check if file type is supported for preview
- Try downloading instead
- Verify file isn't corrupted

### Cannot Delete File

- Verify you have delete permissions
- Check if file is locked or in use
- Contact an administrator

### Missing Files

- Check you're in the correct directory
- Use search to locate files
- Review audit logs for deletion events
- Verify permissions allow you to see the file
