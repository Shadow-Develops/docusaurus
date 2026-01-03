---
sidebar_position: 5
---

# Shopify Application Setup

This guide will walk you through creating a custom app in your Shopify store's admin panel and obtaining your API credentials for Shopify Bot.

:::warning[Important]
Never share your Shopify API credentials with anyone! They provide access to your store data and must be kept secure.
:::

Before we being, navigate to your Shopify admin at https://admin.shopify.com and make sure the correct store is selected.

## Enable / Access Custom App Development

Before you can create a custom app, you need to enable custom app development in your store:

1. In your store admin, click on **"Settings"** in the bottom left corner
2. Click on **"Apps"**
3. Click **"Develop apps"**
4. If this is your first time, you'll see a prompt to **"Allow custom app development"**, allow it

![Develop Apps](/img/docs/shopify-develop-apps.png)

## Create a Custom App

Now you'll create a custom app to get your API credentials:

1. Click **"Build apps in Dev Dashboard"** button
2. Click **"Create an app"** button
3. Enter your app name (e.g., "Shopify Bot") in "Start from Dev Dashboard" section
4. Now we will configure the release:

### Step 1: Application URLs & API Version

1. The **"App URL"** should be the base for your app's web server, ie: `https://yourdomain.com`. (Set in your `.env`)
2. In **"Redirects URLs"** put: `https://yourdomain.com/callback`
3. Set the **"Webhooks API Version"** to `2025-10` or later

### Step 2: Access Scopes

1. In the Access section, under Scopes you will paste:

```bash
read_customers,write_customers,read_discounts,write_discounts,read_legal_policies,read_orders,write_orders,read_products,write_products,read_reports
```

<details>
  <summary>Required Scopes Details</summary>

**Products:**

- `read_products` - Read products, variants, and collections
- `write_products` - Modify products, variants, and collections

**Orders:**

- `read_orders` - Read orders, transactions, and fulfillments
- `write_orders` - Modify orders, transactions, and fulfillments

**Customers:**

- `read_customers` - Read customer data
- `write_customers` - Modify customer data

**Discounts:**

- `read_discounts` - Read discount information
- `write_discounts` - Create and modify discounts

**Legal & Reporting:**

- `read_legal_policies` - Read store legal policies
- `read_reports` - Read analytics and reports data

</details>

2. Once you've done that, you can click **"Release"**

![Create Application](/img/docs/shopify-create-app.png)

## Installing the App

1. Head to the **"Home"** tab
2. Click **"Install app"** in the top right
3. Click **"Install"**

:::info[Update Notice]
If you ever change your domain or we add more scopes, then you will have to install the app into your store again.
:::

## API Credentials

1. Navigate to the **"Settings"** tab
2. At the top you will see "Credentials"
3. **Copy: Client ID** and save it in your `.env` as `SHOPIFY_CLIENT_ID`
4. **Copy: Secret** and save it in your `.env` as `SHOPIFY_CLIENT_SECRET`

:::danger[Token Security]
Make sure to copy and save it securely, and NEVER share this token! It will give people access to your store/customer data.
:::

![API Credentials](/img/docs/shopify-api-credentials.png)

## Setting Up Webhooks (Optional)

Webhooks allow Shopify to notify your bot when customer updates occur. This can help with account linking if an email is changed.\
_This is all done on your Shopify admin page, not the dev dashboard._

1. Navigate to **"Notification"**
2. Click **"Webhooks"**
   ![Access Webhooks](/img/docs/shopify-access-webhook.png)
3. Click **"Create webhook"**
4. Set the Event to **"Customer update"** and Format to **"JSON"**
5. Set the URL to `https://yourdomain.com/webhook/customers/update`
6. Webhook API Version should be `2026-01 (Latest)` or later (Latest is normally best)
   ![Create Webhooks](/img/docs/shopify-create-webhook.png)
7. You should now see a **"Your webhooks will be signed with"** followed by a long string of text, copy that and set it as your `SHOPIFY_WEBHOOK_SECRET` in your `.env`
   ![Webhook Secret](/img/docs/shopify-webhook-secret.png)

## Troubleshooting

### "API key is invalid"

- Double-check that you copied the API key correctly
- Ensure there are no extra spaces or characters

### "Permission denied" errors

- Check that you've granted the necessary API scopes
- You may need to add additional scopes and reinstall the app

### Webhooks not working

- Verify your webhook URL is accessible from the internet
- Check that your SSL certificate is valid
- Ensure the webhook secret matches in both Shopify and your `.env` file
