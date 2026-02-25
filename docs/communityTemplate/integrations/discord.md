---
sidebar_position: 1
---

# Discord

Community Template has a built-in Discord integration that enables Discord OAuth login, a Discord bot, automatic server join, audit log forwarding, and more.

:::info[Notice]
The Discord Bot Token in **Admin Panel > Discord** is the same token as `BOT_TOKEN` in your `.env` file. This is a single bot - not two separate ones.
:::

## Create a Discord Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application.
2. Give it a name and icon.
3. Navigate to the **Bot** tab and add a bot profile.
4. Under the bot settings, **enable all Privileged Gateway Intents** (Presence Intent, Server Members Intent, Message Content Intent).
5. Go to the **Installation** tab, disable `User Install`, and set `Install Link` to `None`.

Copy the following from the developer portal into your `.env`:

- **Client ID** → `DISCORD_CLIENT_ID`
- **Client Secret** (from OAuth2 tab) → `DISCORD_CLIENT_SECRET`
- **Bot Token** (from Bot tab) → `BOT_TOKEN`

## Invite the Bot to Your Server

Replace `CLIENT_ID_HERE` with your application's Client ID and open the link in a browser:

```
https://discord.com/oauth2/authorize?client_id=CLIENT_ID_HERE&permissions=8&integration_type=0&scope=bot
```

This invites the bot with Administrator permissions, which are required for role assignment and ban syncing.

## Discord Login

To use Discord as a login method, add your callback URL to the Discord application's redirect list.

In the [Discord Developer Portal](https://discord.com/developers/applications), go to the **OAuth2** tab and add:

```
https://yourdomain.com/auth/discord/callback
```

Replace `yourdomain.com` with your actual domain. Discord login can be enabled or disabled in **Admin Panel > Settings**.

## Audit Log Forwarding

Admin actions can be automatically logged to Discord channels. Configure channel IDs in **Admin Panel > Discord > Logs**.

Available log channels:

- **General** - Logins and general activity
- **Audit** - Admin panel actions
- **Blog** - New blog post notifications
- **Newsletter** - Newsletter send notifications
- **Applications** - New application submissions

## Application Notifications

When a new application is submitted, the bot can ping a role in a Discord channel. Set the channel ID and ping role ID in **Admin Panel > Discord**.

## Member Role Assignment

Users who log in with Discord can be automatically given a Discord role after a configurable delay.

Set the role ID and delay (in hours) in **Admin Panel > Discord > Member Role**. The role is assigned via a cron job that runs every hour.

## Staff Role Mapping

Sync Discord server roles to Community Template admin permissions. Configure mappings in **Admin Panel > Discord > Staff Role Mappings**. When a user with a mapped Discord role logs in, they are automatically granted the corresponding admin permission.

## Blog & Newsletter Notifications

New blog posts and newsletter campaigns can automatically send a Discord message. Configure the default channel ID and ping role in **Admin Panel > Discord > Notifications**.

- Ping Role ID must be a valid role ID (e.g., `730191102706974823`) or the word `everyone` or `here` for @everyone / @here.

## Discord Ban Sync

If a user is banned directly in your Discord server, they will also be blocked from accessing Community Template's restricted areas (downloads, admin panel) on their next login attempt.
