---
sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# Updating Shadow Store

To update Shadow Store, follow these steps:

## Auto Update

:::warning[Beta Feature]
This feature is still in beta, so we advise that you keep an eye on things as the update happens. If you notice anything weird or your site not come back online after 5+ minutes then please do a manual update. Also, if you find any bugs or issues, [please report them to us](https://shadowdevs.com/form/bug-report)!
:::

As of version `1.6.5`, Shadow Store now has an auto update feature. This allows you to visit the Admin Console page and update the store directly through the panel.\
All the needed steps to preform the update should be automatically handled leading to a seamless update. We do **recommend you check the patch notes for new npm packages, and double check the new one was installed.**

We do also recommend that you see the [before updating](#before-updating) section of the manual update process, and copy a backup of those important files just in-case. Our auto update system shouldn't interact with those; however, you can never be to safe!

### Update Flow

```mermaid
graph LR
    A([Start Update]) --> B[Download zip] --> C[Extract zip] --> D[Remove old files] --> E[Copy new files] --> F[Delete temp dir] --> G[Run npm install] --> H([Restart Store])

    classDef default fill:#2d2d2d,stroke:#444,color:#fff
    classDef terminal fill:#1a6b3c,stroke:#2ea866,color:#fff
    class A,H terminal
```

---

## Manual Update

### Before Updating

1. Make a backup of your important files:
   - `.env` file - Contains your configuration settings
   - `static` folder - Houses your custom themes and assets
   - `files` folder - Contains your uploaded files and data

   Store these backups in a safe location outside the installation directory

### Update Process

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

3. Download the latest release from [Shadow Store Releases](https://shadowdevs.com/releases/24)
   - Check release notes for specific update instructions
     - Some updates may require you to update npm packages or add new directories
   - Download the appropriate version

4. Copy the new files to your installation directory
   - Extract the downloaded release
   - Copy all files except the `.env`, `static` and `files` folders

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
   - `files` folder - For product content

8. Restart Shadow Store
   :::info[Update Type]
   - For major updates: Use `forever start server.js` if using Forever
   - For minor updates: Use `forever restart PROCESSID` if using Forever
     :::
   - Or use your preferred process manager's restart command
   - Check logs for any startup errors
