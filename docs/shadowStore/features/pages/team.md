---
sidebar_position: 3
pagination_next: null
pagination_prev: null
---

# Team Members

The Team Members feature allows you to showcase your staff, contributors, or key personnel. Each team member gets a profile with customizable information, social links with icons, and display ordering capabilities.

## Accessing Team Management

Navigate to **Admin Panel > Pages > Team** to access the team member management interface.

## Creating a Team Member

1. Navigate to **Admin Panel > Pages > Team**
2. In the right panel form, fill in the required fields:
   - **Name**: Team member's full name
   - **Title**: Role or position
   - **Position**: Numeric display order
   - **About**: Description or bio (plain text)
   - **Profile Image**: Upload team member photo
   - **Links**: Add social media or contact links with icons
3. Click "Add Team Member"

The team member will be added to the `/team` page in the specified position.

## Team Member Fields

### Name

The team member's full name displayed on their profile.

**Examples:**

```
John Smith
Sarah Johnson
Alex Chen
```

### Title

The team member's role, position, or job title.

**Examples:**

```
Lead Developer
Community Manager
Product Designer
Co-Founder & CEO
Senior Software Engineer
```

### Position

Numeric value determining display order on the team page. Members are sorted from lowest to highest number.

**Examples:**

- Position 1: CEO/Founder (appears first)
- Position 2: Co-Founder
- Position 3-10: Leadership team
- Position 11+: Other team members

**Best Practice:** Use intervals of 5 or 10 to allow easy reordering without changing all positions.

### About

A description or biography of the team member. This field accepts plain text.

**Example:**

```
Alex has over 10 years of experience in software development and specializes
in building scalable web applications. When not coding, Alex enjoys hiking
and photography.
```

**Content Suggestions:**

- Professional background and experience
- Key skills or specializations
- Notable achievements or projects
- Personal interests or hobbies
- Education or certifications

### Profile Image

Upload a photo representing the team member.

**Recommended Specifications:**

- **Format:** JPG, PNG, or WebP
- **Aspect Ratio:** Square (1:1) or portrait
- **Dimensions:** Minimum 300x300px, optimal 500x500px or 800x800px
- **File Size:** Under 2MB for optimal performance
- **Style:** Professional headshots work best for consistency

**Image Tips:**

- Use consistent background style across all team members
- Ensure good lighting and clear facial features
- Crop to focus on the person
- Consider using a uniform photo style for brand consistency

### Links

Add multiple social media links, contact methods, or external profiles with customizable icons.

**Adding Links:**

1. Each link has two components:
   - **Icon**: Select from icon dropdown
   - **URL**: Full URL to the profile or resource
2. Click "Add New Link" to add additional links
3. Click "X" to remove unwanted links

**Available Icons:**

The icon dropdown includes various social media and contact icons:

- Generic link icon
- Social media platforms (Twitter, LinkedIn, GitHub, Facebook, Instagram, etc.)
- Communication tools (Email, Discord, Slack, etc.)
- Professional networks
- Personal websites

**Example Link Configuration:**

```
Icon: GitHub
URL: https://github.com/username

Icon: Twitter
URL: https://twitter.com/username

Icon: Email
URL: mailto:user@example.com

Icon: Website
URL: https://personal-website.com
```

## Managing Team Members

### Viewing Team Members

The team member table shows:

- **Position**: Display order
- **Name**: Team member name
- **Title**: Role or position
- **Actions**: Edit and Delete buttons

Team members are automatically sorted by position (lowest to highest).

### Editing a Team Member

1. Navigate to **Admin Panel > Pages > Team**
2. Click "Edit" on the team member you want to modify
3. A modal dialog appears with the member's current information
4. Update any fields:
   - Name, Title, Position, About
   - Profile Image (optional - only if changing)
   - Links (add, remove, or modify)
5. Click "Edit Team Member" to save changes

**Editing Links:**

- Existing links are pre-populated
- Modify icon or URL as needed
- Use "Add New Link" to add more
- Click "X" to remove links
- Changes save when you submit the form

### Deleting a Team Member

1. Navigate to **Admin Panel > Pages > Team**
2. Click "Delete" on the team member you want to remove
3. Confirm deletion in the modal dialog
4. The team member and their profile image will be permanently removed

:::warning
Deleting a team member is permanent and cannot be undone. This will remove:

- The team member's profile
- The team member's profile image
- All associated data
  :::

### Reordering Team Members

To change display order:

1. Click "Edit" on the team member
2. Change the Position number
3. Save changes
4. Team members will automatically reorder

**Common Ordering Structures:**

**By Hierarchy:**

```
1-10: C-Suite (CEO, CTO, CFO)
11-20: Directors
21-30: Managers
31+: Team Members
```

**By Department:**

```
1-10: Leadership
11-20: Engineering
21-30: Design
31-40: Marketing
41-50: Support
```

**By Seniority:**

```
1-10: Founders
11-20: Senior Staff
21-30: Mid-level
31+: Junior/New Members
```

## Public Team Page

The team directory at `/team` displays all team members in a grid or list layout.

**Page Features:**

- Team member profile images
- Names and titles
- Links to social profiles (icons)
- About sections
- Responsive layout

**Display Format:**

Each team member card typically shows:

- Profile image (top)
- Name (prominent)
- Title (below name)
- Social/contact links (icon buttons)
- About text (description)

## Permissions

To manage team members, users must have:

- `owner` - Full store owner access
- `managePages` - Page management permissions

## Troubleshooting

### Profile Image Not Displaying

**Solutions:**

- Verify the image uploaded successfully
- Check file format (JPG, PNG, WebP supported)
- Ensure file size is under 2MB
- Try re-uploading the image
- Clear browser cache

### Links Not Working

**Solutions:**

- Verify URLs are complete with `https://`
- Test each link in a new browser tab
- Check for typos in URLs
- Ensure external sites are accessible
- Update broken or changed URLs

### Team Member Not Appearing in Correct Order

**Solutions:**

- Check the Position field value
- Verify position number is saved correctly
- Refresh the team page
- Ensure position numbers are unique
- Re-save the team member if needed

### Edit Modal Not Opening

**Solutions:**

- Refresh the browser page
- Clear browser cache
- Check browser console for errors
- Try a different browser
- Verify user has proper permissions

### Multiple Links Not Saving

**Solutions:**

- Ensure all link URLs are complete
- Check that icon is selected for each link
- Don't leave empty link fields
- Save one at a time if having issues
- Verify JavaScript is enabled in browser
