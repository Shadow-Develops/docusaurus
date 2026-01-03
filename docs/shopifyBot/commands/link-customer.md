---
sidebar_position: 4
pagination_next: null
pagination_prev: null
---

# Link Customer (Staff)

The `/link-customer` command allows staff members to manually link a Discord user to a Shopify customer account. This command requires **Manage Roles** permissions and is only accessible to staff members.

## Overview

This is the administrative version of the `/link` command. Use it when:

- A customer needs help linking their account
- The automated linking process fails
- You need to link accounts on behalf of users
- Troubleshooting linking issues

---

## How to Use

**Command:** `/link-customer`

**Required Options:**

- `user` - The Discord user to link (mention or select)
- `email` - The customer's email address from Shopify

**Example:**

```
/link-customer user: @JohnDoe email: john@example.com
```

---

## The Linking Process

### Step 1: Validate Email

The bot checks:

- Email format is valid
- Email exists in your Shopify store
- A customer account is associated with that email

### Step 2: Search Shopify

The command searches your Shopify customer database for an exact email match.

### Step 3: Link Accounts

Once found, the bot:

- Links the Discord user ID to the Shopify customer ID
- Stores the customer's email address
- Records the link timestamp
- Saves Discord information to Shopify metafields (if possible)

### Step 4: Role Assignment

If configured in settings:

- Automatically assigns the **client role** to the user
- Only if the customer has at least one order
- Only if **auto-assign on join** is enabled

### Step 5: Confirmation

You receive a detailed confirmation embed showing:

- Discord username
- Shopify customer name
- Email address (redacted if PII protection is enabled)
- Total orders
- Total amount spent

---

## Response Examples

### Success

```
✅ Customer Linked

Discord User: JohnDoe#1234
Shopify Customer: John Doe
Email: john@example.com (or ||REDACTED||)
Total Orders: 15
Total Spent: $1,245.50
```

### Email Not Found

```
❌ Error
No customer found with that email address.
```

### Invalid Email Format

```
❌ Error
Invalid email address format.
```

---

## Logging and Auditing

When a customer is linked:

### Database Log

A log entry is created with:

- Type: `customer_link`
- Action: `link`
- Staff member who performed the action
- Target user (Discord ID)
- Shopify customer ID
- Email address

### Channel Log

If configured, a message is sent to the **Shopify Commands** log channel:

```
🔗 Customer Linked

@StaffMember linked @JohnDoe to Shopify customer

Customer ID: 1234567890
Email: john@example.com
```

---

## Shopify Metafields

The bot attempts to save Discord information to the Shopify customer record as metafields:

- Discord User ID
- Discord Username
- Discord Server ID

This allows you to see Discord information directly in your Shopify admin panel.

:::info
If metafield saving fails, the linking process will still complete successfully. Metafields are optional and used for convenience only.
:::

---

## Privacy and PII

### PII Protection

If **Show PII** is disabled in settings:

- Email addresses appear as `||REDACTED||` in your response
- Full details are still logged in the log channel
- This protects customer privacy in public channels

### Best Practices

- Always verify you have the correct user before linking
- Use private/staff channels when running this command
- Keep customer email addresses confidential
- Enable PII protection if using in semi-public channels

---

## Troubleshooting

### "Invalid email address format"

Make sure the email:

- Contains an `@` symbol
- Has a valid domain
- Has no extra spaces or typos

### "No customer found with that email address"

Verify that:

- The email is spelled correctly
- The customer has an account in your Shopify store
- You're using the exact email from Shopify (check in admin panel)

### "Failed to link customer"

This could happen if:

- The Shopify API is unavailable
- The bot lacks necessary permissions
- There's a database connection issue

Check the bot's console logs for detailed error information.

### User Already Linked

If the Discord user is already linked to a different customer:

1. Use `/unlink-customer` first
2. Then run `/link-customer` again

---

## Related Commands

- `/link` - User-initiated linking process
- `/unlink-customer` - Manually unlink a customer (staff only)
- `/customer` - View customer information
- `/settings` - Configure client role and auto-assign behavior

---

## Permissions Required

To use this command, you need:

- **Manage Roles** permission (Discord)
- A **staff role** configured in bot settings

---

## Tips for Staff

- Double-check the email before linking to avoid mistakes
- Verify with the user that the email is correct
- Use this command when users have trouble with `/link`
- Keep a log channel configured for accountability
- Link customers proactively during onboarding if needed
- Always respect customer privacy when handling email addresses

---

## Common Use Cases

### Customer Support Scenario

```
Customer: "I tried /link but the verification link isn't working"
Staff: *Asks for their email*
Staff: /link-customer user: @Customer email: their@email.com
Staff: "All set! You're now linked and should have your customer role."
```

### Bulk Onboarding

For existing customers joining your Discord:

1. Ask them to provide their Shopify email
2. Use `/link-customer` to link each account
3. They automatically receive the customer role
4. They can immediately access customer-only channels

### Troubleshooting

When automated linking fails:

1. Ask the user to try `/unlink` first
2. Have them try `/link` again
3. If still failing, manually link with `/link-customer`
