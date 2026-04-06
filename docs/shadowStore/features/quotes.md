---
sidebar_position: 7
pagination_next: null
pagination_prev: null
---

# Quotes

The Quotes system lets you send custom price quotes to customers. Customers can review the quote, accept it (which automatically creates an invoice), or suggest changes, all without any back-and-forth outside your store.

## Quote Statuses

| Status               | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| `pending`            | Quote sent and awaiting customer action                         |
| `revision_requested` | Customer has suggested changes; awaiting admin review           |
| `accepted`           | Customer accepted the quote; invoice has been created           |
| `expired`            | The expiration date has passed; quote can no longer be accepted |
| `cancelled`          | Quote was cancelled by an admin                                 |

## Creating a Quote

1. Navigate to **Admin Panel > Quotes**
2. Click **Create Quote**
3. Fill in the quote details:
   - **Customer**: search by email or user ID
   - **Expiration Date**: after this date the quote expires automatically
   - **Line Items**: add one or more items with name, price, and optional description
   - **Memo**: optional message to the customer
   - **Terms of Service**: optional terms the customer should review before accepting
4. Optionally add **Client Details** (stored on the quote, not the customer profile):
   - Company name
   - Billing address
   - Phone number
   - Tax ID / VAT number
5. Click **Create Quote**

The customer will receive an email notification with a link to view their quote.

## Managing Quotes

Navigate to **Admin Panel > Quotes** to see all quotes. The list can be filtered by status and searched by quote ID, customer name, or expiration date.

### Admin Actions

From the quote detail page, admins can:

- **Edit**: update line items, expiration date, client details, memo, or terms
- **Cancel**: set the quote to `cancelled`; customer is notified
- **Convert to Invoice**: manually create an invoice from the quote without requiring customer acceptance (requires `manageInvoices` permission)

## Revision Requests

When a customer suggests changes, the quote moves to `revision_requested`. Admins are notified and can review the suggested items.

**Approve Revision:**

- The quote items are updated with the customer's suggested changes
- Quote status returns to `pending`
- Customer is notified the revision was accepted and can now review the updated quote

**Reject Revision:**

- Quote items remain unchanged
- Quote status returns to `pending`
- Customer is notified the revision was declined

## Customer Experience

Customers view their quote at `/quote/[id]`. Only the quote owner (or staff with `manageQuotes`) can access the page.

The quote page displays:

- Quote ID, creation date, and expiration date
- Status badge
- Memo and terms of service
- Client details (company, address, phone, tax ID)
- Itemized line items with totals

### Customer Actions (pending quotes only)

**Accept Quote:**

- Instantly converts the quote to an invoice
- Customer receives an email and Discord DM (if configured) with a link to the new invoice
- Quote status changes to `accepted`

**Suggest Changes:**

- Customer can modify item names, prices, and descriptions, or add/remove items
- An optional reason for the changes can be provided
- Quote moves to `revision_requested` until admin reviews

:::info
Expired or cancelled quotes cannot be accepted or modified by the customer.
:::

## Notifications

All quote status changes trigger notifications to the customer:

- Email notification (if email is configured)
- Discord DM (if Discord integration is enabled)

## Converting a Quote to an Invoice

Quotes can become invoices in two ways:

1. **Customer accepts**: automatic conversion when the customer clicks Accept
2. **Admin converts**: manual conversion from the admin quote detail page

The resulting invoice inherits the quote's line items, client details, memo, and terms.

## Permissions

| Permission                        | Access                                                                 |
| --------------------------------- | ---------------------------------------------------------------------- |
| `owner`                           | Full access                                                            |
| `manageQuotes`                    | Create, edit, cancel quotes; approve/reject revisions; view all quotes |
| `manageQuotes` + `manageInvoices` | All of the above, plus convert quotes to invoices                      |

Customers can view and act on quotes they own without any special permissions.
