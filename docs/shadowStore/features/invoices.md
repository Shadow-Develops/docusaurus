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
   - **Customer**: Select or enter customer information
   - **Due Date**: Set payment deadline
   - **Line Items**: Add products/services with descriptions and prices
   - **Notes**: Optional invoice notes or terms
4. Review totals:
   - Subtotal (auto-calculated)
   - Tax (if applicable)
   - Total amount
5. Click "Create Invoice"

### Invoice Components

**Customer Information:**

- Name
- Email address
- User ID (if registered)
- Billing address (optional)

**Line Items:**

- Item description
- Quantity
- Unit price
- Line total (auto-calculated)

**Totals:**

- Subtotal (sum of line items)
- Tax amount (if configured)
- Grand total

## Managing Invoices

### Viewing Invoices

**Admin View:**

- Access all invoices at `/admin/invoices`
- Filter by status (all, pending, paid, overdue, cancelled)
- Search by customer name, email, or invoice ID
- Sort by date, amount, or status

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

## Permissions

To manage invoices, users must have:

- `owner` - Full store owner access
- `manageInvoices` - Invoice management permissions

Customers can:

- View their own invoices
- Make payments on their invoices
- Access payment history
