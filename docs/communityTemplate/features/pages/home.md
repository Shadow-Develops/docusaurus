---
sidebar_position: 1
---

# Home Page Builder

The home page is built from a stack of configurable **sections**. You can add, remove, reorder, enable, and disable sections without touching any code. All configuration is done from **Admin Panel > Home**.

## Managing Sections

- **Add** - Click "Add Section" and choose a section type from the list
- **Reorder** - Drag sections up or down to change their order on the page
- **Enable / Disable** - Toggle a section off to hide it without deleting it
- **Edit** - Click the edit icon on any section to open its configuration
- **Delete** - Remove a section permanently

Changes are saved per section and take effect immediately on the live site.

---

## Section Types

### Hero

The main banner section, typically placed at the top of the page. Has five layout modes:

| Layout         | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| **Centered**   | Text centered over a plain/gradient background              |
| **Full Image** | Background image with text overlay                          |
| **Full Video** | Background video (YouTube or direct file) with text overlay |
| **Figure**     | Image on one side, text on the other                        |
| **Carousel**   | Multiple slides, each with its own image, title, and button |

**Common options (all layouts):**

- Title and subtitle text
- Up to two call-to-action buttons with custom labels and URLs
- Background overlay opacity (for image/video layouts)
- Optional search bar
- Optional category filter display

**Carousel-specific options:**

- Add as many slides as needed, each with its own title, subtitle, background image, and CTA
- Auto-play toggle with configurable interval (seconds)

---

### Features

A grid of feature cards - great for highlighting what your community offers.

- **Title** and optional **subtitle**
- Add any number of cards, each with:
  - **Icon** - emoji, an image URL, or inline SVG
  - **Title**
  - **Description** - supports Markdown
  - **Link** - optional clickable URL
- **Column count** - 2, 3, or 4 columns

---

### Stats

Display numeric statistics in a row.

- Add any number of stat items, each with:
  - **Value** - the number or text to display prominently (e.g., `5,000+`)
  - **Label** - description below the value (e.g., "Community Members")

---

### FAQ

An accordion-style list of questions and answers.

- Add any number of Q&A pairs
- **Answers support Markdown** - format with lists, bold, links, code, etc.
- The first item is expanded by default

---

### Testimonials

A grid of user quotes or reviews.

- Each testimonial includes:
  - **Name** and **Role** (e.g., "Community Member")
  - **Avatar** - image URL
  - **Quote** - the testimonial text
  - **Star rating** - 1 to 5 stars

---

### Gallery

Displays images from your gallery in a grid.

- **Layout** - grid or masonry
- **Filter** - show all gallery images, or limit to specific IDs, tags, or a category
- **Image height** - configure the card height
- **Lightbox** - clicking an image opens it in a modal; keyboard navigation (arrow keys, ESC) is supported
- **Hover descriptions** - optionally show the image description on hover
- **Image links** - optionally make images clickable links

---

### Newsletter

An email subscription form embedded directly on the home page.

- **Description** - introductory text (supports Markdown)
- **Email placeholder** text
- **Button label**
- **Category selector** - optionally let users choose which newsletter categories to subscribe to, with configurable defaults
- **Disclaimer** - small text below the form (e.g., privacy notice)

---

### Banner

A slim alert-style message bar - useful for announcements.

- **Message** - supports Markdown
- **Type** - `info`, `success`, `warning`, or `error` (controls the color)
- **Link** - optional label and URL for a call-to-action

---

### Info

A simple text section with a title and Markdown body. Good for brief descriptions or callouts.

---

### Text Content

A full-width rich content block.

- **Title**
- **Content** - full Markdown support (headings, lists, code blocks, images, alerts, etc.)
- **Width** - control the max-width of the content area

---

### Video

Embed a video alongside text and an optional call-to-action.

- **Video source** - YouTube URL, Vimeo URL, or a direct `.mp4`/`.webm` link
- **Title**, **label**, and **description** (Markdown)
- **Position** - video on the left or right side of the text
- **CTA button** - optional label and URL

---

### Social Proof

A logo/brand showcase - useful for partner organizations, affiliates, or tools you use.

- Add entries with a **name**, **image URL**, and optional **link**
- **Auto-scroll** toggle - animates logos across the screen automatically
- **Column count** configuration

---

### Discord

Embeds a live Discord server widget showing online member count and a join button.

- Requires your **Server ID** to be set in **Admin Panel > Discord**
- Shows the server icon, name, online member count, and a join link

---

### Featured

Highlights a specific piece of content - a blog post, download, application form, or gallery image.

- **Source** - manually enter content details, or link to an existing blog post, download, application, or gallery item
- **Image**, **title**, **description**, and **CTA button**

---

## Tips

- Sections can be freely mixed and stacked in any order
- Disabled sections remain saved and can be re-enabled at any time
- If no sections are configured, the home page shows a default placeholder with a link to the admin panel (visible only to admins)
- All text fields that support Markdown render the same way blog posts and custom pages do - see the [Markdown guide](../../markdown) for syntax
