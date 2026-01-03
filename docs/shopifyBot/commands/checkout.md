---
sidebar_position: 7
pagination_next: null
pagination_prev: null
---

# Checkout

The `/checkout` command generates direct checkout links for Shopify products, allowing staff to quickly create pre-filled carts for customers. This command is only accessible to staff members.

## Overview

Create instant checkout links with pre-selected products and quantities. Perfect for:

- Assisting customers with purchases
- Creating custom product bundles
- Quick order processing
- VIP customer support
- Direct sales through Discord

---

## How to Use

**Command:** `/checkout`

**Required:**

- `variant_id_1` - The first product variant to add to checkout (autocomplete enabled)

**Optional:**

- `quantity_1` - Quantity for the first item (defaults to 1)
- `variant_id_2` through `variant_id_5` - Additional product variants (up to 5 total items)
- `quantity_2` through `quantity_5` - Quantities for additional items
- `send_to` - Send the checkout link directly to a specific user via DM

**Example:**

```
/checkout
  variant_id_1: Blue T-Shirt (Medium) - $29.99
  quantity_1: 2
  variant_id_2: Black Hoodie (Large) - $49.99
  quantity_2: 1
  send_to: @Customer
```

---

## Using Autocomplete

The variant ID fields feature smart autocomplete to help you find products easily.

### How Autocomplete Works

1. Start typing a product name, SKU, or variant ID
2. Matching products appear in a dropdown
3. Select the product you want

### Search Tips

You can search by:

- **Product name** - "T-Shirt", "Hoodie"
- **Variant name** - "Medium", "Blue", "Large"
- **SKU** - Product SKU if configured
- **Price** - Products show their price
- **Variant ID** - Direct ID number

**Example searches:**

- Type `blue` → Shows all blue variants
- Type `shirt` → Shows all shirt products
- Type `29.99` → Shows products at that price
- Type `12345` → Finds variant ID 12345

---

## Response Examples

### Success (Personal Link)

```
🛒 Checkout Link Generated

Click the link below to checkout:

[Go to Checkout](https://yourstore.com/cart/12345:2,67890:1)

Items (2)
**Item 1:** Variant ID `12345` × 2
**Item 2:** Variant ID `67890` × 1
```

### Success (Sent to User)

```
✅ Success
Checkout link sent to Customer#1234
```

### Error - No Items

```
❌ Error
No items provided for checkout.
```

### Error - DM Failed

```
❌ Error
Failed to send DM to Customer#1234. They may have DMs disabled.
```

---

## Understanding Variant IDs

### What is a Variant?

In Shopify, each unique combination of product options is a "variant":

**Product:** T-Shirt
**Variants:**

- Blue / Small
- Blue / Medium
- Blue / Large
- Red / Small
- Red / Medium
- Red / Large

Each variant has a unique ID number used to identify it.

### Why Variants Matter

The checkout command uses variant IDs (not product IDs) because:

- Customers need specific sizes/colors/options
- Each variant has its own price and inventory
- Links must specify exact items

### Finding the Right Variant

Use autocomplete! Type:

- Product name + option (e.g., "T-Shirt Medium")
- Color + product (e.g., "Blue Hoodie")

The autocomplete shows: `Product Name (Variant) - Price`

---

## Adding Multiple Items

You can add up to **5 different items** in a single checkout link.

### Example: Creating a Bundle

```
/checkout
  variant_id_1: T-Shirt (Medium) - $29.99
  quantity_1: 1
  variant_id_2: Jeans (32x32) - $59.99
  quantity_2: 1
  variant_id_3: Socks (One Size) - $9.99
  quantity_3: 2
```

This creates a checkout with:

- 1× T-Shirt (Medium)
- 1× Jeans (32x32)
- 2× Socks (One Size)

**Total items in cart: 4**

:::tip
You only need to fill in as many variant slots as you need. If you're only checking out 2 products, just use `variant_id_1` and `variant_id_2`.
:::

---

## Sending to Customers

### Direct DM to Users

Use the `send_to` option to send the checkout link directly to a Discord user.

**Example:**

```
/checkout
  variant_id_1: Premium Package - $99.99
  send_to: @VIPCustomer
```

**What Happens:**

1. The bot sends a DM to the specified user
2. DM includes the checkout link and item details
3. You receive a confirmation message
4. User can click the link to complete purchase

### When DMs Fail

If the user has DMs disabled or has blocked the bot:

- You'll receive an error message
- You can copy the link manually and send it yourself
- Or ask the user to enable DMs and try again

---

## Use Cases

### Customer Support

**Scenario:** Customer asks about buying specific items

```
Customer: "Can I get 2 blue shirts and 1 black hoodie?"
Staff: *Uses /checkout with those items*
Staff: /checkout variant_id_1: [Blue Shirt] quantity_1: 2 variant_id_2: [Black Hoodie] send_to: @Customer
Staff: "I've sent you a checkout link with those items!"
```

### Custom Bundles

Create special product combinations:

```
/checkout
  variant_id_1: Starter Kit - $49.99
  variant_id_2: Premium Add-on - $29.99
  variant_id_3: Extended Warranty - $19.99
  send_to: @NewCustomer
```

