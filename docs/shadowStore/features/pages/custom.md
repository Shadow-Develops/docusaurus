---
sidebar_position: 7
pagination_next: null
pagination_prev: null
---

# Custom Pages

The Custom Pages feature allows you to create standalone pages with custom content and URLs. Perfect for creating About pages, Terms of Service, Privacy Policy, or any other unique content that doesn't fit into other categories.

## Accessing Custom Pages Management

Navigate to **Admin Panel > Pages > Custom Pages** to access the custom pages management interface.

## Creating a Custom Page

1. Navigate to **Admin Panel > Pages > Custom**
2. In the "Create New Page" section, fill in:
   - **Page Title**: The heading shown on the page
   - **URL Slug**: Unique identifier for the page URL
   - **Requires Login**: Toggle if page should require authentication
3. Click "Create Page"

The page will be immediately accessible at `/{slug}`

## Custom Page Fields

### Page Title

The main heading displayed at the top of the custom page.

**Examples:**

```
About Us
Terms of Service
Privacy Policy
Frequently Asked Questions
Contact Information
Shipping & Returns
```

### URL Slug

Creates the page's unique URL path.

**Format:**

- Letters (a-z, A-Z)
- Numbers (0-9)
- Hyphens for word separation
- No spaces or special characters

**Examples:**

- `about` → `/about`
- `terms-of-service` → `/terms-of-service`
- `privacy-policy` → `/privacy-policy`
- `contact-us` → `/contact-us`

**Slug Guidelines:**

- Use lowercase letters
- Keep slugs short but descriptive
- Use hyphens to separate words
- Never change slugs after sharing links
- Avoid conflicts with existing routes

### Requires Login

Toggle to require users to be logged in to view the page.

**When to Use:**

- Member-only content
- Customer resources
- Account-specific information
- Exclusive content

**Public Pages (Login Not Required):**

- About Us
- Terms of Service
- Privacy Policy
- Contact Information
- FAQ

**Protected Pages (Login Required):**

- Member Resources
- Customer Portal
- Account Settings
- Exclusive Content

## Managing Custom Pages

### Viewing All Pages

The pages table displays:

- **Title**: Page heading
- **URL**: Full path to the page
- **Auth Required**: Badge showing if login is required
- **Actions**: Customize and Edit buttons

### Customizing a Page (Section Builder)

Click **Customize** on any page to open the full section builder: a drag-and-drop interface for building rich page layouts with multiple content sections.

#### Section Builder Interface

- **Left panel**: All current sections, each collapsible and reorderable via drag-and-drop
- **Right sidebar**: "Add Sections" panel: click any section type to add it to the bottom of the page

Each section has:

- **Drag handle**: Reorder sections by dragging
- **Enable/Disable toggle**: Show or hide a section without deleting it
- **Expand/Collapse arrow**: Open the section's settings
- **Duplicate button**: Clone a section with all its settings
- **Delete button**: Remove the section (confirmation required)

#### Section ID (Anchor Links)

Every section has an optional **Section ID** field. Setting this lets you link directly to that section from CTA buttons or other links using `#your-id` in the URL (e.g. `/about#team`). Must be lowercase letters, numbers, hyphens, or underscores only.

## Section Types

### Hero Section

A full-width banner section at the top of a page.

**Layout Types:**

- **Centered**: Simple centered content with title, description, and CTA buttons
- **Full Screen Image**: Background image fills the screen; content position can be left, right, or centered; optional content background overlay
- **Full Screen Video**: Same as Full Screen Image but with a video background (YouTube or direct MP4 URL)
- **Figure**: Centered layout with an image displayed to the left or right
- **Image Carousel**: Rotating slides, each with its own image, title, description, and CTA buttons

**Common Fields:**

| Field            | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| Title            | Main heading (leave blank to use site/category name)                   |
| Description      | Subheading text (leave blank to use site description on the home page) |
| CTA Button 1 & 2 | Optional call-to-action buttons with text and URL                      |
| Show Search Bar  | Toggle the search bar visibility                                       |
| Show Categories  | Toggle the category links visibility                                   |

**Carousel-Specific Fields:**

