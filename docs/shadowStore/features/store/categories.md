---
sidebar_position: 3
---

# Categories

Product Categories allow you to organize products into logical groups, making it easier for customers to browse and find what they're looking for.

## Accessing Category Management

Navigate to **Admin Panel > Products > Categories** to manage product categories.

## Category Types

Categories come in two types:

| Type         | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| **Pageless** | A filter tag only: groups products for store filtering but has no public URL |
| **Page**     | Has a dedicated public page at `/{slug}` with customizable content           |

## Creating a Category

1. Navigate to **Admin Panel > Products > Categories**
2. In the "Create Category" section, fill in:
   - **Name**: Category display name
   - **Type**: `Pageless` or `Page`
   - **Slug** (Page type only): URL slug for the category page
   - **Hidden from Home**: Hide this category from the home page
   - **Hidden from Filter**: Hide this category from the store filter
3. Click **Create Category**

Page-type categories are accessible at `/{slug}`.

## Category Fields

### Name

The category display name shown throughout the site.

### Type

- **Pageless**: tag-only category used for filtering; no public page
- **Page**: category with a public-facing page and customizable layout

### Slug

URL-safe slug for page-type categories.

**Examples:**

- `digital-products` → `/digital-products`
- `software` → `/software`

### Visibility

Two independent visibility flags control where a category appears:

- **Hidden from Home**: hides the category from the home page
- **Hidden from Filter**: hides the category from the store filter

## Managing Products

### Assigning Products

1. Click the product assignment button on a category
2. Search for products to add
3. Click **Add** or **Remove** to assign/unassign products

## Managing Categories

### Editing Categories

1. Click **Edit** on a category
2. Modify name, type, slug, or visibility settings
3. Save changes

### Deleting Categories

:::warning
Deleting a category does not delete the products within it. Products become uncategorized.
:::

1. Click **Delete** on a category
2. Confirm deletion

## Page Layout Editor

For **Page**-type categories, a layout editor is available at `/{slug}` in the admin panel. It provides:

- **Show Title** toggle: controls whether the category name appears as the page heading
- **Page Sections**: drag-and-drop page builder (defaults to a product grid section on creation)

## Permissions

| Permission    | Access                              |
| ------------- | ----------------------------------- |
| `owner`       | Full access                         |
| `manageStore` | Create, edit, and delete categories |
