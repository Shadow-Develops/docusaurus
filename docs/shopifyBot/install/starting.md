---
sidebar_position: 7
---

# Starting Shopify Bot

Wonderful job, you have now gotten Shopify Bot fully setup and ready to start. These steps should be very easy.

:::info[Before Starting]
Ensure that you have completed the [Configuration](/shopifyBot/install/config) guide and filled in all required values in your `.env` file, including your [license key](https://shadowdevs.com/license).
:::

## Navigate to the Bot Folder

First, we need to make sure that you are in the correct folder.

```bash
cd /home/shopifybot
```

_Replace `shopifybot` with whatever you named the folder._

## Install Dependencies

Now, install the node packages needed:

```bash
npm install
```

This will install all the required dependencies including Discord.JS, ExpressJS, MongoDB drivers, and other packages.

## Start the Bot

Once the installation has finished, we can start up the bot using `forever`.

```bash
node .
```

OR

```bash
node /src/index.js
```

---

**Congrats!!**

You have now successfully setup and started Shopify Bot! The bot should now be online in your Discord server and the web server should be accessible. You can verify this by checking your server's member list - the bot should appear with an online status.
