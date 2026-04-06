---
sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# Updating Blog Builder

Follow these steps to safely update to a newer version.

## Before Updating

Back up the following files and store them somewhere safe **outside** your installation directory:

- `.env` — Your configuration and credentials
- `static/` folder — Custom images and static assets
- `uploads/` folder — User-uploaded content

## Update Process

:::info
[Forever](https://www.npmjs.com/package/forever) and [PM2](https://pm2.keymetrics.io/) examples are both shown below. Substitute the commands for whichever process manager you use.\
To get your process ID in Forever, run `forever list` and look for the number inside `[ ]` before the UID.
:::

1. **Prepare for the update**

   :::warning[Major vs Minor Updates]
   For **major version updates** (e.g., 1.x → 2.x), fully stop the application before continuing:

   **Forever:** `forever stop PROCESSID`\
   **PM2:** `pm2 stop blogbuilder`

   For **minor updates**, a restart at the end is sufficient.
   :::

2. **Delete the following files and folders** from your installation directory:
   - `package.json`
   - `build/` folder — **Must be completely deleted, not just replaced.** Leftover files in `build/` can cause subtle errors.

   > Do NOT delete your `.env`, `static/`, or `uploads/` folders.

3. **Download the latest release** from [shadowdevs.com](https://shadowdevs.com/store/blogbuilder)
   - Read the release notes before proceeding — some releases include specific instructions
   - Download the appropriate version for your license

4. **Copy the new files** into your installation directory
   - Extract the downloaded zip
   - Copy all files **except** `.env`, `static/`, and `uploads/`

5. **Update dependencies** (only if the release notes say to)
   - Delete `package-lock.json` and `node_modules/`
   - Run `npm install`

6. **Check for `.env` changes** in the release notes
   - Add any new required environment variables to your `.env`
   - Keep all existing values

7. **Restart Blog Builder**

   **Forever:**
   - Major update (stopped in step 1): `forever start build/index.js`
   - Minor update: `forever restart PROCESSID`

   **PM2:**
   - Major update (stopped in step 1): `pm2 start build/index.js --name blogbuilder`
   - Minor update: `pm2 restart blogbuilder`

   Check the logs for any startup errors.
