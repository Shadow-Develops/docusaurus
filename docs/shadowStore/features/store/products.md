---
sidebar_position: 1
pagination_prev: null
---

# Products

Products are the core of your Shadow Store. The product management system provides comprehensive tools for creating, organizing, and customizing digital or physical products with advanced features including bundles, sections, stock management, and more.

## Accessing Product Management

Navigate to **Admin Panel > Products** to access product management.

## Creating a Product

1. Navigate to **Admin Panel > Products > Create**
2. Fill in product information across multiple tabs:
   - **About**: Basic product information
   - **Media**: Images, demos, galleries
   - **Type & Pricing**: Product type and pricing details
   - **Advanced**: Stock, dimensions, bundles, sections

### About Tab

**Required Fields:**

- **Product Name**: Clear, descriptive name
- **URL Slug**: URL-safe identifier
- **Display Order**: Position in product listings
- **Description**: Main product description (markdown editor with preview)

**Optional Fields:**

- **Secondary Description**: Additional details (markdown editor with preview)
- **Feature Description**: Highlight key features (appears on store page cards)

### Media Tab

**Product Image** (Required):

- Main product thumbnail
- Recommended: 1200x800px or similar
- Used in listings and product page header

**Demo Link** (Optional):

- URL to live demo or preview
- Opens in new tab
- Custom button text in store settings

**Gallery** (Optional):

- Multiple product images
- Comma-separated URLs
- Displayed in product page gallery

**Video** (Optional):

- YouTube or direct video URL
- Embedded on product page

### Type & Pricing Tab

**Product Types:**

**Paid Product:**

- One-time purchase at a fixed price

**Free Product:**

- No cost to customer
  - Depending on store settings, download can require user to be logged in or not

**Subscription:**

- Recurring billing at a set renewal period
- Renewal periods: Daily, Weekly, Monthly, Quarterly, Yearly, or Custom
- See [Subscriptions](../subscriptions) for lifecycle and admin management details

**Link:**

- Redirects to an external URL
- No payment processing

**Pre-Order:**

- Listed before the release date with an optional early bird price
- Automatically converts to a Paid product when the release date passes
  - Checked on the `PRE_ORDER_CHECK_INTERVAL` schedule (See [Configuration](../../install/config) for the env variable)

**Shipped:**

- Physical product requiring shipping
- Requires product dimensions (weight, length, width, height) for shipping rate calculation
- Shipping label generation via EasyPost integration

**Approval Required:**

- Customer submits a purchase request; an admin must approve it before delivery OR require the customer to have a certain Discord role to purchase
- See [Purchase Requests](../purchase-requests) for the admin workflow

**Pay What You Want:**

- Customer sets their own price at checkout
- Optionally set a minimum price floor

### Advanced Tab

**Stock Management:**

- Enable/disable stock tracking
- Set stock quantity
- Low stock threshold alerts
- Stock quantity display option

**Product Dimensions** (Physical Products):

- Weight
- Length, Width, Height
- Used for shipping calculations

**Bundles:**

- Select multiple products to include
- Bundle pricing applies to parent product
- All bundled products delivered together

**Product Sections:**

- Customize product page layout
- Add different section types:
  - Product Details
  - Product Description
  - Related Products
  - Product Features
  - Additional Info
  - FAQ
  - CTA Banner
  - Social Proof
  - Testimonials
  - Reviews
  - Gallery
  - Text Content

**Other Settings:**

- **Display**: Show/hide product
- **License System**: Enable license key generation
- **Tags**: Assign product tags for filtering

## Managing Products

### Viewing Products

**Admin Panel > Products** shows:

- Product list with thumbnails
- Name, type, price
- Visibility status
- Quick actions

### Editing Products

1. Click "Edit" on product
2. Modify any field across tabs
3. Save changes
4. Changes apply immediately

### Product Statistics

View detailed analytics:

- Total sales
- Revenue generated
- View count
- Conversion rate
- Purchase timeline

Access at **Admin Panel > Products > Stats > [product]**

### Deleting Products

:::warning
Deleting a product is permanent. Consider hiding instead of deleting to preserve purchase history.
:::

## Stock Management

Enable stock tracking to manage inventory:

**Setup:**

1. Edit product
2. Go to Advanced tab
3. Enable "Stock Management"
4. Set initial quantity
5. Set low stock threshold

**Features:**

- Automatic stock decrementation on purchase
- Low stock alerts (Discord/email)
- Out of stock prevention
- Stock quantity display option

## Product Bundles

Create product packages:

1. Edit parent product
2. Go to Advanced tab
3. Select products to bundle
4. Save product

**Bundle Behavior:**

- Customer receives all bundled products
- Price set on parent product
- All items delivered together
- Bundled items appear in customer library

## Release Scheduling

Schedule future product releases:

**Setup:**

