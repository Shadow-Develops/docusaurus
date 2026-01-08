---
sidebar_position: 1
pagination_next: null
pagination_prev: null
---

# Home

The Home page is the first page visitors see when arriving at your Shadow Store. It features a powerful drag-and-drop section builder that allows you to create a fully customized homepage with various content types.

## Accessing Homepage Editor

Navigate to **Admin Panel > Pages > Home** to access the homepage customization interface.

## Section Types

Shadow Store provides 13 built-in section types:

### 1. Hero Section

The main banner at the top of your homepage.

**Hero Types:**

- **Centered**: Simple centered text with optional CTAs
- **Full Screen Image**: Background image covering entire screen
- **Full Screen Video**: Background video (YouTube or MP4)
- **Figure**: Text with side image (left or right)
- **Image Carousel**: Multiple rotating images with per-slide content

**Configuration Options:**

- Title (defaults to site name if empty)
- Description (defaults to site description if empty)
- Up to 2 CTA buttons (title + URL)
- Search bar toggle
- Category display toggle
- Background image/video URL
- Content positioning (centered, left, right)
- Content background overlay toggle
- Auto-play settings for carousel
- Per-slide customization for carousel mode

**Carousel Specific:**

- Multiple slides with custom images
- Per-slide title and description
- Per-slide CTA buttons
- Default fallback content
- Slide ordering
- Auto-play interval (milliseconds)

### 2. Statistics

Display store metrics and achievements.

**Metrics Available:**

- Products count
- Total sales
- Customer count
- User registrations

**Configuration:**

- Toggle each metric on/off
- Custom labels for each stat
- Automatic data pulling from database

### 3. Featured Product

Highlight a specific product.

**Configuration:**

- Product selector (dropdown)
- Section title
- Button text customization
- Automatic product image and details display

### 4. Info Cards

Grid of information cards for features or services.

**Configuration:**

- Section header
- Multiple info items
- Per-item title and description
- Responsive grid layout

### 5. CTA Banner

Call-to-action banner for promotions or announcements.

**Configuration:**

- Title and description
- Button link and text
- Background options:
  - Default (site background)
  - Custom color picker
  - Custom background image
- Background blur amount (none to extra large)

### 6. Testimonials

Customer reviews and feedback.

**Configuration:**

- Section title
- Grid columns (2, 3, or 4)
- Multiple testimonials with:
  - Customer name
  - Optional role/title
  - Optional avatar image
  - Testimonial text
  - Star rating (1-5)

### 7. FAQ

Frequently Asked Questions in collapsible format.

**Configuration:**

- Section title
- Multiple FAQ items
- Question and answer pairs
- Collapsible accordion display

### 8. Features Grid

Showcase product or service features.

**Configuration:**

- Title and optional subtitle
- Grid columns (2, 3, or 4)
- Multiple feature items with:
  - Title and description
  - Optional icon
  - Optional link and link text

### 9. Newsletter

Email subscription form.

**Configuration:**

- Title and description
- Input placeholder text
- Button text
- Form action URL (defaults to `/api/newsletter`)
- Optional disclaimer text

### 10. Social Proof

Display partner logos or trust badges.

**Configuration:**

- Section title
- Grid columns (3, 4, 5, or 6)
- Show/hide company names
- Multiple logos with:
  - Company name
  - Logo image URL
  - Optional link

### 11. Gallery

Image gallery with lightbox.

**Configuration:**

- Title and subtitle
- Layout types:
  - Standard Grid
  - Multi-Image (auto-arranged)
- Grid columns (2, 3, or 4) for standard
- Image height customization
- Lightbox enable/disable
- Show descriptions on hover
- Images as clickable buttons option
- Multiple images with:
  - Image URL
  - Alt text and title
  - Description
  - Optional link (if buttons enabled)
  - Custom ordering

### 12. Text Content

Rich text content block.

**Configuration:**

- Optional title
- Markdown content
- Max width selection (small to full width)
- Automatic markdown rendering

### 13. Video Showcase

Featured video with description.

**Configuration:**

- Label text (above title)
- Main title
- Description (supports markdown)
- Video URL (YouTube or MP4)
- Video position (left or right)
- Optional CTA button with text and URL

## Managing Sections

### Adding a Section

1. Navigate to **Admin Panel > Pages > Home**
2. In the right sidebar, click the section type you want to add
3. Section appears at the bottom of the page
4. Click the expand arrow to configure
5. Fill in section details
6. Click "Save Homepage"

### Reordering Sections

1. Hover over a section
2. Click and hold the move icon (six dots)
3. Drag section to desired position
4. Release to drop
5. Click "Save Homepage" to persist changes

