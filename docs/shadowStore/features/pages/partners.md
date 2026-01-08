---
sidebar_position: 2
pagination_next: null
pagination_prev: null
---

# Partners

The Partners feature allows you to showcase and manage your business partners, sponsors, or collaborators. Each partner gets a dedicated profile page with their own URL, custom content, and optional editing permissions for designated users.

## Accessing Partner Management

Navigate to **Admin Panel > Pages > Partners** to access the partner management interface.

## Creating a Partner

1. Navigate to **Admin Panel > Pages > Partners**
2. In the "Add New Partner" section on the right, fill in the required fields:
   - **Partner Name**: The full name or company name
   - **URL Slug**: Unique identifier for the partner's page URL
   - **External Website**: The partner's official website URL
   - **Display Position**: Numeric order for listing (lower numbers appear first)
   - **About Partner**: Markdown-formatted description
   - **Editor User IDs**: Optional comma-separated user IDs who can edit this partner
   - **Profile Image**: Partner logo or profile picture
3. Click "Add Partner"

The partner will be created and accessible at `/partners/[slug]`

## Partner Fields

### Partner Name

The display name shown on the partner list and profile page.

**Example:**

```
Shadow Development
```

### URL Slug

Creates the partner's unique page URL. Must contain only URL-safe characters.

**Format:**

- Letters (a-z, A-Z)
- Numbers (0-9)
- Hyphens, periods, underscores, tildes
- No spaces or special characters

**Examples:**

- `shadowdevs` → `/partners/shadowdevs`
- `tech-company` → `/partners/tech-company`
- `partner-2024` → `/partners/partner-2024`

### External Website

Full URL to the partner's official website. Displayed as a clickable link on their profile.

**Example:**

```
https://shadowdevs.com
```

### Display Position

Numeric value determining the partner's order in the partners list. Partners are sorted from lowest to highest number.

**Examples:**

- Position 1: Appears first
- Position 2: Appears second
- Position 10: Appears after all lower numbers

**Best Practice:** Use intervals of 5 or 10 (5, 10, 15, 20) to allow easy reordering without changing all positions.

### About Partner

Markdown-formatted content describing the partner, their services, collaboration details, or any relevant information.

**Markdown Support:**

The About section supports full markdown formatting:

```markdown
# Main Heading

## Subheading

**Bold text** and _italic text_

- Bullet point 1
- Bullet point 2

1. Numbered item
2. Another item

[Link text](https://example.com)

![Image description](https://example.com/image.jpg)
```

**Example Content:**

```markdown
## About Shadow Development

Shadow Development is a leading software development company specializing in:

- Custom web applications
- E-commerce solutions
- API integrations

**Partnership Since:** 2023

Visit our website: [shadowdevs.com](https://shadowdevs.com)
```

_You can find a full list of our supported markdown via the [Markdown page](/shadowStore/markdown)._

### Editor User IDs

Optional field allowing you to grant specific users permission to edit this partner's profile without giving them full admin access.

**Format:** Comma-separated user IDs

**Examples:**

- Single editor: `123456789`
- Multiple editors: `123456789,987654321,456789123`

**How to Find User IDs:**

1. Navigate to **Admin Panel > Customers**
2. Find the user and note their ID from the user list
3. Add the ID to the Editor User IDs field

**Permission Scope:**

- Editors can modify the partner's About section and basic details
- Editors cannot delete the partner or change URL slugs
- Editors cannot manage other partners

### Profile Image

Upload an image to represent the partner (logo, profile picture, or brand image).

**Recommended Specifications:**

- **Format:** JPG, PNG, WebP, or GIF
- **Size:** Square (1:1 ratio) recommended
- **Dimensions:** Minimum 200x200px, optimal 400x400px or 600x600px
- **File Size:** Under 2MB for optimal performance

**Display Locations:**

- Partner list (as thumbnail)
- Partner profile page (as header image)
- Related partner references throughout the site

## Managing Partners

### Viewing All Partners

The partner list table shows:

- **Position**: Display order number
- **Name**: Partner name with link to profile
- **External Link**: Partner's website (truncated)
- **Actions**: Edit and Delete buttons

Partners are automatically sorted by position (lowest to highest).

### Editing a Partner

1. Navigate to **Admin Panel > Pages > Partners**
2. In the partners list, click "Edit" on the desired partner
3. You'll be redirected to the partner's public page with an edit interface
4. Modify the About section or any editable fields
5. Click "Save Changes"

**Alternative Method:**

- Click the partner's name in the list to visit `/partners/[slug]`
- Add `#edit` to the URL: `/partners/[slug]#edit`
- Edit interface will appear

### Deleting a Partner

1. Navigate to **Admin Panel > Pages > Partners**
2. Click "Delete" on the partner you want to remove
3. Confirm deletion in the modal dialog
4. The partner page and all associated data will be permanently removed

:::warning
Deleting a partner is permanent and cannot be undone. This will remove:

- The partner's profile page
- The partner's profile image
- All associated data
  :::

### Reordering Partners

To change partner display order:

1. Navigate to **Admin Panel > Pages > Partners**
2. Click "Edit" on the partner you want to reorder
3. Change the Display Position number
4. Save changes
5. Partners will automatically reorder based on new positions

**Quick Reordering Strategy:**

- Initially space partners at intervals (10, 20, 30, 40)
- When inserting between partners, use intermediate values (e.g., 15 between 10 and 20)
- Periodically renumber to maintain clean intervals

## Public Partner Pages

### Partner Directory

All partners are listed at `/partners` in a grid layout, sorted by display position.

**Directory Features:**

- Partner profile images
- Partner names
- Links to individual partner pages
- Responsive grid layout

### Individual Partner Page

Each partner has a dedicated page at `/partners/[slug]` featuring:

- Partner profile image
- Partner name
- External website link
- Full About content (rendered from markdown)
- Edit button (for authorized users)

## Partner Page Editing

Users with editing permissions can modify partner content directly from the public page:

1. Visit `/partners/[slug]#edit` or click "Edit" button (if authorized)
2. Edit interface appears with markdown editor
3. Modify content in the About field
4. Preview changes (if available)
5. Click "Save Changes"

**Who Can Edit:**

- Store owners
- Users with `managePages` permission
- Users listed in the partner's Editor User IDs field

## Permissions

### Admin Permissions

To manage partners, users must have:

- `owner` - Full store owner access
- `managePages` - Page management permissions

### Editor Permissions

Users added to Editor User IDs can:

- Edit the partner's About content
- View the edit interface on the partner's page
- Cannot delete partners or create new ones

### Public Access

All visitors can:

- View the partner directory at `/partners`
- View individual partner pages
- Click external website links

## Troubleshooting

### Partner Page Not Found

**Solutions:**

- Verify the URL slug is correct and saved
- Check that the partner wasn't accidentally deleted
- Ensure the slug doesn't conflict with other routes
- Try refreshing the browser cache

### External Link Not Working

**Solutions:**

- Verify the URL includes `https://` or `http://`
- Test the link in a new browser tab
- Confirm the partner's website is online
- Update the URL if the partner changed domains

### Image Not Displaying

**Solutions:**

- Verify the image uploaded successfully
- Check image file format is supported
- Ensure image file size is under limits
- Re-upload the image if corrupted

### Editor Can't Edit Partner

**Solutions:**

- Verify the user ID is correctly entered in Editor User IDs field
- Ensure IDs are comma-separated with no spaces
- Check the user is logged in with the correct account
- Confirm the user is accessing the correct partner page
