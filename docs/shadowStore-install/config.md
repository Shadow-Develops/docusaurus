---
sidebar_position: 4
---

# Configuration

:::warning[Notice]
This page is still WIP, so some content is missing.
:::

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

## PayPal

10. `PAYPAL_PUBLIC=`
11. `PAYPAL_SECRET=`

## Stripe

12. `STRIPE_PUBLIC=`
13. `STRIPE_SECRET=`

## Emails

14. `SENDGRID_KEY=`
15. `SMTP_HOST=`
16. `SMTP_PORT=`
17. `SMTP_USER=`
18. `SMTP_PASS=`

## License System

19. `LICENSE_SYSTEM_KEY=`
    1.  Use the [license key from our site](https://shadowdevs.com/license) that is given once you purchase the [Internal License System](https://shadowdevs.com/store/shadowstore-licensesystem) or [External License System](https://shadowdevs.com/store/licensesystem).

## Advanced

These settings should remain the same way as seen below / provided in the download, unless you know what you are doing.

20. `BODY_SIZE_LIMIT=5368709120`
    1.  This increases the base SvelteKit body size limit to 10gbs.
21. `HOST=localhost`
    1.  This modifies how SvelteKit interacts with itself.
