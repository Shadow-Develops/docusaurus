---
sidebar_position: 1
---

# Discord

By default, Shadow Store comes with a built in Discord Bot. It is one of the login method and it has logging features.

:::info[Notice]
The Discord Bot Token within your Admin Panel > Integration is the same key saved within your `.env`, so this is NOT a separate bot.
:::

## Create Bot & Invite It

We will want to create a fresh Discord Application via the Discord Developer Portal.\
Create a new application and add a bot profile.\
In the bot tab, you must **enable ALL gateway intents**.\
_Also, we recommend you go to the Installation tab and disable `User Install` and set `Install Link` to `None`._\
After that, you can invite your bot to your server, use the link below but replace `CLIENT_ID_HERE` with your bot's ID.

```bash
https://discord.com/oauth2/authorize?client_id=CLIENT_ID_HERE&permissions=8&integration_type=0&scope=bot
```

[![bot setup](/img/docs/setup-bot.gif)](/img/docs/setup-bot.mp4)

## Login method

If you plan to use Discord as a login method, then you will need to make sure you put your domain with the discord auth callback inside the Discord Redirects.\
On the [Discord Developer Page](https://discord.com/developers/applications) for your application, head to: `OAuth2` tab and put the following (with your domain name) into the redirects section:

```bash
https://yourdomain.com/auth/discord/callback
```

## Auto Join server

If an user logs in using Discord, then they will automatically join the server.\
This is based on the server ID within Admin Panel > Integration > Discord > `Server ID` (even though its under the Logs title).

## Audit Logs

Certain Data can be automatically sent and logged from site actions into your Discord server.\
Admin Panel > Integration > Discord > Channel IDs under the Logs title.\
Logs Types:

- General
  - Login
- Purchases
- Invoices
- Admin
  - Audit Logs & Admin Actions
- Low Stock Alerts

Example:\
![Log Example](/img/docs/shadowStore-intDiscord.png)

## Auto Customer Role

Customers can automatically be given a general custom role or multiple roles upon a successful purchase.\
You must give a valid role ID, so ensure you put the a valid role and do not delete it. _Changing the name doesn't matter._

Examples:

- A single role
  ```bash
  730191102706974823
  ```
- Multiple roles
  ```bash
  730191102706974823,730191823102706974,102706974823730191
  ```

## Auto Notifications

Within Admin Panel > Integration > Discord you will see notifications at the bottom. These are the default channel ID and ping for release and discount notifications respectively.\
_Release notification can be configured with a different channel & ping, but the default will autofill for easy._

Ping Role ID must be a role ID (`1088352657938317372`) or the word `everyone`/`here` for @everyone/@here.
