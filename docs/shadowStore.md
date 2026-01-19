---
sidebar_position: 1
---

# Shadow Store

This is the official documentation for [Shadow Store](https://shadowdevs.com/store/shadowstore). Here you can find information on how to install it and manage settings.

## FAQ

- What is required to host it?
  - You need to have a VPS, as Shadow Store is a node application it will not work on "shared hosting" type plans. We recommend a Linux VPS.
  - _Our friends over at [Nexus Hosting](https://billing.nexushosts.com/aff.php?aff=9) have wonderful hosting options._
- What Database is used?
  - MongoDB is the database used. You just need the database URL within your `.env`.
- What payment processors can I use?
  - Both PayPal / Stripe are currently the only options for payment processing.
- What login methods are there?
- No, we offer passwordless email authentication, Google, Discord, and Github.
- Is there a Discord Bot?
  - Yes, Shadow Store has a built in Discord bot that is used to handle the Discord OAuth2 (if enabled) and automatically post things such as releases, audit logs, and notifications (if enabled).
- Can I send emails for notifications?
  - Yes, both SendGrid and SMTP server based emails are currently supported.
- What do I do with a bug I found?
  - Please report it in the [Shadow Development Discord](https://shadowdevs.com/discord) or via our [Website Bug Report Form](https://shadowdevs.com/form/bug-report).

_Note: Not all questions may be answered above, as some FAQ are on the [product's page](https://shadowdevs.com/store/shadowstore)._

## Addons

Currently the only addon is the [Internal License System](https://shadowdevs.com/store/shadowstore-licensesystem). This addon allows you to attach a license key to purchases for certain products.
