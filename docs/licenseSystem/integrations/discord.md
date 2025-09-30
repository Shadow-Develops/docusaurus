---
sidebar_position: 1
---

# Discord

By default, Shadow License System comes with a built in Discord Bot. Currently it is required for the login method; however, it optionally has logging features.

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

## Auto Join server

If an user logs in using Discord, then they will automatically join the server.\
This is based on the server ID within Admin Panel > Integration > Discord > `Server ID` (even though its under the Logs title).

## Audit Logs

Certain Data can be automatically sent and logged from site actions into your Discord server.\
Admin Panel > Integration > Discord > Channel IDs under the Logs title.\
Logs Types:

- General
  - Login
- Admin
  - Audit Logs & Admin Actions

Example:\
![Log Example](/img/docs/shadowLicense-intDiscord.png)
