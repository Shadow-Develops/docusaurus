---
sidebar_position: 4
---

# Discord Application Setup

This guide will walk you through creating a Discord Application and obtaining your bot token for Shopify Bot.

:::warning[Important]
Never share your bot token with anyone! It provides full access to your bot and should be kept secure.
:::

## Creating a Discord Application

1. Navigate to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click the **"New Application"** button in the top right corner
3. Enter a name for your application (e.g., "Shopify Bot")
4. Read and accept Discord's Terms of Service
5. Click **"Create"**

## Getting Your Application ID (Client ID)

Before adding a bot, you'll need to get your Application ID:

1. On the **"General Information"** page of your application
2. Find the **"Application ID"** field
3. Click **"Copy"** to copy your Application ID (also called Client ID)
4. Save this - you'll need it for the `CLIENT_ID` in your configuration

## Getting Your Bot Token

1. In your application settings, click on the **"Bot"** tab in the left sidebar
2. Click the **"Add Bot"** button
3. Confirm by clicking **"Yes, do it!"**
4. Under the bot's username, click **"Reset Token"**
5. Click **"Yes, do it!"** to confirm
6. **Copy the token** and save it somewhere secure - you'll need this for the `DISCORD_TOKEN` in your configuration

:::danger[Token Security]
This token will only be shown once! Make sure to copy and save it securely. If you lose it, you'll need to regenerate a new token.
:::

## Bot Configuration

While you're in the Bot settings, you'll want to configure a few important settings:

### Privileged Gateway Intents

Scroll down to the **"Privileged Gateway Intents"** section and enable the following intents:

- **Server Members Intent** - The bot needs access to member's information & roles.
- **Message Content Intent** - The bot needs access to messages for some of the util functions.

## Bot Permissions

1. Click on the **"OAuth2"** tab in the left sidebar
2. Click on **"URL Generator"**
3. Under **"Scopes"**, select:

   - `bot`
   - `applications.commands` (for slash commands)

4. Under **"Bot Permissions"**, select the permissions your bot needs. For Shopify Bot, the following are recommended:

   - **General Permissions:**
     - Read Messages/View Channels
     - Manage Roles
     - Use Slash Commands
   - **Text Permissions:**
     - Send Messages
     - Embed Links
     - Attach Files
     - Read Message History
     - Add Reactions
     - Manage Messages

5. Copy the generated URL at the bottom of the page

## Inviting Your Bot

1. Paste the OAuth2 URL you copied into your browser
2. Select the server you want to add the bot to
3. Click **"Authorize"**
4. Complete the captcha verification

Your bot should now appear in your Discord server as offline (it will come online once you configure and start Shopify Bot).

## Configuration Summary

At this point, you should have the following information ready:

- **DISCORD_TOKEN** - Your bot token from the Bot tab
- **CLIENT_ID** - Your Application ID from the General Information page

You'll also need to gather:

- **OWNER_IDS** - Your Discord user ID (and any other bot owners). To get your Discord user ID:
  1. Enable Developer Mode in Discord (User Settings → Advanced → Developer Mode)
  2. Right-click on your username and select "Copy User ID"

## Next Steps

Now that you have your Discord Application set up and your credentials ready, you can proceed to configure the `.env` file with your Discord bot token, client ID, and other settings. Make sure to keep your bot token secure and never share it publicly or commit it to version control.
