---
sidebar_position: 4
pagination_next: null
pagination_prev: null
---

# Gallery

The Gallery feature allows you to create and manage image collections with optional grouping, descriptions, and metadata. Perfect for showcasing products, portfolios, event photos, or any visual content.

## Accessing Gallery Management

Navigate to **Admin Panel > Pages > Gallery** to access the gallery management interface.

## Uploading Images

1. Navigate to **Admin Panel > Pages > Gallery**
2. In the "Upload Images" section at the top
3. Fill in the upload form:
   - **Images**: Select one or more image files
   - **Group**: Assign to a group (optional)
   - **Create New Group**: Option to create a new group
4. Click "Upload Images"

Multiple images can be uploaded simultaneously and will all be assigned to the same group.

## Image Fields

### Image Files

Upload one or more images in a single batch.

**Supported Formats:**

- JPG/JPEG
- PNG
- WebP
- GIF

**Recommendations:**

- **Resolution**: 1920x1080px or higher for quality
- **File Size**: Under 5MB per image for optimal performance
- **Aspect Ratio**: Consistent ratios look better in galleries
- **Optimization**: Compress images before upload

### Group

Organize images into logical collections or categories.

**Group Uses:**

- Categorize images by theme or event
- Create separate galleries for different purposes
- Filter and browse images by group
- Organize large image collections

**Example Groups:**

```
- Product Photos
- Event 2024
- Team Photos
- Customer Submissions
- Portfolio Work
- Before & After
```

**Creating New Groups:**

1. When uploading, check "Create New Group"
2. Enter the new group name
3. Images will be assigned to the new group
4. Group is saved for future use

**Using Existing Groups:**

- Select from the dropdown of existing groups
- All images in the upload will be assigned to that group
- Leave empty for ungrouped images

### Title

A short name or caption for the image.

**Examples:**

```
Product Launch Event
Summer Collection 2024
Main Office Interior
Team Building Day
```

**Note:** Titles can be added or edited after upload.

### Alt Text

Alternative text for accessibility and SEO.

**Purpose:**

- Screen readers use alt text for visually impaired users
- Displays if image fails to load
- Helps with image SEO

**Writing Good Alt Text:**

- Describe what's in the image
- Be specific and concise
- Don't start with "image of" or "picture of"
- Include relevant keywords naturally

**Examples:**

```
Modern office workspace with standing desks
Team of five developers collaborating on project
Red product box with white logo on wooden table
```

### Description

Longer text providing context or details about the image.

**Uses:**

- Provide background information
- Explain the context or story
- Add metadata or credits
- Include relevant dates or locations

**Example:**

```
Taken at our annual company retreat in Lake Tahoe.
This photo captures the team during our hackathon session
where we built the new dashboard feature.
```

## Managing Gallery Images

### Viewing Images

The gallery management interface displays all images in a grid with:

- Image thumbnails
- Group badges
- Edit and delete buttons
- Filter by group dropdown

**Filtering by Group:**

1. Use the group dropdown at the top
2. Select a specific group
3. Only images in that group display
4. Select "All Groups" to show everything

### Editing an Image

1. Click "Edit" button on any image
2. A modal appears with the image details:
   - Image preview
   - Current group selection
   - Title field
   - Alt text field
   - Description field
3. Modify any fields as needed
4. Change group or create new group
5. Click "Save Changes"

**Changing Groups:**

- Select a different group from the dropdown
- Or check "Create New Group" and enter a name
- Image will move to the new group on save

### Deleting an Image

1. Click "Delete" button on the image
2. Confirm deletion in the modal dialog
3. The image is permanently removed

:::warning
Deleting an image is permanent and cannot be undone. This will:

- Remove the image file from storage
- Delete all associated metadata
- Remove the image from the gallery
  :::

## Gallery Groups

### Creating Groups

Groups can be created in two ways:

**During Upload:**

1. Check "Create New Group" when uploading
2. Enter the group name
3. Images are assigned to the new group

**While Editing:**

1. Edit any existing image
2. Check "Create New Group"
3. Enter the new group name
4. Save to create the group

### Managing Groups

**Group List:**

- All groups appear in the filter dropdown
- Groups are created automatically when first used
- Empty groups (no images) may not display

**Renaming Groups:**

- Currently not directly supported
- Move all images to a new group name
- Old group will no longer appear when empty

**Deleting Groups:**

- Remove all images from a group
- The group automatically disappears
- Or reassign images to different groups

## Public Gallery Page

The gallery is publicly accessible at `/gallery`.

**Gallery Features:**

- Responsive grid layout
- Filter by group (if multiple groups exist)
- Lightbox/modal view for full-size images
- Image titles and descriptions
- Optimized image loading

**Gallery Layouts:**

The gallery can display in different formats:

- **Grid**: Uniform grid of thumbnails
- **Masonry**: Pinterest-style varied heights
- **Slideshow**: Full-screen carousel (if enabled)

**Visitor Experience:**

- Click any image to view full size
- View image title and description
- Navigate between images
- Filter by group to browse specific collections

## Permissions

To manage the gallery, users must have:

- `owner` - Full store owner access
- `managePages` - Page management permissions

## Troubleshooting

### Upload Failing

**Solutions:**

- Check file size (Recommend around 5-10MB)
- Verify file format is supported (JPG, PNG, WebP, GIF)
- Try uploading fewer images at once
- Ensure stable internet connection
- Check available storage space
- Try a different browser

### Images Not Displaying

**Solutions:**

- Verify upload completed successfully
- Refresh the gallery page
- Clear browser cache
- Check image file isn't corrupted
- Verify image format is supported
- Try re-uploading the image

### Group Filter Not Working

**Solutions:**

- Ensure images are assigned to groups
- Verify group names are saved correctly
- Refresh the page
- Check browser console for errors
- Clear browser cache

### Edit Modal Not Opening

**Solutions:**

- Refresh the page
- Clear browser cache
- Try a different browser
- Check JavaScript is enabled
- Verify user has proper permissions

### Group Not Appearing in Dropdown

**Solutions:**

- Ensure at least one image is assigned to the group
- Refresh the page to reload groups
- Check that group name was saved correctly
- Verify the group wasn't left empty

### Image Quality Loss

**Solutions:**

- Upload higher resolution images
- Check compression settings
- Use lossless formats (PNG) for graphics
- Reduce compression before upload
- Upload uncompressed originals when possible
