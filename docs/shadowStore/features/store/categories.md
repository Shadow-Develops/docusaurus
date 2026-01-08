---
sidebar_position: 3
---

# Categories

Product Categories allow you to organize products into logical groups, making it easier for customers to browse and find what they're looking for. Each category has its own page with customizable content and product listings.

## Accessing Category Management

Navigate to **Admin Panel > Products > Categories** to manage product categories.

## Creating a Category

1. Navigate to **Admin Panel > Products > Categories**
2. In the "Create Category" section, fill in:
   - **Name**: Category display name
   - **URL**: URL slug for the category page
   - **Description**: Category description (markdown)
   - **Icon** (optional): Category icon/image
3. Assign products to the category
4. Click "Create Category"

The category will be accessible at `/{url-slug}`

## Category Fields

### Name

The category display name shown throughout the site.

**Examples:**

```
Digital Products
Software
Templates
Courses
Services
```

### URL

URL-safe slug for the category page.

**Examples:**

- `digital-products` → `/digital-products`
- `software` → `/software`
- `templates` → `/templates`

### Description

Markdown-supported description explaining the category.

**Example:**

```markdown
## Premium Digital Products

Browse our collection of high-quality digital products including:

- Software tools
- Templates
- Design assets
```

### Products

Assign products to appear in this category.

**Adding Products:**

1. View available products list
2. Select products to add
3. Products appear in category immediately

## Managing Categories

### Editing Categories

1. Click "Edit" on category
2. Modify name, URL, description, or products
3. Save changes

### Deleting Categories

:::warning
Deleting a category does not delete the products within it. Products become uncategorized.
:::

1. Click "Delete" on category
2. Confirm deletion
3. Category is removed

## Category Pages

Each category has a dedicated page showing:

- Category name and description
- All assigned products
- Product grid layout
- Filtering options

## Best Practices

- Create 5-10 main categories
- Use clear, descriptive names
- Write helpful category descriptions
- Assign products to relevant categories
- Review and consolidate periodically

## Permissions

- `owner` - Full category management
- `manageProducts` - Create and edit categories
