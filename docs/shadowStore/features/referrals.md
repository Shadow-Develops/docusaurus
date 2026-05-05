---
sidebar_position: 8
pagination_next: null
pagination_prev: null
---

# Referrals

The Referral system lets customers share a unique link to your store and earn rewards when others sign up or make a purchase. Admins can also create partner codes for affiliates and marketing channels.

## How It Works

1. A customer visits `/referral` and generates their unique referral code
2. They share their link: `https://yourstore.com?ref=CODE`
3. When someone clicks the link, their browser is cookied with the referral attribution
4. If the referred person signs up or makes a purchase, the referrer earns a reward

Referral attribution is tracked via a browser cookie. The cookie duration is configurable (default: 30 days).

## User Code Modes

The admin controls how customer codes work:

| Mode                  | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| **Auto**              | Code is generated and active immediately                        |
| **Approval Required** | Code is created in a `pending` state until an admin approves it |
| **Disabled**          | Customers cannot generate codes; only partner codes are active  |

When in Approval mode, customers can see the status of their request on `/referral`. If rejected, the rejection reason is shown and they can submit a new request after the admin clears the rejection.

## Referrer Rewards

Rewards are given to the person who shared the link. Multiple reward types can be enabled simultaneously.

### Loyalty Points

A fixed number of loyalty points awarded per qualifying referral.

### Flat Store Credit

A fixed dollar amount added to the referrer's store credit balance per qualifying referral.

### Percentage of Sale Credit

A percentage of the referred user's order total added as store credit.

### Reward Trigger

Choose when rewards are issued:

- **First Purchase Only**: reward fires once when the referred user completes their first order
- **Every Purchase**: reward fires on every qualifying order from the referred user

### Minimum Order Value

Set a minimum order total that must be met before a referral reward is triggered. Set to `$0` to disable the minimum.

## Referee Discount

Optionally give the referred user a discount on their first purchase. A one-time discount code is automatically generated at signup.

The discount value accepts both percentage and flat formats:

- `10%`: 10% off
- `5` or `5.00`: $5 off (or equivalent in store currency)

## Customer Referral Page

Customers manage their referral at `/referral` (login required). The page shows:

- **Referral link** with a one-click copy button
- **Stats**: total referred signups, purchases, store credit earned, loyalty points earned
- **Reward description**: what the customer earns and when
- **Referral history**: a table of events (signup or purchase) with the date and reward triggered

## Partner Codes

Partner codes are admin-created codes intended for affiliates, influencers, or marketing channels. They function the same as user codes for attribution purposes but are managed entirely by admins.

### Creating a Partner Code

1. Navigate to **Admin Panel > Referral > Codes**
2. Click **Create Partner Code**
3. Enter:
   - **Code**: the unique identifier (e.g., `YOUTUBE2024`)
   - **Label**: a friendly name for internal reference (optional)
   - **Linked User**: optionally link the code to a store account so the user receives rewards (optional)
4. Click **Create**

Partner codes can be activated, deactivated, linked to a user, or deleted from the admin panel.

## Admin Panel

Navigate to **Admin Panel > Referral** to manage the referral program.

### Analytics Tab

Overview of overall referral performance:

- Total clicks, signups, orders, revenue, and rewards issued
- Conversion rates: Click → Signup, Signup → Purchase, Click → Purchase
- Top performing codes table (code, type, clicks, signups, orders, revenue, rewards)

### Codes Tab

Manage all referral codes:

**Partner Codes**: create new codes, link/unlink users, activate/deactivate, delete

**User Codes**: view all customer-generated codes with their stats; activate, deactivate, or delete individual codes

**Pending Codes** (visible in Approval mode only): approve or reject pending code requests

**Rejected Codes**: view rejected requests; remove a rejection to allow the user to request again

### Events Tab

A chronological log of all referral activity showing the date, code used, event type (Signup or Purchase), referred user, order total, and any reward triggered.

### Settings Tab

Configure the referral program:

| Setting                      | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| **Enabled**                  | Toggle the entire referral program on or off     |
| **Reward Trigger**           | First purchase only, or every purchase           |
| **User Code Mode**           | Auto, Approval Required, or Disabled             |
| **Minimum Order Value**      | Minimum order total to trigger rewards           |
| **Cookie Duration**          | Days the referral cookie persists (default: 30)  |
| **Loyalty Points Reward**    | Enable and set points amount per referral        |
| **Flat Credit Reward**       | Enable and set dollar amount per referral        |
| **Percentage Credit Reward** | Enable and set percentage per referral           |
| **Referee Discount**         | Enable and set discount value for referred users |

## Permissions

| Permission         | Access                                                                                   |
| ------------------ | ---------------------------------------------------------------------------------------- |
| `owner`            | Full access                                                                              |
| `MANAGE_REFERRAL`  | View analytics and events, manage all codes, approve/reject requests, configure settings |
