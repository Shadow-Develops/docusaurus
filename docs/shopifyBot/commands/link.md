---
sidebar_position: 3
pagination_next: null
pagination_prev: null
---

# Link

The `/link` command allows users to connect their Discord account with their Shopify customer account. This integration enables personalized features and automatic role assignment.

## Overview

Account linking creates a secure connection between a user's Discord profile and their Shopify customer data, enabling:

- Automatic customer role assignment
- Personalized order tracking
- Quick access to purchase history
- Enhanced customer support

---

## How to Use

**Command:** `/link`

1. Run the `/link` command in any channel
2. The bot sends you an ephemeral message (only you can see it) with a verification link
3. Click the verification link
4. Log in with your Shopify customer account
5. Your accounts are automatically linked
6. You'll receive a confirmation message in Discord

**Example:**

```
/link
```

---

## The Linking Process

### Step 1: Request Link

When you run `/link`, the bot:

- Checks if your Discord account is already linked
- Generates a unique, secure verification token
- Creates a verification URL valid for **15 minutes**

### Step 2: Verify Identity

The verification link directs you to a secure web page where you:

- Log in to your Shopify customer account
- Confirm you want to link your Discord account
- Authorize the connection

### Step 3: Confirmation

Once verified:

- Your accounts are permanently linked
- You receive a confirmation message in Discord
- If configured, you automatically receive the customer role
- Staff members may receive a notification (if enabled in settings)

---

## What Information is Linked?

The bot stores:

- Your Discord User ID
- Your Shopify Customer ID
- Your email address (from Shopify)
- The date/time when accounts were linked

:::info Privacy
Your Shopify password and payment information are never accessed or stored by the bot.
:::

---

## Already Linked?

If you try to run `/link` when your account is already linked, you'll see:

```
🟠 Already Linked

Your Discord account is already linked to a Shopify customer account.

Email: your@email.com
Linked: 2 weeks ago

If you need to update your linked account, please contact a staff member or use `/unlink` first.
```

---

## Security Features

- **Unique Tokens:** Each verification link is unique to you and can only be used once
- **Time-Limited:** Links expire after 15 minutes for security
- **Encrypted:** All data transmission is encrypted
- **Single Use:** Tokens cannot be reused after verification

---

## Automatic Role Assignment

If your server has configured:

- A **client role** in settings
- **Auto-assign on join** enabled

You'll automatically receive the client role when linking **if you have at least one order** in the Shopify store.

---

## Unlinking Your Account

If you need to unlink your account:

- Use the `/unlink` command
- Or contact a server staff member who can use `/unlink-customer`

---

## Troubleshooting

### "Link expired"

The verification link is only valid for 15 minutes. Run `/link` again to generate a new link.

### "Already linked to another account"

If you previously linked a different Shopify account, you'll need to:

1. Run `/unlink` first
2. Then run `/link` again with the new account

### "Unable to find customer account"

Make sure you:

- Have an account on the store's Shopify
- Are using the correct email address
- Have made at least one order (some stores require this)

### "Verification failed"

Try these steps:

1. Make sure you're logged into the correct Shopify account
2. Clear your browser cookies and try again
3. Contact a staff member for assistance

---

## For Server Administrators

### Setting Up Account Linking

1. Configure your web server URL in the bot's `.env` file
2. Set up the client role in `/settings`
3. Enable auto-assign if desired
4. Configure join notifications (optional)

### Monitoring Links

All linking activity is logged if you have configured:

- Shopify Commands log channel
- Member Join/Leave log channel

---

## Tips

- Keep your verification link private and secure
- Complete the linking process promptly (within 15 minutes)
- If you change your email on Shopify, you may need to relink
- Contact staff if you encounter any issues
