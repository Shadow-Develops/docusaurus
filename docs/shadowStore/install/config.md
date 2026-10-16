---
sidebar_position: 4
---

# Configuration

You now have the server and files setup, so we can get to configuring the basics. So, we will go over every line of the `.env` file.\
Since we use keys for payment processors, login methods, and similar we want to store them safely within your `.env` file rather then the database.

## Basics

1. `LICENSE_KEY=`
   1. You get this from https://shadowdevs.com/license and should be a simple string. This your license from us to use Shadow Store.
2. `PORT=`
   1. By default its `5173`, but you can change it to any 4 character number.
3. `MONGO_URL=`
   1. The MongoDB URL for your database. If you do not add any password lock to your database and leave it as local only, you can use something like this: `mongodb://127.0.0.1:27017/shadowstore`
4. `ORIGIN=`
   1. Your full domain, include the `https://`. Ex: `https://shadowdevs.com`
5. `PUBLIC_DOMAIN=`
   1. Just your domain name for the website. Ex: `shadowdevs.com`

## Discord

6. `DISCORD_CLIENT_ID=`
   1. You can find this on the [Discord Developer Application](https://discord.com/developers/applications) > General Information. It would be the `Application ID`.
7. `DISCORD_CLIENT_SECRET=`
   1. You can find this on the [Discord Developer Application](https://discord.com/developers/applications) > OAuth2. It will be the `Client Secret`.
8. `BOT_TOKEN=`
   1. You can find this on the [Discord Developer Application](https://discord.com/developers/applications) > Bot. It is the `Token`.
9. `OWNERS=[""]`
   1. This must always be an array (`[""]`), and should contain the email for people you want to login with owner permissions.

## OAuth Login Methods

These are only required if you intend to enable the respective login method in **Admin Panel > Settings > Login Methods**.

### GitHub

10. `GITHUB_CLIENT_ID=`
    1. From your GitHub OAuth App > General > Client ID.
11. `GITHUB_CLIENT_SECRET=`
    1. From your GitHub OAuth App > Generate a new client secret.

> You can view the [GitHub Integration page](/shadowStore/integrations/login/github) to see how to setup this login method.

### Google

12. `GOOGLE_CLIENT_ID=`
    1. From your Google Cloud Console OAuth 2.0 Client > Client ID.
13. `GOOGLE_CLIENT_SECRET=`
    1. From your Google Cloud Console OAuth 2.0 Client > Client Secret.

> You can view the [Google Integration page](/shadowStore/integrations/login/google) to see how to setup this login method.

## Payment Processors

### PayPal

This required you to have a [PayPal Business Account](https://www.paypal.com/business/getting-started) to be able to use their API in the required ways by Shadow Store.

14. `PAYPAL_PUBLIC=`
    1. PayPal API Client ID
15. `PAYPAL_SECRET=`
    1. PayPal API Secret Key

<details>
  <summary>Instructions for getting PayPal API Keys</summary>

1. Head to the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/), select the environment you are configuring, and create or open your REST app.
   ![paypal-createApp](/img/docs/paypal-createApp.png)
2. Put in your app name and hit create app.
3. Grab the `Client ID` & `Secret 1` and paste them into the `.env` in their respective place.
   ![paypal-grabKey](/img/docs/paypal-grabKey.png)

> **Make sure to NOT share your PayPal Client ID or Secret with anyone! This would give them FULL access to your API, which could let them transfer funds and more.**

After saving the credentials in `.env`, progress to setting up your `PAYPAL_WEBHOOK_ID` before enabling PayPal as a payment processor.

</details>

16. `PAYPAL_WEBHOOK_ID=`
    1. The ID assigned to the PayPal webhook registered for your Shadow Store payment endpoint. This is not your Client ID and is not an individual webhook event ID.

<details>
  <summary>Instructions for setting up the PayPal Webhook</summary>

1. In the application you just created earlier, you will **scroll to the bottom of the app's page to access the webhook** settings for that app. Then hit **Add Webhook**.
   ![paypal-addWebhook](/img/docs/paypal-addWebhook.png)
2. Input your **Webhook URL** which should be: `https://yourdomain.com/api/webhooks/paypal`, where `yourdomain.com` is your `ORIGIN`.
   ![paypal-webhookURL](/img/docs/paypal-webhookURL.png)
3. Subscribe the webhook to exactly these events:
   - `CHECKOUT.ORDER.APPROVED` = Checkout > **Checkout order approved**
   - `CHECKOUT.ORDER.VOIDED` = Checkout > **Checkout order voided**
   - `PAYMENT.CAPTURE.COMPLETED` = Payments & Payouts > **Payment capture declined**
   - `PAYMENT.CAPTURE.DENIED` = Payments & Payouts > **Payment capture denied**
4. Copy the webhook's **Webhook ID** into `PAYPAL_WEBHOOK_ID`.
   ![paypal-webhookID](/img/docs/paypal-webhookID.png)

For additional provider details, see PayPal's official [webhook integration guide](https://developer.paypal.com/api/rest/webhooks/rest/).

:::warning[Environment must match]
Use webhook and API credentials from the same PayPal environment. Local development uses PayPal Sandbox, while a production deployment uses PayPal Live. The production webhook URL must be publicly reachable over HTTPS.
:::

After saving `PAYPAL_WEBHOOK_ID` in `.env`, restart Shadow Store. Then log in to the admin panel, open **Settings > Payment Details**, and enable PayPal. Any environment-variable change requires a restart.

</details>

### Stripe

You will need a [Stripe](https://stripe.com/) account if you wish to use this processor.

17. `STRIPE_PUBLIC=`
    1. Stripe API Publishable key
18. `STRIPE_SECRET=`
    1. Stripe API Secret Key

<details>
  <summary>Instructions for getting Stripe API Keys</summary>

1. Open the [Stripe Dashboard](https://dashboard.stripe.com/), hit **Developer** in the bottom left, then hit **API Keys**.
   ![stripe-1](/img/docs/stripe-1.png)
2. Click on **create a secret key**.
   ![stripe-2](/img/docs/stripe-2.png)
3. Click **Powering an integration you built** then **Create secret key**.
   ![stripe-3](/img/docs/stripe-3.png)
4. You will then input the app name (only matters for you) then will give you the secret key.
   Make sure to copy it before closing the modal, page, reloading, or anything as it will only display once.
5. You will also need to grab the `Publishable Key`, so ensure you create it if it isn't already created.
6. Once you have them both, head to your `.env` file and paste the keys into your respective slots.

> **Make sure to NOT share your Stripe Publishable or Secret key with anyone! This would give them FULL access to your API, which could let them transfer funds and more.**

After saving the API keys in `.env`, progress to setting up your `STRIPE_WEBHOOK_SECRET` before enabling Stripe as a payment processor.

</details>

19. `STRIPE_WEBHOOK_SECRET=`
    1. The endpoint signing secret beginning with `whsec_`. This is not your Stripe API secret key.

<details>
  <summary>Instructions for setting up the Stripe Webhook</summary>

1. Open the [Stripe Dashboard](https://dashboard.stripe.com/), hit **Developer** in the bottom left, then hit **Webhooks**.
   ![stripe-webhook-1](/img/docs/stripe-webhook-1.png)
2. Click **Add destination**
   ![stripe-webhook-2](/img/docs/stripe-webhook-2.png)
3. Select **Your account** for event destination scope, then **Snapshot** and **2020-08-27** for payload style, search for **checkout** in events and select `checkout.session.completed`, `checkout.session.expired`, `checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`.
   ![stripe-webhook-3](/img/docs/stripe-webhook-3.png)
4. Select **Webhook endpoint**
   ![stripe-webhook-4](/img/docs/stripe-webhook-4.png)
5. Type in the name you want (all matters to you) and input your **Endpoint URL** which should be: `https://yourdomain.com/api/webhooks/stripe`, where `yourdomain.com` is your `ORIGIN`.
   ![stripe-webhook-5](/img/docs/stripe-webhook-5.png)
6. You will be returned to webhooks page, **hit the 3 dots on the right for your webhook and hit edit**.
7. Reveal the endpoint signing secret and copy the complete `whsec_` value into `STRIPE_WEBHOOK_SECRET`.
   ![stripe-webhook-6](/img/docs/stripe-webhook-6.png)

:::warning[Mode must match]
Stripe creates different webhook signing secrets for test and live destinations. Use the signing secret from the destination that matches the API keys configured in Shadow Store. Live webhook endpoints must be publicly reachable over HTTPS.
:::

After saving the API keys in `.env`, restart Shadow Store. Then log in to the admin panel, open **Settings > Payment Details**, and enable Stripe. Any environment-variable change requires a restart.

</details>

## Emails

20. `SENDGRID_KEY=`
    1. Head to the [SendGrid API Keys](https://app.sendgrid.com/settings/api_keys) page, create an API key, and then copy the key.
    2. If using SendGrid, then you don't need to put anything into the SMTP options.
21. `SMTP_HOST=`
    1. The host address for your SMTP server.
    2. Set to `null` if using Gmail SMTP.
22. `SMTP_PORT=`
    1. The port for your SMTP server.
    2. Set to `null` if using Gmail SMTP.
23. `SMTP_USER=`
    1. The email user for your SMTP server. Ex: `support@example.com`
24. `SMTP_PASS=`
    1. The password or key for your SMTP server.
25. `PUBLIC_TURNSTILE_SITE_KEY=`
    1. Your Cloudflare Turnstile **Site Key** (public). Required if you want to use Turnstile CAPTCHA on any form. Get it from the [Cloudflare Turnstile dashboard](https://dash.cloudflare.com/?to=/:account/turnstile).
26. `TURNSTILE_SECRET_KEY=`
    1. Your Cloudflare Turnstile **Secret Key**. Required server-side to verify CAPTCHA responses. Found alongside the site key in the Turnstile dashboard.

## License System

27. `LICENSE_SYSTEM_KEY=`
    1.  Use the [license key from our site](https://shadowdevs.com/license) that is given once you purchase the [Internal License System](https://shadowdevs.com/store/shadowstore-licensesystem) or [External License System](https://shadowdevs.com/store/licensesystem).

## CDN Manager

These values connect Shadow Store to a [CDN Manager](https://shadowdevs.com/store/cdnmanager) installation. Both values are server-only secrets and must not be exposed in browser code.

28. `CDN_MANAGER_ORIGIN=`
    1. The public origin of the CDN Manager installation, including `https://` and without `/api/v1`. Example: `https://cdn.example.com`
29. `CDN_MANAGER_API_KEY=`
    1. The complete CDN Manager remote API key. The key requires `assets.read`; read/write mode also requires `assets.upload` and `folders.create`.

The key's allowed root must contain the **Base root** configured in **Admin Panel > Integrations > CDN Manager**. See the [Shadow Store CDN Manager integration guide](/shadowStore/addons/cdn-manager) for setup and the [CDN Manager API overview](/cdnManager/api/overview) for key creation and permissions.

## Advanced

These settings should remain the same way as seen below / provided in the download, unless you know what you are doing.

30. `BODY_SIZE_LIMIT=5368709120`
    1.  This increases the base SvelteKit body size limit to 10gbs.
31. `HOST=localhost`
    1.  This modifies how SvelteKit interacts with itself.
32. `PRE_ORDER_CHECK_INTERVAL=60`
    1.  How often (in minutes) Shadow Store checks for pre-orders that are ready to be released. Defaults to `60` (once per hour). Decrease for more frequent checks; increase to reduce background load.
    1.  The system checks for releases half the allotted time ahead of each check so releases don't sit past their release time to long.
        1. EX: With the default of 60 minutes, the system will check for any releases 30 minutes in the future and release those on that run.
