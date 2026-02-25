---
sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# Updating Community Template

Follow these steps to safely update to a newer version.

## Before Updating

Back up the following files and store them somewhere safe **outside** your installation directory:

- `.env` - Your configuration and credentials
- `static/` folder - Custom images and assets
- `download-files/` folder - Downloadable content
- `uploads/` folder - User-uploaded content (if applicable)

## Update Process

:::info[Note]
[Forever](https://www.npmjs.com/package/forever) is used in this example. If you use a different process manager (PM2, etc.), substitute the equivalent commands.\
To get your process ID in Forever, run `forever list` and look for the number inside `[ ]` before the UID.
:::

1. **Prepare for the update**

   :::caution[Major vs Minor Updates]
   For **major version updates** (e.g., 1.x → 2.x), fully stop the application before continuing:\
   `forever stop PROCESSID`\
   For **minor updates**, a restart at the end is sufficient.
   :::

2. **Delete the following files and folders** from your installation directory:
   - `package.json`
   - `build/` folder - **Must be completely deleted, not just replaced.** Leftover files in `build/` can cause subtle errors.

   > Do NOT delete your `.env`, `static/`, `download-files/`, or `uploads/` folders.

3. **Download the latest release** from [Community Template Releases](https://shadowdevs.com/releases/8)
   - Read the release notes before proceeding - some releases include specific instructions
   - Download the appropriate version for your license

4. **Copy the new files** into your installation directory
   - Extract the downloaded zip
   - Copy all files **except** `.env`, `static/`, `download-files/`, and `uploads/`

5. **Update dependencies** (if the release notes say to)
   - Delete `package-lock.json` and `node_modules/`
   - Run `npm install`

6. **Check for `.env` changes** in the release notes
   - Add any new required environment variables to your `.env`
   - Keep all existing values

7. **Restart Community Template**

   :::info[Restart Method]
   - Major update (stopped in step 1): `forever start .`
   - Minor update: `forever restart PROCESSID`
     :::

   Check the logs for any startup errors.
