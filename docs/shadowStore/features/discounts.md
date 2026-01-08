---
sidebar_position: 3
pagination_next: null
pagination_prev: null
---

# Discounts & Sales

Shadow Store provides a comprehensive discount system with three types of promotional tools: Discount Codes, Sales, and Referral Codes. These features help you run promotions, reward customers, and track marketing effectiveness.

## Discount Types

### 1. Discount Codes

Promotional codes that customers can enter at checkout to receive discounts.

#### Features

- **Discount Type**: Percentage or fixed amount
- **Expiration Dates**: Automatically expire and clean up old codes
- **Usage Limits**: Set maximum total uses across all customers
- **Per-User Limits**: Restrict how many times each customer can use the code
- **Role Restrictions**: Limit codes to specific user roles
- **Product Restrictions**: Apply codes only to specific products
- **Category Restrictions**: Limit codes to product categories
- **User Restrictions**: Create codes for specific users only
- **Usage Tracking**: Monitor code usage per customer
- **Discord Announcements**: Optional announcements in Discord

#### Creating a Discount Code

1. Navigate to **Admin Panel > Discounts**
2. Click "Create Discount Code"
3. Configure the discount:
   - **Code**: Unique code customers will enter (e.g., "SAVE20")
   - **Type**: Percentage (%) or Fixed Amount ($)
   - **Value**: Discount amount
   - **Expiration**: Optional expiration date
   - **Max Uses**: Total usage limit (optional)
   - **Per-User Limit**: Uses per customer (optional)
4. Set restrictions (optional):
   - Specific products only
   - Specific categories only
   - Specific users only
   - Required user roles
5. Enable Discord announcement (optional)
6. Click "Create"

#### Managing Discount Codes

- **Edit**: Modify existing codes (restrictions, expiration, limits)
- **Delete**: Remove codes immediately
- **Track Usage**: View usage statistics and user list
- **Auto-Cleanup**: Expired codes are automatically removed

### 2. Sales

Site-wide or targeted sales that automatically apply to products.

#### Features

- **Scope**: Apply to all products, specific products, or categories
- **Percentage-Based**: Set discount percentage
- **Expiration Dates**: Automatic cleanup on expiry
- **Exclusions**: Exclude specific products, categories, or users
- **Discord Announcements**: Optional sale announcements
- **Auto-Incrementing IDs**: Unique sale identifiers
- **Stacking**: Sales can stack with discount codes (configurable)

#### Creating a Sale

1. Navigate to **Admin Panel > Discounts**
2. Click "Create Sale"
3. Configure the sale:
   - **Name**: Internal sale name
   - **Discount**: Percentage off (e.g., 25%)
   - **Expiration**: Optional end date
4. Set scope:
   - **All Products**: Apply to entire store
   - **Specific Products**: Select products
   - **Specific Categories**: Select categories
5. Set exclusions (optional):
   - Exclude specific products
   - Exclude specific categories
   - Exclude specific users
6. Enable Discord announcement (optional)
7. Click "Create"

#### Managing Sales

- **Edit**: Update sale parameters
- **Delete**: End sale immediately
- **Auto-Cleanup**: Expired sales are removed automatically
- **Visual Indicators**: Sale prices shown on product pages

### 3. Referral Codes

Track referral campaigns and affiliate marketing.

#### Features

- **Unique Codes**: Create referral tracking codes
- **Usage Analytics**: Monitor referral usage
- **Sales Tracking**: Track revenue generated
- **Attribution**: Link sales to specific referrals

#### Creating Referral Codes

1. Navigate to **Admin Panel > Discounts**
2. Click "Create Referral Code"
3. Enter code details:
   - **Code**: Unique referral identifier
   - **Partner Name**: Referral source (optional)
4. Share code with partners/affiliates
5. Monitor usage in the dashboard

#### Tracking Referrals

- View total uses per code
- Track sales generated
- Calculate commissions (manual)
- Export referral data

## Discount Application

### Priority & Stacking

Discounts are applied in the following order:

1. **Sales**: Applied first (if applicable)
2. **Discount Codes**: Applied second
3. **Combined**: Both can apply if settings allow

### Checkout Process

1. Customer adds items to cart
2. Sales automatically applied to eligible items
3. Customer enters discount code (optional)
4. System validates code:
   - Checks expiration
   - Verifies usage limits
   - Confirms restrictions (products, categories, roles, users)
   - Validates per-user limit
5. Discount applied to total
6. Final price calculated

### Validation Rules

Discount codes will fail if:

- Code doesn't exist
- Code has expired
- Usage limit reached
- Per-user limit reached
- User doesn't have required role
- Cart contains restricted products
- User is excluded from the code

## Discord Integration

### Announcement Features

When creating discounts or sales, you can enable Discord announcements:

1. Configure Discord in **Admin Panel > Integrations > Discord**
2. Set notification channel for discount announcements
3. Configure ping role (optional):
   - Role ID (e.g., `1088352657938317372`)
   - `everyone` for @everyone
   - `here` for @here
4. Enable announcement when creating discount/sale

### Announcement Content

Discord notifications include:

- Discount code or sale name
- Discount percentage/amount
- Expiration date (if set)
- Applicable products/categories
- How to use the discount

## Permissions

To manage discounts and sales, users must have:

- `owner` - Full store owner access
- `manageDiscounts` - Discount management permissions