1. Set Release Date in Type & Pricing tab
2. Optional: Set Early Bird Price
3. Save product

**Behavior:**

- Product hidden until release date
- Early bird pricing available before release
- Automatic price change on release date
- Can be featured for pre-orders

## License System

Generate and manage license keys:

**Enable:**

1. Edit product
2. Advanced tab
3. Check "License System"
4. Save

**Features:**

- Automatic license generation on purchase
- License key delivery
- License management per customer
- IP locking options (configured in Integrations)

## Product Layout System

The global product page layout is configured at **Admin Panel > Layout > Products**. It has two tabs:

### Details Tab

Configures the product details panel, the gallery and info panel that render the core product page. It has three areas: layout variant, gallery behavior, and info panel items.

#### Layout Variants

Choose how the gallery and info panel are arranged:

| Layout                      | Description                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| **Layout 1: Classic Split** | Gallery on one side, info panel beside it                                                |
| **Layout 2: Stacked**       | Gallery spans full width at top, info panel flows below                                  |
| **Layout 4: Magazine**      | Large hero image with a floating info card overlapping the bottom corner                 |
| **Layout 5: Minimal**       | Small image strip alongside a wide info column                                           |
| **Layout 6: Mosaic**        | First image large on the left, remaining images in a grid on the right; info flows below |

Each layout exposes its own set of options:

**Classic Split options:**

- Gallery side (left or right)
- Gallery height (small, medium, large)
- Image fit (cover or contain)

**Stacked options:**

- Gallery height (small, medium, large)
- Image fit (cover or contain)

**Magazine options:**

- Info card position (bottom-right, bottom-left, bottom-center)
- Image fit (cover or contain)

**Minimal options:**

- Thumbnail strip position (side vertical filmstrip, above info, or below info)
- Thumbnail size (extra small, small, medium)
- Image fit (cover or contain)

**Mosaic options:**

- Grid rows on the right side (1–3 rows)
- Info panel position (below mosaic grid, or right column replacing the image grid)
- Image fit (cover or contain)

#### Gallery Behavior

- **Auto-Advance Interval**: seconds between automatic image advances (1–120)
- **Show Navigation Arrows**: toggle left/right arrows on the gallery

#### Info Panel Items

Configure which items appear in the product info panel and in what order. All items can be:

- **Reordered** via drag and drop
- **Shown or hidden** with a toggle
- **Grouped on the same row** using the chain icon (two items side by side)
- **Expanded** to reveal per-item options

Available items:

| Item                 | Always Shown       | Per-Item Options                            |
| -------------------- | ------------------ | ------------------------------------------- |
| **Title**            | No                 | Size (default, small, large)                |
| **Price**            | No                 | Size                                        |
| **Stock Status**     | No                 | Size                                        |
| **Info Text**        | Yes (always shown) | Size                                        |
| **Tags**             | No                 | Size                                        |
| **Purchase Actions** | No                 | Size, Show Icon toggle                      |
| **Demo Button**      | No                 | Size, Show Icon toggle, custom Button Label |
| **Bundle Selector**  | No                 | Size                                        |

### Sections Tab

Globally configures which sections appear on all product pages and in what order. Uses the same drag-and-drop section builder as the homepage.

- Drag sections to reorder
- Toggle sections on or off
- Configure each section type

Individual products can also have their own section overrides set in the product's **Advanced** tab.

### Product Sections

Customize each product's page layout with sections:

#### Product Details

Renders the product gallery and info panel (title, price, stock, actions). Drag it to set its position in the page flow. Configure its appearance in the **Details** tab. Only one Product Details section can be added per layout.

#### Product Description

Displays the product descriptions set on individual products.

**Configuration:**

- Layout: Single column (full width) or two columns (Description 1 + Description 2)
- Toggle showing Description 1 (main) and/or Description 2 (secondary)

#### Related Products

Shows similar or complementary products in a grid.

**Configuration:**

- Section title and optional description
- Select specific products by ID
- Select product categories

#### Product Features

Highlight key features with icons and descriptions.

**Configuration:**

- Section title and optional subtitle
- Column count (2, 3, or 4)
- Add multiple features with icon (emoji, URL, or SVG), title, description, and optional link

#### Additional Information

Display specs, requirements, or other details using a markdown editor.

**Configuration:**

- Section title
- Markdown content

#### FAQ

Product-specific frequently asked questions.

**Configuration:**

- Section title
- Add question/answer pairs

#### CTA Banner

Call-to-action banner for promotions or announcements.

**Configuration:**

- Title and description
- Button text and link URL
- Background: site default, custom color, or custom image URL

#### Social Proof

Display a row of company/partner logos or trust badges.

**Configuration:**

- Title
- Column count (3, 4, 5, or 6)
- Show text toggle (shows name even when a logo image is present)
- Scroll toggle (scrolls items left-to-right when there are more than 4)
- Add logos with name, image URL, and optional link

