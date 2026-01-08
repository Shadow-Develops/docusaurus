---
sidebar_position: 5
pagination_next: null
pagination_prev: null
---

# Blog

The Blog feature provides a complete content management system for publishing articles, news, and updates. It includes category organization, featured posts, and full markdown support for rich content creation.

## Accessing Blog Management

Navigate to **Admin Panel > Pages > Blog** to access the blog management interface.

## Creating a Blog Post

1. Navigate to **Admin Panel > Pages > Blog**
2. Click "Create Post" card at the top
3. Fill in the post creation form:
   - **Post Title**: The headline of your article
   - **URL Slug**: Unique identifier for the post URL
   - **Category**: Select a category (optional)
   - **Content**: Full post content in markdown
4. Click "Create Post"

The post will be published immediately at `/blog/p/[slug]`

## Blog Post Fields

### Post Title

The headline displayed at the top of the post and in listings.

**Examples:**

```
Getting Started with Shadow Store
10 Tips for Better E-commerce
Product Update: Version 2.0
```

### URL Slug

Creates the post's unique URL path. Must contain only URL-safe characters.

**Format:**

- Letters (a-z, A-Z)
- Numbers (0-9)
- Hyphens for word separation
- No spaces or special characters

**Examples:**

- `getting-started` → `/blog/p/getting-started`
- `product-update-2024` → `/blog/p/product-update-2024`
- `tips-for-success` → `/blog/p/tips-for-success`

**Slug Guidelines:**

- Use lowercase letters
- Separate words with hyphens
- Keep slugs short but descriptive
- Never change slugs after sharing URLs

### Category

Assign the post to a category for organization and filtering.

**Category Uses:**

- Group related posts together
- Enable category-based browsing
- Help readers find specific content types
- Organize content by topic

**Example Categories:**

- News & Updates
- Tutorials
- Product Announcements
- Community
- Tips & Tricks

Categories are browseable at `/blog/c/[category-slug]`

### Content

The main body of your blog post, written in markdown format.

**Markdown Support:**

Full markdown syntax is supported:

```markdown
# Main Heading

## Subheading

### Sub-subheading

**Bold text** and _italic text_

- Bullet list item
- Another item
  - Nested item

1. Numbered list
2. Second item
3. Third item

[Link text](https://example.com)

![Image alt text](https://example.com/image.jpg)

> Blockquote text
> Multiple lines

`Inline code`

&grave;&grave;&grave;javascript
// Code block
console.log('Hello');
&grave;&grave;&grave;

---

Horizontal rule above
```

_You can find a full list of our supported markdown via the [Markdown page](/shadowStore/markdown)._

## Managing Blog Posts

### Viewing All Posts

The blog posts table displays:

- **Title**: Post headline
- **Author**: Post creator's name
- **Date**: Publication date
- **Featured Badge**: Shows if post is featured
- **Actions**: Edit and Delete buttons

Posts are listed chronologically with newest first.

### Editing a Post

1. Navigate to **Admin Panel > Pages > Blog**
2. Click "Edit" on the post you want to modify
3. You'll be redirected to `/blog/p/[slug]#edit`
4. The edit interface appears with current content
5. Modify the title, category, or content
6. Click "Save Changes"

**Alternative Method:**

- Visit any blog post at `/blog/p/[slug]`
- Add `#edit` to the URL if you have permissions
- Edit interface will appear

**Edit Tracking:**

- Posts track update dates automatically
- Updated by information is recorded
- Original publication date is preserved
- Readers can see when posts were last updated

### Deleting a Post

1. Navigate to **Admin Panel > Pages > Blog**
2. Click "Delete" on the post you want to remove
3. Confirm deletion in the modal dialog
4. The post will be permanently removed

:::warning
Deleting a blog post is permanent and cannot be undone. This will remove:

- The post content
- The post URL
- All associated metadata
  :::

## Categories

### Creating a Category

1. Navigate to **Admin Panel > Pages > Blog**
2. Click "Add Category" card
3. Fill in the category form:
   - **Category Name**: Display name
   - **URL Slug**: URL path for the category
4. Click "Create Category"

Categories are immediately available for post assignment.

**Example Category Setup:**

```
Name: Product Updates
Slug: product-updates
URL: /blog/c/product-updates
```

### Managing Categories

The categories table shows:

- **Name**: Category display name
- **URL Path**: Full path to category page
- **Actions**: Delete button

**Deleting Categories:**

1. Click "Delete" on the category
2. Confirm in the modal
3. Posts assigned to deleted categories will become uncategorized

**Note:** Deleting a category does not delete the posts within it.

## Featured Posts

Feature a specific post to highlight it on the blog index page.

### Setting a Featured Post

1. Navigate to **Admin Panel > Pages > Blog**
2. Click "Set Featured" card
3. Select a post from the dropdown
4. Click "Set Featured Post"

**Featured Post Benefits:**

- Appears prominently on blog index
- Highlighted with special styling
- Draws attention to important content
- Can be changed anytime

**Featured Post Strategy:**

- Feature your best or most important content
- Update featured post regularly (monthly)
- Use for announcements or major updates
- Feature seasonal or timely content

### Removing Featured Status

1. Click "Set Featured" card
2. Select "None" from the dropdown
3. Click "Set Featured Post"

## Public Blog Pages

### Blog Index (`/blog`)

The main blog page listing all posts:

- Posts displayed chronologically
- Featured post highlighted at top
- Post titles, excerpts, and metadata
- Pagination for many posts
- Category filtering options

### Individual Post (`/blog/p/[slug]`)

Each post has a dedicated page:

- Full post title
- Author name
- Publication date
- Update date (if edited)
- Category badge
- Complete markdown-rendered content
- Edit button (for authorized users)

### Category Page (`/blog/c/[slug]`)

Category-filtered post listings:

- Shows only posts in that category
- Category name as page title
- Same layout as blog index
- Empty state if no posts

## Post Editing Permissions

**Who Can Edit Posts:**

- Store owners
- Users with `managePages` permission
- Post authors (can edit their own posts)

**Edit Access:**

- Visit `/blog/p/[slug]#edit` or click Edit button
- Edit interface appears for authorized users
- Changes save immediately
- Update tracking is automatic

## Permissions

To manage blog content, users must have:

- `owner` - Full store owner access
- `managePages` - Page management permissions

Post authors can edit their own posts even without admin permissions.

## Troubleshooting

### Post Not Appearing

**Solutions:**

- Verify the post was saved successfully
- Check the URL slug is correct
- Refresh the blog index page
- Clear browser cache
- Check that post wasn't accidentally deleted

### Markdown Not Rendering

**Solutions:**

- Verify markdown syntax is correct
- Check for unclosed code blocks or quotes
- Test markdown in a preview tool first
- Ensure special characters are properly escaped
- Review markdown documentation for syntax

### Category Not Showing

**Solutions:**

- Verify category was created successfully
- Check the category slug is correct
- Ensure at least one post is assigned to it
- Refresh the page
- Check for URL conflicts

### Featured Post Not Highlighting

**Solutions:**

- Verify featured post is set in admin
- Check that the post ID is correct
- Refresh the blog index page
- Clear browser cache
- Verify featured post still exists

### Edit Button Not Showing

**Solutions:**

- Verify user has edit permissions
- Check user is logged in
- Ensure user is post author or admin
- Try adding `#edit` to URL manually
- Check browser console for errors

### Images Not Loading

**Solutions:**

- Verify image URLs are correct
- Check images are publicly accessible
- Ensure image formats are supported
- Test image URLs in new browser tab
- Use absolute URLs for images