### Quick Reorders

Help customers quickly reorder previous purchases:

```
Staff: "I'll create a checkout with your usual order"
/checkout
  variant_id_1: [Previous Item 1]
  quantity_1: 2
  variant_id_2: [Previous Item 2]
  quantity_2: 1
  send_to: @RegularCustomer
```

### VIP Sales

Process exclusive deals:

```
/checkout
  variant_id_1: Limited Edition Item - $199.99
  send_to: @VIPMember
```

---

## How Checkout Links Work

### Link Structure

The generated link follows this format:

```
https://yourstore.com/cart/VARIANT_ID:QUANTITY,VARIANT_ID:QUANTITY
```

**Example:**

```
https://yourstore.com/cart/12345:2,67890:1
```

- Variant `12345` with quantity `2`
- Variant `67890` with quantity `1`

### What Customers See

When customers click the link:

1. They're taken to your Shopify store
2. The cart is pre-filled with the specified items
3. They can review quantities and products
4. They can add more items or remove items
5. They proceed to checkout when ready

### Important Notes

- Links work for anyone who clicks them (not user-specific)
- Customers can modify the cart before checking out
- The link doesn't apply discounts (use discount codes separately)
- If a variant is out of stock, customers will see an error

---

## Best Practices

### Verify Before Sending

1. Check variant details in autocomplete
2. Confirm quantities are correct
3. Verify you're sending to the right user

### Combine with Other Commands

Create a complete sales flow:

**Step 1 - Create discount:**

```
/discount create code: VIP20 type: Percentage value: 20 usage_limit: 1
```

**Step 2 - Generate checkout:**

```
/checkout variant_id_1: [Product] send_to: @Customer
```

**Step 3 - Share discount:**

```
DM to customer: "Use code VIP20 at checkout for 20% off!"
```

### Inventory Awareness

- Verify items are in stock before creating links
- Use `/inventory` command to check stock levels
- Inform customers if items are low in stock

### Communication

- Explain what the link does before sending
- Include discount codes if applicable
- Let customers know they can modify the cart
- Be available for questions after sending

---

## Troubleshooting

### "No items provided for checkout"

You didn't specify any variant IDs. Make sure to select at least `variant_id_1`.

### "Failed to generate checkout link"

Possible causes:

- Invalid variant ID
- Shopify API connection issue
- The variant no longer exists

**Solution:** Try selecting the variant again using autocomplete.

### "Failed to send DM"

The user has one of these settings:

- DMs disabled from server members
- Privacy settings blocking DMs
- They blocked the bot

**Solution:**

1. Ask the user to enable DMs
2. Or send the link manually in a channel/thread

### Autocomplete Shows No Results

Possible causes:

- No products in your store
- Products not published
- Shopify API connection issue

**Solution:** Check your Shopify admin to verify products exist and are published.

### Link Doesn't Work

If customers report the link isn't working:

- Verify the variant still exists in Shopify
- Check if the product is published
- Ensure the variant is available for sale
- Try generating a new link

---

## Permissions Required

To use this command, you need:

- A **staff role** configured in bot settings

---

## Technical Details

### Variant Limit

Up to **250 products** are loaded for autocomplete, showing the most recently updated variants first.

### Autocomplete Limit

Up to **25 matching results** are shown at a time. Narrow your search if you don't see what you need.

### Link Expiration

Checkout links do not expire and can be used multiple times.

### Cart Behavior

- Links create a new cart (don't merge with existing carts)
- Customers can still modify quantities
- Cart persists across sessions

---

## Tips for Staff

- Bookmark frequently used products for quick reference
- Keep a list of common variant IDs for popular items
- Test checkout links yourself before sending to customers
- Use descriptive communication when sending links
- Follow up to ensure customers complete their purchase
- Track which products you frequently sell through Discord
- Combine with inventory checks to avoid overselling
- Use bundles to increase average order value
- Create pre-configured links for special promotions
- Save time by using autocomplete effectively

---

## Example Workflows

### New Customer Onboarding

```
Customer: "I'm interested in your starter package"
Staff: "Great! Let me set that up for you with our welcome discount."

/discount create code: WELCOME15 type: Percentage value: 15 usage_limit: 1

/checkout
  variant_id_1: Starter Package - $99.99
  variant_id_2: Bonus Item - $14.99
  send_to: @NewCustomer

Staff (DM): "I've sent you a checkout link! Use code WELCOME15 for 15% off your first order!"
```

### Bulk Order Assistance

```
Customer: "I need 10 of the blue shirts in medium"
Staff: "No problem! Creating that for you now."

/checkout
  variant_id_1: Blue Shirt (Medium) - $29.99
  quantity_1: 10
  send_to: @Customer

Staff: "Checkout link sent! You're getting the bulk discount automatically."
```

### Limited Edition Release

```
Staff: "New drop just went live!"

/checkout
  variant_id_1: Limited Edition Sneaker - $199.99
  send_to: @VIPCustomer

Staff (DM): "First access to the new release. Link is ready when you are!"
```
