---
sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# Updating Shopify Bot

To update Shopify Bot, follow these steps:

## Before Updating

1. Make a backup of your important files:

   - `.env` file - Contains your configuration settings
   - `config.json` file - Contains your default server configuration

   Store these backups in a safe location outside the installation directory

## Update Process

1. Prepare for Update

   - Stop the application. We don't want any hanging data, so stop the bot fully.
   - Make sure you have a backup of important files.

2. Delete the following files/folders:

   - `package.json`
   - `server.js`
   - `src` folder - **Must be completely deleted, not just replaced**
     > Important: Simply replacing files in the build folder can cause errors due to mismatched or obsolete files

   > Note: Do NOT delete your backed-up files!

3. Download the latest release from [Shopify Bot Releases](https://shadowdevs.com/releases/9)

   - Check release notes for specific update instructions
     - Some updates may require you to update npm packages or add new directories
   - Download the appropriate version

4. Copy the new files to your installation directory

   - Extract the downloaded release
   - Copy all files except the `.env` and `config.json`

5. If the release notes mention package updates:

   - Delete `package-lock.json` and `node_modules` folder
   - Run `npm install` to install new dependencies
   - Wait for installation to complete

6. If release notes mention updating your Shopify App:

   - You will need to go into your Shopify Dev Dashboard > Your App
   - Make a new version with any new scopes (ensure to copy the previous ones as well)
   - Reinstall the app to your store

7. Check release notes for any `.env` or `config.json` file changes

   - Update your `.env` or `config.json` file with any new required variables
   - Keep your existing configuration values
   - Add any new required settings

8. Restart Shopify Bot

   - Run the bot via your preferred method.
   - Check logs for any startup errors