| Field                          | Description                                                            |
| ------------------------------ | ---------------------------------------------------------------------- |
| Content Position               | Left, Right, or Center                                                 |
| Content Background             | Overlay behind the text content                                        |
| Auto Play                      | Automatically advance slides                                           |
| Auto Play Interval             | Time between slides in milliseconds (default: 5000)                    |
| Default Title/Description/CTAs | Fallback content used when a slide has no override                     |
| Slides                         | Each slide has: Order, Image URL, Title, Description, CTA Button 1 & 2 |

---

### Statistics

Displays live store statistics as a row of counters.

| Field     | Description           |
| --------- | --------------------- |
| Products  | Toggle + custom label |
| Sales     | Toggle + custom label |
| Customers | Toggle + custom label |
| Users     | Toggle + custom label |

---

### Featured Product

Highlights a single product in a prominent display.

| Field            | Description                                             |
| ---------------- | ------------------------------------------------------- |
| Featured Product | Select from your product catalog                        |
| Section Title    | Heading above the product (default: "Featured Product") |
| Button Text      | CTA button label (default: "View Product")              |

---

### Info Cards

A header with a grid of icon cards below it.

| Field          | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| Section Header | Heading above the cards                                      |
| Cards          | Each card has: Icon (emoji, URL, or SVG), Title, Description |

---

### CTA Banner

A call-to-action strip with a title, description, and button.

| Field           | Description                                          |
| --------------- | ---------------------------------------------------- |
| Title           | Banner heading                                       |
| Description     | Short supporting text                                |
| Button Link     | URL the button points to                             |
| Button Text     | Label on the button                                  |
| Background      | Use site background, custom color, or custom image   |
| Background Blur | None, Extra Small, Small, Medium, Large, Extra Large |

---

### Testimonials

A grid of customer reviews.

| Field        | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| Title        | Section heading                                                 |
| Columns      | 2, 3, or 4 columns                                              |
| Testimonials | Each item has: Name, Role, Text, Rating (1–5 stars), Avatar URL |

---

### FAQ

An accordion-style list of questions and answers.

| Field | Description                     |
| ----- | ------------------------------- |
| Title | Section heading                 |
| FAQs  | Each item has: Question, Answer |

---

### Features Grid

A grid showcasing features or highlights.

| Field    | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| Title    | Section heading                                                                     |
| Subtitle | Optional subheading                                                                 |
| Columns  | 2, 3, or 4 columns                                                                  |
| Features | Each item has: Title, Description, Icon (emoji/URL/SVG), Link (optional), Link Text |

---

### Newsletter

An email signup form.

| Field           | Description                                |
| --------------- | ------------------------------------------ |
| Title           | Section heading                            |
| Description     | Supporting text                            |
| Placeholder     | Input placeholder text                     |
| Button Text     | Submit button label                        |
| Form Action URL | Endpoint that receives the form submission |
| Disclaimer      | Optional small-print text below the form   |
| Success Message | Shown after a successful submission        |

---

### Social Proof

A logo wall displaying brand or partner logos.

| Field     | Description                                         |
| --------- | --------------------------------------------------- |
| Title     | Section heading                                     |
| Columns   | 3, 4, 5, or 6 columns                               |
| Show Text | Show company name even when a logo image is present |
| Scroll    | Auto-scroll logos when there are more than 4        |
| Logos     | Each item has: Name, Image URL, Link (optional)     |

---

### Gallery

An image gallery with lightbox support.

**Image Source:**

- **Manual**: Enter images directly in the builder
- **From Gallery Page**: Pull images from the shared store gallery, optionally filtered by group

| Field             | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| Layout Type       | Standard Grid or Multi-Image Layout                                                    |
| Title             | Section heading                                                                        |
| Subtitle          | Optional subheading                                                                    |
| Columns           | 2, 3, or 4 (grid layout only)                                                          |
| Image Height      | Height in pixels (grid layout only, default: 256)                                      |
| Enable Lightbox   | Click to expand images fullscreen                                                      |
| Show Descriptions | Show description text on hover                                                         |
| Images as Buttons | If a link is set, clicking opens the link instead of the lightbox (manual source only) |

**Manual image fields:** URL, Order, Alt text, Title, Description, Link (when Images as Buttons is on)

---

### Text Content

A flexible text section with optional media alongside the content.

