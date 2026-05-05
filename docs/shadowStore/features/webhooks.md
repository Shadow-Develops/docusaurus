---
sidebar_position: 11
pagination_next: null
pagination_prev: null
---

# Webhooks

Webhooks let you receive real-time HTTP POST notifications when events happen in your Shadow Store. Use them to integrate with external services, trigger automations, or build custom dashboards.

## Accessing Webhooks

Navigate to **Admin Panel > Webhooks**. Requires the `MANAGE_WEBHOOKS` or `owner` permission.

## Creating a Webhook

1. Click **Create Webhook**
2. Enter the **URL** to receive the webhook POST
3. Optionally enter a **Signing Secret** for HMAC signature verification
4. Select the **events** to subscribe to (see below)
5. Click **Create**

Each webhook can subscribe to any combination of events. Use the **Select All** / **Clear** buttons per category to quickly configure subscriptions.

## Webhook Events

All 39 events are available, organized into 15 categories:

| Category              | Events                                                                                                                                                                           |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Checkout**          | `CHECKOUT`                                                                                                                                                                       |
| **Invoices**          | `INVOICE_GENERATED`, `INVOICE_PAID`, `INVOICE_UPDATED`, `INVOICE_CANCELLED`, `INVOICE_DUE`                                                                                       |
| **Quotes**            | `QUOTE_CREATED`, `QUOTE_UPDATED`, `QUOTE_CANCELLED`, `QUOTE_ACCEPTED`                                                                                                            |
| **Subscriptions**     | `SUBSCRIPTION_CREATED`, `SUBSCRIPTION_UPDATED`, `SUBSCRIPTION_CANCELLED`, `SUBSCRIPTION_PAYMENT_DUE`, `SUBSCRIPTION_PLAN_CHANGED`, `SUBSCRIPTION_RENEWED`, `SUBSCRIPTION_PAUSED` |
| **Licenses**          | `LICENSE_GENERATED`, `LICENSE_DISABLED`, `LICENSE_REVOKED`                                                                                                                       |
| **Releases**          | `RELEASE`                                                                                                                                                                        |
| **Purchase Requests** | `PURCHASE_REQUEST_APPROVED`, `PURCHASE_REQUEST_DENIED`                                                                                                                           |
| **Users / Accounts**  | `ACCOUNT_CREATED`, `ACCOUNT_BANNED`, `USER_UNBANNED`, `USER_DISABLED`, `USER_ENABLED`, `USER_DELETED`, `USER_TRANSFERRED`                                                        |
| **Products**          | `PRODUCT_CREATED`, `PRODUCT_UPDATED`, `PRODUCT_DELETED`, `STOCK_LOW`, `PREORDER_RELEASED`                                                                                        |
| **Reviews**           | `REVIEW_SUBMITTED`, `REVIEW_APPROVED`, `REVIEW_REJECTED`                                                                                                                         |
| **Loyalty**           | `LOYALTY_POINTS_AWARDED`, `LOYALTY_POINTS_REDEEMED`                                                                                                                              |
| **Referrals**         | `REFERRAL_SIGNUP_TRACKED`, `REFERRAL_REWARD_ISSUED`                                                                                                                              |
| **Store Credit**      | `STORE_CREDIT_ADDED`, `STORE_CREDIT_USED`                                                                                                                                        |
| **Forms**             | `FORM_SUBMISSION_RECEIVED`, `FORM_SUBMISSION_RESOLVED`                                                                                                                           |
| **Staff**             | `STAFF_MEMBER_ADDED`, `STAFF_MEMBER_REMOVED`, `STAFF_ROLE_CHANGED`                                                                                                               |

## Payload Format

All webhook payloads are JSON with a consistent envelope:

```json
{
  "event": "CHECKOUT",
  "timestamp": "2024-11-15T14:32:00.000Z",
  "data": { ... }
}
```

The `data` object contains event-specific information relevant to the triggered event.

Test deliveries include an additional `"test": true` field.

## Signature Verification

If you set a signing secret, every request includes an `X-ShadowStore-Signature` header containing an HMAC-SHA256 signature of the raw request body:

```
X-ShadowStore-Signature: sha256=<hex-digest>
```

**Verification example (Node.js):**

```js
import crypto from 'crypto';

function verifyWebhook(rawBody, signatureHeader, secret) {
	const expected =
		'sha256=' +
		crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
	return crypto.timingSafeEqual(
		Buffer.from(signatureHeader),
		Buffer.from(expected),
	);
}
```

Always verify the signature before processing webhook data.

## Testing Webhooks

Use the **Test** button on any webhook to send a sample payload with `"test": true`. This lets you verify your endpoint is reachable and handling payloads correctly without triggering real events.

## Delivery Behavior

- Webhooks are **fire-and-forget**: Shadow Store sends the request and does not retry on failure
- The **last HTTP status code** received is recorded per webhook (visible in the webhook list)
- Each webhook has an **Active / Inactive** toggle. Inactive webhooks receive no deliveries

## Managing Webhooks

- **Edit**: update the URL, signing secret, or subscribed events
- **Toggle**: activate or deactivate without deleting
- **Delete**: permanently remove the webhook

## Permissions

| Permission        | Access                            |
| ----------------- | --------------------------------- |
| `owner`           | Full access                       |
| `MANAGE_WEBHOOKS` | Create, edit, and delete webhooks |
