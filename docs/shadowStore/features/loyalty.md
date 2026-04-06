---
sidebar_position: 9
pagination_next: null
pagination_prev: null
---

# Loyalty Program

The Loyalty Program rewards customers for purchases and other actions with points they can redeem for store credit. The program is fully configurable, earning rules, tiers, and redemption settings are all managed from the admin panel.

## How It Works

1. Customers earn points by completing actions (buying products, linking accounts, leaving reviews, etc.)
2. Points accumulate toward configurable tiers that unlock multipliers and perks
3. Customers redeem points for store credit at a configured conversion rate
4. Store credit is applied automatically at checkout

Customers manage their loyalty account at `/loyalty` (login required). The loyalty page is hidden if the program is disabled.

## Earning Points

All earning rules are configurable and can be enabled or disabled individually.

### Order Spend

Customers earn a set number of points for every dollar spent on an order.

_Example: 10 points per $1 spent_

### Subscription Renewal

Customers earn a fixed number of points each time a subscription renews.

### Account Created

A one-time bonus awarded when a customer creates an account.

### Account Linking

One-time bonuses for linking third-party accounts:

- Discord
- GitHub
- Google

Each platform can be configured with its own point value.

### Review Submitted

Points awarded when a customer submits a review that is approved by an admin.

## Tiers

Tiers are based on **lifetime points** (the total points ever earned, which never decreases). Customers advance automatically as they accumulate lifetime points.

Each tier is configurable with:

| Field                        | Description                                                                                                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Name**                     | Display name (e.g., Bronze, Silver, Gold)                                                                        |
| **Color**                    | Badge color shown on the loyalty page                                                                            |
| **Minimum Lifetime Points**  | Points threshold to reach this tier                                                                              |
| **Points Multiplier**        | Multiplier applied to all earned points (e.g., `1.5` = 50% more points)                                          |
| **Auto-Approve Redemptions** | If enabled, redemptions for customers in this tier are approved instantly regardless of the global approval mode |
| **Perks Text**               | Markdown description of tier benefits shown to the customer                                                      |

Customers in higher tiers earn more points per action due to the multiplier. The multiplier is applied at the time points are awarded.

## Redeeming Points

Points are redeemed for store credit. The conversion rate and minimum are set by the admin.

_Example: 100 points = $1 store credit, minimum 500 points to redeem_

### Auto-Approve Mode

The redemption is processed immediately. Points are deducted and store credit is added to the customer's account right away.

### Manual Approval Mode

Redemption requests are submitted and held for admin review. The customer can see their pending request on the loyalty page. Admins approve or reject from the admin panel.

If rejected, the admin can include a note explaining why. The customer sees the rejection reason on their loyalty page.

:::info
A tier's **Auto-Approve Redemptions** setting overrides the global approval mode. Customers in an auto-approve tier always get instant redemptions even when the global mode is set to manual.
:::

## Customer Loyalty Page

The `/loyalty` page shows customers everything about their loyalty account:

### Points Dashboard

- Current redeemable balance
- Lifetime points earned
- Current tier badge with color
- Progress bar toward the next tier (with points remaining shown)

### How to Earn (expandable)

- All active earning rules with their point values
- Redemption rate and minimum
- All tier names, multipliers, and perks descriptions

### Redemption

- **Auto-approve mode**: A "Redeem Now" button with a field to enter the number of points
- **Manual approval mode**: A request form showing the calculated store credit value; pending requests listed with status
- Redemption history with status (pending / approved / rejected) and rejection notes where applicable

### Points History

A table of all point transactions:

| Column  | Description                                        |
| ------- | -------------------------------------------------- |
| Date    | Timestamp (hover for full date/time)               |
| Reason  | What triggered the transaction (see reasons below) |
| Points  | Points earned (positive) or spent (negative)       |
| Balance | Running balance after the transaction              |

**Transaction reasons:** Order, Subscription Renewal, Account Created, Discord Linked, GitHub Linked, Google Linked, Review Submitted, Admin Adjustment, Redemption

## Admin Configuration

Configure the loyalty program at **Admin Panel > Settings > Loyalty**.

| Setting                                  | Description                                                 |
| ---------------------------------------- | ----------------------------------------------------------- |
| **Enabled**                              | Toggle the entire loyalty program on or off                 |
| **Order Spend Rule**                     | Points per dollar spent (enable/disable + amount)           |
| **Subscription Renewal Rule**            | Points per renewal (enable/disable + amount)                |
| **Account Created Bonus**                | One-time signup points (enable/disable + amount)            |
| **Discord / GitHub / Google Link Bonus** | One-time points per platform (enable/disable + amount each) |
| **Review Submitted Rule**                | Points per approved review (enable/disable + amount)        |
| **Points per Dollar (Redemption)**       | How many points equal $1 of store credit                    |
| **Minimum Redemption Points**            | Minimum points a customer must have before they can redeem  |
| **Approval Mode**                        | Auto or Manual                                              |
| **Tiers**                                | Add, edit, or remove tiers                                  |

## Permissions

| Permission       | Access                                       |
| ---------------- | -------------------------------------------- |
| `owner`          | Full access including configuration          |
| `manageSettings` | Configure loyalty program settings and tiers |

All logged-in customers can view and use the loyalty page with no special permissions required.