| Field          | Description                                   |
| -------------- | --------------------------------------------- |
| Heading        | Section title                                 |
| Content        | Markdown body text                            |
| Text Alignment | Left, Center, or Right                        |
| Max Width      | Narrow, Normal, Wide, or Full                 |
| Image / Video  | None, Single Image, Image Carousel, or Video  |
| Media Position | Right or Left of the text (when media is set) |

**Media options:**

- **Single Image**: One image URL
- **Image Carousel**: List of image URLs that cycle
- **Video**: YouTube URL or direct file URL (select source type)

---

### Video Showcase

A side-by-side video player and descriptive text.

| Field           | Description                                  |
| --------------- | -------------------------------------------- |
| Label           | Small text displayed above the title         |
| Title           | Section heading                              |
| Description     | Markdown body text                           |
| Video URL       | YouTube link or direct MP4 URL               |
| Video Position  | Left (text on right) or Right (text on left) |
| Show CTA Button | Toggle a call-to-action button               |
| Button Text     | Button label (when shown)                    |
| Button URL      | Button link (when shown)                     |

---

### Form Section

Embeds a form created in the Forms feature.

**Section Types:**

- **Standalone**: Centered form, no surrounding content
- **Content**: Form on one side, rich content on the other

| Field                        | Description                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| Form                         | Select from your existing forms                                   |
| Section Type                 | Standalone or Content                                             |
| Heading                      | Optional heading above the form (leave blank to hide)             |
| Form Alignment               | Right or Left side (Content type only)                            |
| Content Horizontal Alignment | Left, Center, Right (Content type only)                           |
| Content Vertical Alignment   | Top, Center, Bottom (Content type only)                           |
| Content                      | Markdown text beside the form (Content type only)                 |
| Buttons                      | Icon or text buttons placed under the content (Content type only) |

---

### Embedded Page

Embeds an external page or URL inside an iframe.

| Field    | Description                                  |
| -------- | -------------------------------------------- |
| Page URL | The URL to embed                             |
| Width    | Frame width (leave blank for 100%)           |
| Height   | Frame height (leave blank for 850px default) |

---

### Pure HTML/CSS

Renders raw HTML and scoped CSS directly on the page.

| Field | Description                                                               |
| ----- | ------------------------------------------------------------------------- |
| HTML  | Raw HTML markup to render                                                 |
| CSS   | CSS rules applied to the page (use specific selectors to avoid conflicts) |

:::warning
CSS written here applies globally to the page. Use specific IDs or class names to avoid unintended styling conflicts.
:::

---

## Editing a Page (Simple Mode)

You can also edit the page title and login requirement directly:

1. Visit the page at `/{slug}`
2. Add `#edit` to the URL: `/{slug}#edit`
3. The edit interface appears (if authorized)
4. Modify title or settings
5. Click "Save Changes"

**Edit Permissions:**

- Store owners
- Users with `managePages` permission

### Deleting a Page

1. Navigate to **Admin Panel > Pages > Custom**
2. Click "Delete" on the page you want to remove
3. Confirm deletion in the modal dialog
4. The page and its content will be permanently removed

:::warning
Deleting a custom page is permanent and cannot be undone. This will:

- Remove the page content and all sections
- Delete the URL route
- Remove all associated data
  :::

## Permissions

| Permission    | Access                         |
| ------------- | ------------------------------ |
| `owner`       | Full access                    |
| `managePages` | Create, edit, and delete pages |

## Troubleshooting

### Page Not Accessible

**Solutions:**

- Verify the page was created successfully
- Check the URL slug is correct
- Ensure no typos in the URL
- Check if login is required
- Verify user is logged in if required

### Section Not Showing

**Solutions:**

- Check that the section's enable toggle is turned on
- Verify the section has required fields filled in (e.g. a Featured Product must have a product selected)
- Save the page after making changes

### Edit Button Not Showing

**Solutions:**

- Verify user has `managePages` permission
- Check user is logged in as admin/owner
- Add `#edit` manually to URL
- Clear browser cache
- Try different browser

### URL Conflict

**Solutions:**

- Choose a different slug
- Check for existing routes
- Avoid system reserved paths
- Use more specific slug names
- Check for duplicate slugs

### Content Not Saving

**Solutions:**

- Check internet connection
- Verify no special characters causing issues
- Clear browser cache
- Check browser console for errors
- Try different browser
