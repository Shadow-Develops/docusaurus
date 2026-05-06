---
sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# Subscriptions

Subscription products provide recurring billing with automatic renewals. Customers pay on a configured interval and retain access as long as the subscription is active.

## How It Works

1. A customer purchases a subscription product
2. A subscription record is created with a renewal due date
3. When payment is due, the customer is notified and an invoice is generated
4. The customer pays the renewal invoice; the due date advances by one period
5. If the subscription goes overdue, access (and any associated license key) is suspended

## Subscription Statuses

| Status        | Description                                        |
| ------------- | -------------------------------------------------- |
| **Active**    | Subscription is current and in good standing       |
| **Paused**    | Subscription is temporarily suspended by the admin |
| **Cancelled** | Subscription has been cancelled; access ends       |

## Admin Management

Navigate to **Admin Panel > Subscriptions** to view and manage all subscriptions.

The list shows customer name, product, price, status, next due date, and actions.

### Pausing a Subscription

Pausing suspends billing and access temporarily without cancelling. The customer retains their subscription record and can be resumed later.

1. Open the subscription detail page
2. Click **Pause Subscription**
3. The subscription status changes to **Paused**
4. The customer receives a `SUBSCRIPTION_PAUSED` notification

### Resuming a Subscription

1. Open the paused subscription detail page
2. Click **Resume Subscription**
3. Status returns to **Active**
4. The customer receives a `SUBSCRIPTION_UPDATED` notification

### Cancelling a Subscription

1. Open the subscription detail page
2. Click **Cancel Subscription**
3. Confirm cancellation
4. Status changes to **Cancelled**
5. The customer receives a `SUBSCRIPTION_CANCELLED` notification

### Plan Changes

Admins can change the plan (price or renewal period) on an active subscription:

1. Open the subscription detail page
2. Edit the plan details
3. Save
4. The customer receives a `SUBSCRIPTION_PLAN_CHANGED` notification

## Automated Billing

Shadow Store runs a daily scheduled job at **00:00 UTC** to:

- Send payment due notifications **7 days** before the due date
  - Invoice is created alongside the notification
- Send payment due notifications **2 days** before the due date
- Check for subscriptions that missed their due date on startup (catch-up on server restart)

### License Key Suspension

If a subscription-linked product uses the License System, the license key is automatically **suspended** when the subscription is more than **3 days overdue**. The key is re-enabled when the renewal invoice is paid.

## Notifications

| Event                       | Channels                   |
| --------------------------- | -------------------------- |
| `SUBSCRIPTION_CREATED`      | Email, Discord DM, Webhook |
| `SUBSCRIPTION_UPDATED`      | Email, Discord DM, Webhook |
| `SUBSCRIPTION_CANCELLED`    | Email, Discord DM, Webhook |
| `SUBSCRIPTION_PAYMENT_DUE`  | Email, Discord DM, Webhook |
| `SUBSCRIPTION_PLAN_CHANGED` | Email, Discord DM, Webhook |
| `SUBSCRIPTION_RENEWED`      | Email, Discord DM, Webhook |
| `SUBSCRIPTION_PAUSED`       | Email, Discord DM, Webhook |

## Subscription Analytics

Subscription-specific metrics are available at **Admin Panel > Analytics > Subscriptions**:

- **MRR** (Monthly Recurring Revenue)
- **ARR** (Annual Recurring Revenue)
- **Active / Paused / Cancelled** count breakdown
- **Monthly Churn Rate**
- New subscribers and cancellations (last 30 days)
- Average subscription lifetime in days
- Recent subscriptions table

See [Analytics](/shadowStore/features/analytics) for more details.

## Permissions

| Permission             | Access                                 |
| ---------------------- | -------------------------------------- |
| `owner`                | Full access                            |
| `MANAGE_SUBSCRIPTIONS` | View and manage customer subscriptions |
