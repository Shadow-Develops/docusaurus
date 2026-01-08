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
- **Description**: Main product description (markdown)

**Optional Fields:**

- **Secondary Description**: Additional details
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

- One-time purchase
- Set fixed price
- Optional role assignment on purchase

**Free Product:**

- No cost to customer

**Subscription:**

- Recurring billing
- Set renewal period (monthly, yearly, etc.)
- Automatic renewals

**Link:**

- Redirects to external URL
- No payment processing
- Can require specific roles
- Good for external resources

**Pricing Fields:**

- **Price**: Main product price
- **Release Date**: Future release scheduling
- **Early Bird Price**: Discounted pre-release price
- **Required Product**: Prerequisite product purchase

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
  - Product Description
  - Related Products
  - Product Features
  - Additional Info
  - FAQ
  - CTA Banner
  - Testimonials
  - Reviews
  - Text Content

**Other Settings:**

- **Display**: Show/hide product
- **License System**: Enable license key generation
- **Tags**: Assign product tags for filtering

## Product Types Explained

### Paid Products

Standard purchasable products.

**Configuration:**

- Set price
- Optional role assignment (grants Discord/site role on purchase)
- Can bundle other products
- Stock management available

**Use Cases:**

- Digital downloads
- Software licenses
- Physical products
- Services

### Free Products

No-cost products for lead generation or samples.

**Configuration:**

- No pricing required
- Optional role assignment
- Can require prerequisite products
- Stock tracking available

**Use Cases:**

- Free trials
- Sample downloads
- Community access
- Lead magnets

### Subscription Products

Recurring billing products.

**Configuration:**

- Set price and renewal period
- Automatic renewals
- Role granted while active
- Role removed when subscription ends

**Renewal Periods:**

- Daily
- Weekly
- Monthly
- Quarterly
- Yearly
- Custom intervals

**Use Cases:**

- Membership access
- Software subscriptions
- Monthly services
- Premium content access

### Link Products

Redirect to external resources.

**Configuration:**

- Set redirect URL
- Optional role requirements
- No payment processing
- Can be free or locked behind roles

**Use Cases:**

- External documentation
- Partner resources
- Download links
- Community servers

## Product Sections

Customize each product's page layout with sections:

### Product Description

Displays the main product description with markdown rendering.

### Related Products

Shows similar or complementary products in a grid.

### Product Features

Highlight key features with icons and descriptions.

**Configuration:**

- Add multiple features
- Icon selection
- Title and description
- Optional links

### Additional Information

Display specs, requirements, or other details in a formatted layout.

### FAQ

Product-specific frequently asked questions.

**Configuration:**

- Add question/answer pairs
- Collapsible accordion display

### CTA Banner

Call-to-action banner for promotions or announcements.

**Configuration:**

- Custom background color or image
- Blur effects
- Button link and text

### Testimonials

Customer reviews and feedback.

**Configuration:**

- Customer name and role
- Avatar image
- Star rating
- Testimonial text

### Reviews

Display product reviews from the review system.

### Text Content

Custom markdown content block with configurable width.

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
