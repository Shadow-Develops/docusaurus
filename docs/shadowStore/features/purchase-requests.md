---
sidebar_position: 12
pagination_next: null
pagination_prev: null
---

# Purchase Requests

Purchase Requests allow customers to submit a request before a purchase is fulfilled. This is useful for products that require manual review or approval before delivery: such as exclusive access, custom services, or role-restricted items.

## How It Works

1. A customer submits a purchase request for a product (with an optional message)
2. The request enters a **Pending** state and appears in the admin panel
3. An admin reviews the request and either approves or denies it
4. The customer is notified of the decision via email and Discord DM (if configured)

## Admin Interface

Navigate to **Admin Panel > Purchase Requests**.

The list displays all requests with:

- Request ID
- Customer username and user ID
- Product name
- Customer message
- Current status (color-coded badge)
- Actions

**Search**: Filter requests by ID, user ID, username, product name, or message content.

## Request Statuses

| Status        | Color  | Description                          |
| ------------- | ------ | ------------------------------------ |
| **Pending**   | Yellow | Awaiting admin review                |
| **Approved**  | Green  | Admin approved: customer can proceed |
| **Denied**    | Red    | Admin denied the request             |
| **Fulfilled** | Gray   | Purchase has been completed          |

## Approving a Request

1. Find the request in the list
2. Click **Approve**
3. The request status changes to **Approved**
4. The customer receives an `PURCHASE_REQUEST_APPROVED` notification (email + Discord DM)

## Denying a Request

1. Find the request in the list
2. Click **Deny**
3. Optionally enter a note explaining the reason
4. Click **Confirm**
5. The request status changes to **Denied**
6. The customer receives a `PURCHASE_REQUEST_DENIED` notification with the note (if provided)

## Notifications

| Event                       | Channels                   |
| --------------------------- | -------------------------- |
| `PURCHASE_REQUEST_APPROVED` | Email, Discord DM, Webhook |
| `PURCHASE_REQUEST_DENIED`   | Email, Discord DM, Webhook |

## Permissions

| Permission                 | Access                                    |
| -------------------------- | ----------------------------------------- |
| `owner`                    | Full access                               |
| `MANAGE_PURCHASE_REQUESTS` | View, approve, and deny purchase requests |