#### Testimonials

Customer testimonials and feedback.

**Configuration:**

- Section title
- Column count (2, 3, or 4)
- Add testimonials with name, role, content, star rating (1–5), and avatar URL

#### Reviews

Display product reviews from the Shadow Store review system.

**Configuration:**

- Mode: **Ask for First Review** (prompts visitors to leave the first review) or **Hide if No Reviews** (hides the section when empty)

#### Gallery

Display a gallery of images on the product page.

**Configuration:**

- Image source: Product Images, Gallery Page, or Manual
- Layout type: Standard Grid or Multi-Image Layout
- Title and optional subtitle
- Columns (2, 3, or 4) and image height (grid layout only)
- Enable lightbox (full-screen view on click)
- Show descriptions (shown on hover)
- Images as Buttons toggle (manual source only: clicking opens the link or lightbox)
- Manual source: add images with URL, order, alt text, title, description, and optional link

#### Text Content

Custom markdown content block.

**Configuration:**

- Heading
- Markdown content
- Text alignment (left, center, or right)

### Section IDs

Each section in the section builder can have an optional **Section ID** (a URL-safe anchor slug). When set, CTA button URLs can use it as a hash (e.g., `#features`) to scroll visitors directly to that section.

## Product Tags

Organize products with tags:

**Create Tags:**

- Admin Panel > Products > Settings
- Create Tag modal
- Add tag name

**Assign Tags:**

- Edit product
- Advanced tab
- Check applicable tags

**Benefits:**

- Filter products by tag
- Group related products
- Enhance search
- Customer browsing

## CSV Bulk Import

Import multiple products at once using a CSV file.

**Access:** Navigate to **Admin Panel > Products > Import**

### Import Workflow

1. **Download the CSV template** (available on the import page) to get the correct column structure
2. **Upload your CSV**: the file is parsed client-side
3. **Resolve tags**: any tags in the CSV that don't exist yet are shown; you can register them or remove them from the import
4. **Review products**: all imported rows are shown in an editable table. Review for errors, toggle individual rows on or off, and fix any issues before importing
5. **Import**: products are created in batches with a live progress indicator
6. **Done**: a summary shows imported and failed products

### Supported CSV Columns

| Column              | Required | Description                                         |
| ------------------- | -------- | --------------------------------------------------- |
| `name`              | Yes      | Product name                                        |
| `type`              | Yes      | Product type (see below)                            |
| `desc`              | Yes      | Main description (markdown)                         |
| `image` / `url`     | No       | Main product image URL                              |
| `descTwo`           | No       | Secondary description                               |
| `descFeature`       | No       | Feature description (shown on store cards)          |
| `demo`              | No       | Demo link URL                                       |
| `gallery`           | No       | Gallery image URLs (pipe-separated: `url1\|url2`)   |
| `video`             | No       | Video URL (YouTube or MP4)                          |
| `price`             | No       | Product price                                       |
| `releasePrice`      | No       | Early bird / release price                          |
| `roles`             | No       | Discord roles granted on purchase (pipe-separated)  |
| `reqRoles`          | No       | Discord roles required to purchase (pipe-separated) |
| `license`           | No       | `true` to enable license key generation             |
| `approvalMethod`    | No       | Purchase approval method                            |
| `display`           | No       | `true` / `false` to show/hide product               |
| `weight`            | No       | Product weight (for shipping)                       |
| `packageLength`     | No       | Package length                                      |
| `packageWidth`      | No       | Package width                                       |
| `packageHeight`     | No       | Package height                                      |
| `stockEnabled`      | No       | `true` to enable stock tracking                     |
| `stockQuantity`     | No       | Initial stock quantity                              |
| `lowStockThreshold` | No       | Low stock alert threshold                           |
| `order`             | No       | Display order (integer)                             |
| `tags`              | No       | Tags to assign (pipe-separated)                     |
| `link`              | No       | Redirect URL (required for `redirect` type)         |
| `renew`             | No       | Renewal period (required for `subscription` type)   |
| `date`              | No       | Release date (required for `pre` type)              |

### Product Type Values

| CSV Value      | Type                       |
| -------------- | -------------------------- |
| `paid`         | Paid product               |
| `free`         | Free product               |
| `approved`     | Requires purchase approval |
| `redirect`     | Link / redirect            |
| `subscription` | Recurring subscription     |
| `pre`          | Pre-order                  |
| `shipped`      | Physical shipped product   |
| `choose`       | Pay-what-you-want          |

## Permissions

| Permission        | Access                                                           |
| ----------------- | ---------------------------------------------------------------- |
| `owner`           | Full access                                                      |
| `MANAGE_PRODUCTS` | Create, edit, and delete products; manage releases and inventory |
