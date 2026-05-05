---
sidebar_position: 4
pagination_next: null
---

# Global Product Layout

The Global Product Layout configures the default appearance and sections for all product pages. Changes here apply sitewide. Individual products can add their own section overrides on top of this global configuration.

## Accessing Global Layout

Navigate to **Admin Panel > Layout > Products**.

The page has two tabs: **Details** and **Sections**.

---

## Details Tab

The Details tab controls the product details area: the layout variant, gallery behavior, and info panel configuration.

### Layout Variants

Choose from five layout styles:

| Variant           | Description                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| **Classic Split** | Gallery on one side, info panel beside it                                                         |
| **Stacked**       | Gallery spans full width at top, info panel flows below                                           |
| **Magazine**      | Large hero image with a floating info card overlapping the bottom corner                          |
| **Minimal**       | Small image strip alongside a wide info column: product copy takes center stage                   |
| **Mosaic**        | First image large on the left (~60%), remaining images form a grid on the right, info flows below |

### Layout-Specific Options

Each layout exposes its own set of options:

**Classic Split**

- **Gallery Side**: Left or Right
- **Gallery Height**: Small, Medium, or Large
- **Image Fit**: Cover (fill the frame) or Contain (show the full image)

**Stacked**

- **Gallery Height**: Small, Medium, or Large
- **Image Fit**: Cover or Contain

**Magazine**

- **Info Card Position**: Bottom Right, Bottom Left, or Bottom Center
- **Image Fit**: Cover or Contain

**Minimal**

- **Thumbnail Strip Position**: Side (vertical filmstrip) / Above info (horizontal) / Below info (horizontal)
- **Thumbnail Size**: Extra Small, Small, or Medium
- **Image Fit**: Cover or Contain

**Mosaic**

- **Grid Rows** (right-side images): 1, 2, or 3 rows
- **Info Panel Position**: Below mosaic grid or Right column (beside main image)
- **Image Fit**: Cover or Contain

### Global Gallery Behavior

These settings apply to all layouts:

| Setting                    | Description                                                     |
| -------------------------- | --------------------------------------------------------------- |
| **Auto-Advance Interval**  | Seconds between automatic slide transitions (1–120, default 10) |
| **Show Navigation Arrows** | Toggle previous/next arrows on the gallery                      |

### Info Panel Items

The info panel displays product metadata and actions. Eight items are available, each individually configurable:

| Item        | Description                                            |
| ----------- | ------------------------------------------------------ |
| **Title**   | Product name                                           |
| **Price**   | Product price                                          |
| **Stock**   | Stock status indicator                                 |
| **Info**    | Info/description text (always shown, cannot be hidden) |
| **Tags**    | Product tags                                           |
| **Actions** | Add to cart / purchase button                          |
| **Bundle**  | Bundle product selector                                |
| **Demo**    | Demo link button                                       |

**Per-item options:**

- **Enabled / Disabled** toggle (all items except Info)
- **Size**: Default, Small, or Large
- **Show Icon**: show or hide the icon (Actions and Demo only)
- **Custom Label**: override the button text (Demo only)

**Reordering:** Drag items by their handle to change the order they appear in the info panel.

**Row Grouping:** Items can be grouped to appear side-by-side on the same row. Click the chain icon between two items to link them into a group. Groups are color-coded. Click the chain icon again to unlink.

---

## Sections Tab

The Sections tab controls which content sections appear below the product details area on all product pages, and in what order.

### Available Section Types

| Section                 | Description                                                            |
| ----------------------- | ---------------------------------------------------------------------- |
| **Product Details**     | The details panel configured above (always present, cannot be removed) |
| **Product Description** | Main product description with markdown rendering                       |
| **Related Products**    | Grid of similar or complementary products                              |
| **Product Features**    | Icon + title + description feature highlights                          |
| **Additional Info**     | Specs, requirements, or other details                                  |
| **FAQ**                 | Collapsible question/answer pairs                                      |
| **CTA Banner**          | Call-to-action banner with custom background and button                |
| **Social Proof**        | Partner logos or trust badge grid                                      |
| **Testimonials**        | Customer testimonials with star ratings                                |
| **Reviews**             | Live product reviews from the review system                            |
| **Gallery**             | Image gallery with lightbox                                            |
| **Text Content**        | Custom markdown content block with configurable width                  |

### Managing Sections

**Add a section:** Click the section type in the right sidebar. It appears at the bottom of the list.

**Reorder:** Drag sections by the move icon to change their position.

**Enable / Disable:** Toggle sections on or off without removing them. Disabled sections are hidden from the product page but stay in your configuration.

**Configure:** Expand a section to fill in its fields and items.

**Duplicate:** Click the duplicate icon to copy a section (not available for Product Details).

**Delete:** Click the trash icon to permanently remove a section.

### Section IDs

Each section can have an optional **Section ID**: a URL-safe anchor slug (lowercase letters, numbers, hyphens, underscores). When set, it appears as a badge on the section header and enables deep-linking. CTA button URLs can use it as a hash (e.g., `#features`) to scroll visitors directly to that section.

---

## Permissions

| Permission      | Access                     |
| --------------- | -------------------------- |
| `owner`         | Full access                |
| `MANAGE_LAYOUT` | Edit global product layout |