### Editing Sections

1. Click the expand arrow on any section
2. Modify section configuration fields
3. Add/remove items within the section
4. Click "Save Homepage" when done

### Duplicating Sections

1. Find the section you want to duplicate
2. Click the duplicate icon (copy symbol)
3. A copy appears immediately below original
4. Modify the copy as needed
5. Click "Save Homepage"

### Enabling/Disabling Sections

1. Find the section's enable/disable toggle
2. Click to toggle between "Enabled" and "Disabled"
3. Disabled sections don't display on the homepage
4. They remain in your configuration for later re-enabling
5. Click "Save Homepage"

### Deleting Sections

1. Click the delete icon (trash can) on a section
2. Confirm deletion in the modal
3. Section is permanently removed
4. Click "Save Homepage"

:::warning
Deleted sections cannot be recovered. Consider disabling instead if you might want them later.
:::

## Adding Items to Sections

Many sections support multiple items (testimonials, FAQs, features, etc.):

1. Expand the section
2. Find the "+ Add Item" button
3. Click to add a new empty item
4. Fill in item details
5. Repeat for additional items
6. Click "X" to remove unwanted items

## Homepage Best Practices

### Structure

- Start with a Hero section to grab attention
- Follow with Statistics to build credibility
- Include Featured Product if you have a flagship item
- Use Info Cards or Features to explain benefits
- Add Testimonials for social proof
- End with Newsletter signup for lead capture

### Content

- Keep hero titles concise and impactful
- Use high-quality images in hero and featured sections
- Write clear, benefit-focused copy
- Ensure CTAs are action-oriented
- Test all links before publishing
- Optimize images for web performance

### Design

- Maintain visual hierarchy
- Use consistent spacing between sections
- Don't overcrowd the page
- Ensure mobile responsiveness
- Test on different screen sizes
- Balance text-heavy and visual sections

### Performance

- Limit number of sections (8-12 recommended)
- Optimize image sizes before upload
- Use video sparingly (can slow load times)
- Test page load speed after changes
- Consider lazy loading for images

## Common Homepage Layouts

### E-commerce Focus

1. Hero (Featured Product Image)
2. Featured Product
3. Statistics
4. Features Grid
5. Testimonials
6. Newsletter

### Service/SaaS Focus

1. Hero (Centered with CTA)
2. Features Grid
3. Video Showcase
4. Testimonials
5. FAQ
6. CTA Banner
7. Newsletter

### Community/Content Focus

1. Hero (Image Carousel)
2. Info Cards
3. Gallery
4. Social Proof
5. Blog Preview (custom section)
6. Newsletter

## Advanced Configuration

### Hero Carousel Settings

For carousel hero sections:

**Slide Management:**

- Add multiple slides with unique content
- Set custom order for each slide
- Configure per-slide CTAs
- Set default fallback content

**Auto-play:**

- Enable/disable automatic rotation
- Set interval in milliseconds (5000 = 5 seconds)
- Slides transition smoothly

### Gallery Layouts

**Standard Grid:**

- Fixed columns
- Uniform image heights
- Best for consistent image sizes

**Multi-Image:**

- Auto-arranged based on image count
- Variable layouts for visual interest
- Best for mixed image sizes

### Content Positioning

For Full Screen Image/Video heroes:

- **Centered**: Content in center of screen
- **Left**: Content aligned left
- **Right**: Content aligned right
- **Background Toggle**: Add overlay for text readability

## Markdown Support

Sections supporting markdown (Text Content, Video Showcase descriptions):

```markdown
# Heading 1

## Heading 2

### Heading 3

**Bold text**
_Italic text_

- Bullet list
- Item 2

1. Numbered list
2. Item 2

[Link text](https://example.com)

![Image alt](https://example.com/image.jpg)
```

_You can find a full list of our supported markdown via the [Markdown page](/shadowStore/markdown)._

## Permissions

**Required Permissions:**

- `owner` - Full access
- `managePages` - Homepage editing access

## Troubleshooting

### Changes Not Appearing

**Solutions:**

- Click "Save Homepage" button
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache
- Check if section is enabled

### Sections Not Reordering

**Solutions:**

- Ensure you're dragging by the move icon
- Save after reordering
- Refresh page if drag-drop stops working
- Check browser console for errors

### Images Not Loading

**Solutions:**

- Verify image URLs are correct and accessible
- Check image format is supported (JPG, PNG, GIF, WebP)
- Ensure images are hosted on accessible server
- Test image URL in new browser tab

### Video Not Playing

**Solutions:**

- Verify YouTube URL format
- For MP4, ensure direct file URL
- Check video isn't region-restricted
- Test video URL in new browser tab
