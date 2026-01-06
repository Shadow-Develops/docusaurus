---
sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# Updating Shadow Store

To update Shadow Store, follow these steps:

## Before Updating

1. Make a backup of your important files:

   - `.env` file - Contains your configuration settings
   - `static` folder - Houses your custom themes and assets
   - `cdn-files` folder - Houses your CDN assets

   Store these backups in a safe location outside the installation directory

## Update Process

:::info[Note]
[Forever](https://www.npmjs.com/package/forever) is used in this example as per the installation guide, but any process manager can be used (PM2, Nodemon, etc.)\
For forever, you will have to get the PROCESSID via running `forever list` and finding the valid ID of the process. It will be the number inside of brackets (aka: `[]`) just before the UID.
:::

1. Prepare for Update

   :::caution[Important]
   For major version updates (e.g., 1.x to 2.x), completely stop the application:\
   Use `forever stop PROCESSID` if using Forever or terminate the running Node.js process however you normally would.\
   For minor updates, a restart at the end is sufficient.
   :::

2. Delete the following files/folders:

   - `package.json`
   - `server.js`
   - `build` folder - **Must be completely deleted, not just replaced**
     > Important: Simply replacing files in the build folder can cause errors due to mismatched or obsolete files

   > Note: Do NOT delete your backed-up files!

3. Download the latest release from [CDN Manager Releases](https://shadowdevs.com/releases/11)

   - Check release notes for specific update instructions
     - Some updates may require you to update npm packages or add new directories
   - Download the appropriate version

4. Copy the new files to your installation directory

   - Extract the downloaded release
   - Copy all files except the `.env`, `static` and `cdn-files` folders

5. If the release notes mention package updates:

   - Delete `package-lock.json` and `node_modules` folder
   - Run `npm install` to install new dependencies
   - Wait for installation to complete

6. Check release notes for any `.env` file changes

   - Update your `.env` file with any new required variables
   - Keep your existing configuration values
   - Add any new required settings

7. Restore your backed-up folders if needed:

   - `static` folder - For assets
   - `files` folder - For CDN content

8. Restart Shadow Store
   :::info[Update Type]
   - For major updates: Use `forever start server.js` if using Forever
   - For minor updates: Use `forever restart PROCESSID` if using Forever
     :::
   - Or use your preferred process manager's restart command
   - Check logs for any startup errors
