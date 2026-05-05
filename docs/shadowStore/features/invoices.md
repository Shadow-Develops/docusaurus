---
sidebar_position: 4
pagination_next: null
pagination_prev: null
---

# Invoices

The Invoice system provides comprehensive invoice management for custom billing, service contracts, and payment tracking. Create professional invoices with payment processing, automated reminders, and complete transaction history.

## Invoice Statuses

Invoices can have the following statuses:

- **Pending**: Invoice created, awaiting customer action
- **Due**: Payment is due (approaching or at due date)
- **Paid**: Invoice has been fully paid
- **Overdue**: Payment is past due date
- **Cancelled**: Invoice has been cancelled

## Creating an Invoice

1. Navigate to **Admin Panel > Invoices**
2. Click "Create Invoice"
3. Fill in invoice details:
   - **Customer** _(optional)_: Enter a user ID or email. Leave blank to create a claimable invoice (see below).
   - **Company** _(optional)_: Client's business name
   - **Address** _(optional)_: Billing address
   - **Phone** _(optional)_: Client phone number
   - **Tax ID / VAT Number** _(optional)_: For tax-exempt or international clients
   - **Due Date** _(optional)_: Set payment deadline
   - **Memo** _(optional)_: Invoice notes or message visible to the client
   - **Invoice ToS** _(optional)_: Terms of service shown on the invoice
   - **Internal Notes** _(optional)_: Admin-only notes, not visible to the client
4. Add **Line Items** (right panel):
   - Each item requires a **Name**, **Price**, and **Description**
   - Click "Add Another Item" to add more; click "Remove Item" to delete extras
5. Click "Create Invoice"

:::tip
Quotes can be converted directly into invoices. See the [Quotes](./quotes) documentation for details.
:::

## Claimable Invoices

An invoice can be created without assigning it to a specific customer. This is useful when you want to send a payment link to someone who does not yet have an account on your store.

**How it works:**

1. When creating an invoice, leave the **Customer** field blank
2. A unique claim token is generated and embedded in the invoice link
3. Share the invoice link (`/invoice/[id]`) with the client
4. When the client opens the link and signs in (or creates an account), the invoice is automatically claimed and assigned to their account
5. Once claimed, the token is consumed and the invoice behaves like any other assigned invoice

:::info
Claimed invoices cannot be claimed a second time. Once assigned to a user, the invoice link requires that user to be logged in.
:::

### Invoice Components

**Customer Information:**

- User ID or email (if assigned to an account)
- Company name (optional)
- Billing address (optional)
- Phone number (optional)
- Tax ID / VAT number (optional)

**Line Items:**

Each line item has:

- Name
- Price
- Description

**Invoice Details:**

- Memo (visible to client)
- Terms of Service (visible to client)
- Internal Notes (admin-only, not visible to client)
- Due Date

## Managing Invoices

### Viewing Invoices

**Admin View:**

- Access all invoices at `/admin/invoices`
- Filter by status: **All**, **Due**, **Pending**, **Paid**, **Cancelled**
- Search by invoice ID, due date, user ID, or user name
- Sort by: **ID**, **User**, **Status**, **Due Date**, or **Creation Date**
- Table columns: ID, User, Status, Actions (View/Edit), Due Date, Creation Date

**Customer View:**

- Customers can view their invoices in their account dashboard
- Access specific invoice at `/invoice/[invoice-id]`

### Editing Invoices

1. Navigate to `/admin/invoices/edit/[invoice-id]`
2. Modify invoice details:
   - Update line items
   - Change due date
   - Update customer information
   - Modify notes
3. Save changes

:::warning
Editing a paid invoice is not recommended. Consider creating a new invoice or credit note instead.
:::

### Deleting Invoices

Invoices can be deleted from the admin panel. This action:

- Permanently removes the invoice
- Deletes transaction records
- Cannot be undone

## Payment Processing

### Customer Payment

When a customer receives an invoice:

1. They receive an email notification with invoice link
2. They view the invoice at `/invoice/[invoice-id]`
3. They click "Pay Invoice"
4. Payment is processed via configured payment methods:
   - Stripe (credit/debit cards)
   - PayPal
   - Store credit
5. Invoice status automatically updates to "Paid"
6. Payment confirmation email sent

### Payment Methods

Invoices support all configured payment methods:

- **Stripe**: Card payments, digital wallets
- **PayPal**: PayPal account payments
- **Store Credit**: Internal balance deduction

### Transaction Records

All payments are tracked with:

- Transaction ID
- Payment method
- Amount paid
- Payment date
- Status

## Email Notifications

### Invoice Creation Email

Sent when an invoice is created:

- Invoice ID and total amount
- Due date
- Line items breakdown
- Payment link
- PDF-style invoice view

### Payment Confirmation Email

Sent when invoice is paid:

- Invoice ID
- Amount paid
- Payment method
- Transaction details
- Receipt/confirmation

## Automated Invoice Management

### Overdue Detection

The system automatically:

- Checks invoices daily (via cron job)
- Updates status to "overdue" when past due date
- Sends overdue notifications to customers
- Notifies admins of overdue invoices

## Invoice History

Track complete invoice lifecycle:

- Creation date and creator
- Status changes with timestamps
- Payment attempts
- Email notifications sent
- Manual updates and edits

Access history from the invoice detail page.

## Custom Client Details

When creating or editing an invoice, admins can attach optional details that appear on the invoice and PDF:

- **Company Name**: The client's business name
- **Billing Address**: Full multi-line address
- **Phone Number**: Client contact number
- **Tax ID / VAT Number**: For tax-exempt or international clients
- **Memo**: A message or note visible to the client on the invoice
- **Invoice ToS**: Terms of service displayed on the invoice
- **Internal Notes**: Admin-only notes not visible to the customer

These details are stored per-invoice and are independent of the customer's account profile, so they can be customized for each invoice.

## PDF Export

Any invoice can be exported as a professionally formatted PDF at `/invoice/[id]/pdf`.

The PDF includes:

- Business name and email (from your store settings)
- Client billing details (company, address, phone, tax ID)
- Itemized line items table with unit prices and totals
- Invoice status badge (Pending, Paid, Due, Cancelled)
- Memo and terms of service (if set)

Multi-currency symbols are correctly formatted across all supported currencies.

## Permissions

| Permission        | Access                                                           |
| ----------------- | ---------------------------------------------------------------- |
| `owner`           | Full access                                                      |
| `MANAGE_INVOICES` | Create and edit invoices, process payments, view invoice history |

Customers can view their own invoices, make payments, and access their payment history.
