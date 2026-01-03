---
sidebar_position: 6
pagination_next: null
pagination_prev: null
---

# Discount

The `/discount` command allows administrators to create and manage Shopify discount codes directly from Discord. This command requires **Administrator** permissions and is only accessible to staff members.

## Overview

Create promotional discount codes for your Shopify store without leaving Discord. Perfect for:

- Flash sales and promotions
- Customer loyalty rewards
- Special event discounts
- Influencer partnerships
- Limited-time offers

---

## Subcommands

### Create a Discount Code

Generate a new discount code in your Shopify store.

**Command:** `/discount create`

**Required Options:**

- `code` - The discount code customers will enter (automatically converted to UPPERCASE)
- `type` - Discount type (choose one):
  - **Percentage** - Percentage off the total (e.g., 20% off)
  - **Fixed Amount** - Fixed dollar amount off (e.g., $10 off)
- `value` - The discount value:
  - For percentage: Enter the percentage (e.g., `20` for 20% off)
  - For fixed amount: Enter the dollar amount (e.g., `10` for $10 off)

**Optional:**

- `usage_limit` - Maximum number of times the code can be used (unlimited if not set)
- `starts_at` - When the discount becomes active (format: `YYYY-MM-DD`, defaults to now)
- `ends_at` - When the discount expires (format: `YYYY-MM-DD`, defaults to never)

**Examples:**

#### Percentage Discount

```
/discount create
  code: SAVE20
  type: Percentage
  value: 20
  usage_limit: 100
  ends_at: 2026-12-31
```

Result: 20% off, limited to 100 uses, expires December 31, 2026

#### Fixed Amount Discount

```
/discount create
  code: WELCOME10
  type: Fixed Amount
  value: 10
```

Result: $10 off, unlimited uses, never expires

#### Limited Time Flash Sale

```
/discount create
  code: FLASH50
  type: Percentage
  value: 50
  usage_limit: 50
  starts_at: 2026-06-01
  ends_at: 2026-06-02
```

Result: 50% off, limited to 50 uses, active June 1-2, 2026

---

### List All Discount Codes

View all discount codes and price rules in your Shopify store.

**Command:** `/discount list`

**Example Output:**

```
🎟️ All Discounts

🎟️ **SAVE20** (percentage)
Discount: 20% | 100 uses | ✅ Active

🎟️ **WELCOME10** (fixed_amount)
Discount: $10.00 | Unlimited | ✅ Active

🤖 **Summer Sale** (automatic)
Discount: 15% | Unlimited | ❌ Inactive

Page 1 of 2 | 15 total discounts
```

**Features:**

- **Pagination** - Navigate through multiple pages if you have many discounts
- **Status Indicators** - See which discounts are currently active
- **Type Icons**:
  - 🎟️ Code-based discounts (customers enter a code)
  - 🤖 Automatic discounts (applied automatically)
- **Usage Info** - See usage limits for each discount

---

## Response Examples

### Success - Discount Created

```
✅ Discount Code Created

Code: SAVE20
Type: Percentage
Value: 20%
Usage Limit: 100
Starts: 2026-01-15
Ends: 2026-12-31
```

### Error - Code Already Exists

```
❌ Error
Failed to create discount code. It may already exist.
```

### Error - No Discounts Found

```
❌ Error
No discount codes found.
```

---

## Date Formatting

When using `starts_at` or `ends_at`, follow the `YYYY-MM-DD` format:

- ✅ Correct: `2026-12-31`, `2026-06-15`, `2026-01-01`
- ❌ Wrong: `12/31/2026`, `Dec 31 2026`, `31-12-2026`

**Important Notes:**

- If `starts_at` is not provided, the discount starts immediately
- If `ends_at` is not provided, the discount never expires
- Times are in your store's timezone
- Start date must be before end date

---

## Discount Types Explained

### Percentage Discount

Takes a percentage off the order total.

**Best for:**

- General promotions (e.g., "20% off everything")
- Seasonal sales
- First-time customer offers

**Example:**

- Value: `25`
- Customer's cart: $100
- Discount: $25 (25% of $100)
- **Final price: $75**

### Fixed Amount Discount

Takes a specific dollar amount off the order total.

**Best for:**

- Welcome offers (e.g., "$10 off first order")
- Minimum purchase promotions
- Loyalty rewards

**Example:**

- Value: `15`
- Customer's cart: $50
- Discount: $15
- **Final price: $35**

---

## Usage Limits

