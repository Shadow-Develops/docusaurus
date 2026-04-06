---
sidebar_position: 2
---

# Pages

Blog Builder includes a drag-and-drop section builder used for both the home page (landing page) and custom pages. Each page is assembled from a stack of reusable sections that can be added, configured, and reordered.

## Required Permission

`managePages`

## Landing Page

The home page (`/`) is built entirely with the section builder.

- **Admin location:** Admin Panel > Landing (`/admin/landing`)
- Add, remove, edit section configs, and drag-reorder sections
- Once you hit save, the changes are live after a page reload

## Custom Pages

Custom pages are standalone pages at a URL of your choosing.

- **Admin location:** Admin Panel > Pages (`/admin/pages`)

Each custom page has the following fields:

| Field       | Description                                         |
| ----------- | --------------------------------------------------- |
| Title       | Page display title                                  |
| Slug        | URL path (the page is accessible at `/[slug]`)      |
| Description | Short description used for SEO meta tags            |
| OG Image    | Image used for Open Graph / social media previews   |
| Status      | `draft` (not publicly visible) or `active` (public) |
| Has Blog    | Enables a blog category for this page (see below)   |
| Sections    | Drag-and-drop section builder                       |

### Slug Availability

Before saving a new page, slug availability is checked via `GET /api/slugcheck/page?slug=[slug]`. Slugs must be unique across all custom pages.

### Blog Integration

When a custom page has "Has Blog" enabled, a blog category is created for it. Blog posts can then be scoped to this category, and they will appear at `/[slug]/blog`.

:::info
Disabling "Has Blog" on an existing page does not delete posts that were already assigned to that category.
:::

## Section Types

Both the landing page and custom pages use the same set of section types:

| Section          | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| **Hero**         | Full-width banner with a headline, subtext, and optional CTA button                 |
| **Features**     | Grid of feature cards with icons, titles, and descriptions                          |
| **Gallery**      | Image gallery pulling images from the gallery system                                |
| **Recent Posts** | Automatically displays the latest published blog posts                              |
| **Blog Posts**   | Configurable blog post listing with filter options (only available on custom pages) |
| **Team**         | Grid of team member profiles                                                        |
| **Testimonials** | Testimonial/quote cards                                                             |
| **Stats**        | Numeric stat counters                                                               |
| **FAQ**          | Accordion-style frequently asked questions                                          |
| **CTA**          | Call-to-action block with a button                                                  |
| **Forms**        | Embeds an active form by selecting it from your forms list                          |
| **Text**         | Rich text block supporting markdown                                                 |
| **Divider**      | Visual section separator                                                            |

## Reordering Sections

Sections can be dragged into any order within the editor. The updated order is saved when you save the page.
