---
sidebar_position: 5
pagination_next: null
pagination_prev: null
---

# Cart & Checkout

Shadow Store combines cart pricing, discounts, store credit, shipping, and payment processing into one checkout flow. Customers must be signed in before they can check out.

## Cart Totals

The cart displays a live estimate containing the applicable parts of an order:

1. Product prices and quantities
2. Automatic sales
3. A discount code, gift card, or one-time referral discount
4. Tax or fees configured in store settings
5. Store credit
6. Shipping for shipped products

The browser preview helps the customer understand the total, but it is not trusted as the final charge. Shadow Store reloads product data and calculates the authoritative total on the server when checkout begins.

## Discounts and Gift Cards

Customers enter discount codes and existing gift-card codes in the same cart field. Shadow Store validates the code for the signed-in customer and current cart before displaying the discount.

The code is checked again when quantities or customer-selected prices change and once more during checkout. Expired codes, exhausted gift cards, exceeded usage limits, and codes that no longer apply are rejected rather than sent to the payment provider.

See [Discounts & Sales](/shadowStore/features/discounts) for discount configuration and restriction options.

## Store Credit

Signed-in customers with a balance can choose to apply store credit to an order.

- Store credit can cover eligible products and their tax or fees.
- It does not cover shipping or the purchase of new gift cards.
- Shadow Store applies no more than the customer's available balance or the eligible order total.
- The balance is reserved while an external checkout is active and consumed only after payment is confirmed.

If the checkout is cancelled or expires, the reservation is released.

## Shipping

When the cart contains shipped products, checkout requires a complete shipping address and a selected shipping rate. Rates use the combined configured weight and quantity of shipped products.

Shadow Store validates the address and recalculates the available rates on the server. The submitted rate must still be available and match a current provider rate before checkout can continue. A total or rate sent by the browser cannot override the verified shipping charge.

## Available Payment Methods

The PayPal or Stripe checkout button appears only when that processor is enabled and both of its API credentials are configured. Configure processors in **Admin Panel > Settings > Payment Details** and complete the provider webhook setup in [Configuration](/shadowStore/install/config#payment-processors).

If discounts and store credit reduce the payable total to zero, Shadow Store completes the order internally without opening PayPal or Stripe.

## Payment Attempts and Reservations

Before redirecting to a payment provider, Shadow Store creates a persistent payment attempt and reserves limited resources used by the order:

- Product inventory
- Applied gift-card value
- Applied store credit

The checkout buttons are temporarily disabled after submission to prevent accidental double-clicks. Repeated requests for the same active checkout reuse its provider session instead of creating a second charge.

An unfinished payment attempt remains reserved for up to four hours. A background task checks payment attempts every five minutes, confirms completed provider payments, retries recoverable fulfillment, and releases expired reservations.

## Payment Confirmation

Shadow Store fulfills an order only after it verifies all of the following on the server:

- The provider checkout belongs to the stored payment attempt
- The payment is complete
- The amount and currency match the stored checkout total
- The payment has not already produced an order

Order creation is idempotent. A provider redirect, a webhook delivery, or a recovery job can confirm the same payment without creating duplicate receipts, consuming inventory twice, or applying the same balance twice.

### Successful payment

For an immediately confirmed payment, the customer is sent to the receipt after Shadow Store creates the order. The cart is cleared for normal cart purchases.

### Pending Stripe payment

Some Stripe payment methods complete asynchronously. If the Checkout Session is complete but payment is still pending, the customer returns to the cart with a processing notice. The order appears only after Stripe confirms that payment succeeded.

### Cancelled, expired, or failed payment

When a cart checkout is cancelled or the provider reports that it expired or failed, Shadow Store releases its reservations. Cart items are restored when the stored cart is empty, allowing the customer to try again.

If payment already completed before the customer used a cancel link, Shadow Store verifies the provider state and sends the customer to the existing receipt instead of cancelling the order.

## Why Payment Webhooks Are Required

The normal PayPal and Stripe return URLs verify payments when customers come back to the site, but customers can close the provider page or lose their connection before returning. Provider webhooks let Shadow Store confirm successful asynchronous payments and release failed or expired attempts without depending on the customer's browser.

The webhook handlers verify requests using `PAYPAL_WEBHOOK_ID` or `STRIPE_WEBHOOK_SECRET`. They then use the same idempotent fulfillment process as the return URLs. Do not confuse these inbound provider endpoints with the configurable outbound webhooks in [Webhooks](/shadowStore/features/webhooks).