Control how many times a discount can be used:

### Unlimited Uses

Don't specify `usage_limit` or set it to `0`

```
/discount create code: PERMA10 type: Percentage value: 10
```

### Limited Uses

Set a specific number of redemptions:

```
/discount create code: FIRST50 type: Fixed Amount value: 20 usage_limit: 50
```

Once 50 customers use the code, it becomes inactive.

:::tip Usage Strategy

- **High limits** for major sales (500-1000)
- **Low limits** for exclusivity (10-50)
- **No limit** for permanent codes
  :::

---

## Advanced Features

### Active Status Detection

The `/discount list` command automatically determines if a discount is active by checking:

- Current date is after `starts_at`
- Current date is before `ends_at` (if set)
- Usage limit hasn't been reached

### Special Discount Types

When listing discounts, you may see special types from your Shopify admin:

- **Buy X Get Y (BXGY)** - Promotional bundles
- **Free Shipping** - Shipping discounts
- **Automatic** - Discounts applied automatically without a code

:::info
The `/discount create` command creates basic code-based discounts. For advanced discount types (BXGY, Free Shipping, etc.), create them in your Shopify admin panel.
:::

---

## Best Practices

### Code Naming

- **Keep it short** - Easy to type and remember (e.g., `SAVE20` not `SAVETWENTYPERCENTOFF`)
- **Make it clear** - Code should hint at the discount (e.g., `WELCOME10` for $10 welcome offer)
- **Use uppercase** - Codes are automatically converted to uppercase for consistency
- **Avoid confusion** - Don't use similar codes (e.g., `SAVE20` and `SAVE2O`)

### Timing Strategy

- **Flash sales** - Short duration (1-3 days) creates urgency
- **Seasonal** - Align with holidays or seasons
- **Welcome offers** - No end date for new customers
- **Limited quantity** - Use low usage limits for exclusivity

### Value Strategy

- **Percentage** - Better for higher-priced items (20% off $100 = $20)
- **Fixed amount** - Better for lower-priced items ($5 off $20 = 25%)
- **Sweet spot** - 15-25% is common for general promotions

---

## Troubleshooting

### "Failed to create discount code"

This usually means:

- The code already exists in your store
- Invalid date format
- Shopify API connection issue

**Solutions:**

1. Check if the code exists with `/discount list`
2. Verify date format is `YYYY-MM-DD`
3. Try a different code name
4. Check Shopify admin for existing codes

### "No discount codes found"

Your store has no discount codes or price rules.

**Solutions:**

1. Create your first discount with `/discount create`
2. Check your Shopify admin to verify

### Discount Shows as Inactive

Check that:

- Current date is after the start date
- Current date is before the end date (if set)
- Usage limit hasn't been reached
- The discount is enabled in Shopify admin

---

## Permissions Required

To use this command, you need:

- **Administrator** permission (Discord)
- A **staff role** configured in bot settings

---

## Integration with Shopify

### How It Works

1. Bot connects to your Shopify store via API
2. Creates a price rule with your specified parameters
3. Generates a discount code linked to that price rule
4. Code is immediately available for customers to use

### Where Customers Use It

Customers can enter discount codes:

- At checkout on your store
- In their cart before checkout
- On mobile and desktop versions

### Viewing in Shopify

All created discounts appear in:
**Shopify Admin → Discounts**

You can edit advanced settings there that aren't available in the Discord command.

---

## Tips for Staff

- Create codes ahead of time and save the details
- Use the list command to audit active promotions
- Set usage limits to control discount budget
- Monitor usage in Shopify admin analytics
- Deactivate expired codes in Shopify admin
- Communicate new codes in your Discord server announcements
- Create exclusive codes for Discord members
- Track which codes perform best for future campaigns

---

## Example Campaign Workflow

### Planning a Flash Sale

1. **Create the discount:**

```
/discount create
  code: FLASH30
  type: Percentage
  value: 30
  usage_limit: 200
  ends_at: 2026-06-15
```

2. **Announce it** (using `/embed create`):

```
/embed create
  title: ⚡ FLASH SALE - 30% OFF!
  description: Use code **FLASH30** at checkout for 30% off!\n\nLimited to first 200 customers. Ends June 15th!
  color: #FF5733
  channel: #announcements
```

3. **Monitor usage:**

- Check redemptions in Shopify admin
- List all discounts periodically to see status

4. **Follow up:**

- Thank customers who used the code
- Analyze sales data after the promotion ends
