---
sidebar_position: 1
---

# Shadow Store

:::warning[Notice]
These documentation are still WIP, we plan to have them finish by end of August.
:::

This is the official documentation for [Shadow Store](https://shadowdevs.com/store/shadowstore). Here you can find information on how to install it and manage settings.

## FAQ

- What is required to host it?
  - You need to have a VPS, as Shadow Store is a node application it will not work on "shared hosting" type plans. We recommend a Linux VPS.
  - _Our friends over at [Nexus Hosting](https://nexushosting.io/cloud) have wonderful hosting options._
- What Database is used?
  - MongoDB is the database used. You just need the database URL within your `.env`.
- What payment processors can I use?
  - Both PayPal / Stripe are currently the only options for payment processing.
- Do I have to use Discord for login and logs?
  - Currently for login, yes Discord is the only option; however, this will change in the future!
  - For logs, no using them is up to you.
- Can I send emails for notifications?
  - Yes, both SendGrid and SMTP server based emails are currently supported.
- What do I do with a bug I found?
  - Please report it in the [Shadow Development Discord](https://shadowdevs.com/discord) or via our [Website Contact Form](https://shadowdevs.com/form/contactus).

## Addons

Currently the only addon is the [Internal License System](https://shadowdevs.com/store/shadowstore-licensesystem). This addon allows you to attach a license key to purchases for certain products.
