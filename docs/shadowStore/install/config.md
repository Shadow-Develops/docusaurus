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
   1. This must always be an array (`[""]`), and should contain the Discord User IDs for people you want to login with owner permissions.

## Payment Processors

### PayPal

This required you to have a [PayPal Business Account](https://www.paypal.com/business/getting-started) to be able to use their API in the required ways by Shadow Store.

10. `PAYPAL_PUBLIC=`
    1. PayPal API Client ID
11. `PAYPAL_SECRET=`
    1. PayPal API Secret Key

<details>
  <summary>Instructions for getting PayPal API Keys</summary>

1. Head to the [PayPal Developers Panel](https://developer.paypal.com/dashboard/), select live mode, and create a new app.
   ![paypal-createApp](/img/docs/paypal-createApp.png)
2. Put in your app name and hit create app.
3. Grab the `Client ID` & `Secret 1` and paste them into the `.env` in their respective place.
   ![paypal-grabKey](/img/docs/paypal-grabKey.png)

> **Make sure to NOT share your PayPal Client ID or Secret with anyone! This would give them FULL access to your API, which could let them transfer funds and more.**

Now that have the keys and have put them into your `.env`, you are ready to go. Once you turn on your site and login to the admin panel, head to the settings page and hit the "Payment Details" button to enable PayPal or review/edit the keys (you can review/edit them via the `.env` file at anytime as well). _Note that editing the keys will require a site restart to go into effect._

</details>

### Stripe

You will need a [Stripe](https://stripe.com/) account if you wish to use this processor.

12. `STRIPE_PUBLIC=`
    1. Stripe API Publishable key
13. `STRIPE_SECRET=`
    1. Stripe API Secret Key

<details>
  <summary>Instructions for getting Stripe API Keys</summary>

1. Head to the "Developers" tab in the bottom right then the "API Keys" tab.
2. Click create secret key and give it a name.
   1. You can only view your secret key once, so ensure you save it.
3. You will also need to grab the `Publishable Key`, so ensure you create it if it isn't already created.
4. Once you have them both, head to your `.env` file and paste the keys into your respective slots.
   ![stripe](/img/docs/stripe.png)

> **Make sure to NOT share your Stripe Publishable or Secret key with anyone! This would give them FULL access to your API, which could let them transfer funds and more.**

Now that have the keys and have put them into your `.env`, you are ready to go. Once you turn on your site and login to the admin panel, head to the settings page and hit the "Payment Details" button to enable Stripe or review/edit the keys (you can review/edit them via the `.env` file at anytime as well). _Note that editing the keys will require a site restart to go into effect._

</details>

## Emails

14. `SENDGRID_KEY=`
    1. Head to the [SendGrid API Keys](https://app.sendgrid.com/settings/api_keys) page, create an API key, and then copy the key.
    2. If using SendGrid, then you don't need to put anything into the SMTP options.
15. `SMTP_HOST=`
    1. The host address for your SMTP server.
    2. Set to `null` if using Gmail SMTP.
16. `SMTP_PORT=`
    1. The port for your SMTP server.
    2. Set to `null` if using Gmail SMTP.
17. `SMTP_USER=`
    1. The email user for your SMTP server. Ex: `support@example.com`
18. `SMTP_PASS=`
    1. The password or key for your SMTP server.

## License System

19. `LICENSE_SYSTEM_KEY=`
    1.  Use the [license key from our site](https://shadowdevs.com/license) that is given once you purchase the [Internal License System](https://shadowdevs.com/store/shadowstore-licensesystem) or [External License System](https://shadowdevs.com/store/licensesystem).

## Advanced

These settings should remain the same way as seen below / provided in the download, unless you know what you are doing.

20. `BODY_SIZE_LIMIT=5368709120`
    1.  This increases the base SvelteKit body size limit to 10gbs.
21. `HOST=localhost`
    1.  This modifies how SvelteKit interacts with itself.
