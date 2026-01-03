---
sidebar_position: 6
---

# Configuration

You now have the server and files setup, so we can get to configuring the bot. We will go over every variable in the `.env` file.\
These environment variables are stored securely in your `.env` file to keep sensitive information like tokens and API keys safe.

:::warning[Important]
Never commit your `.env` file to version control or share it publicly. It contains sensitive credentials.
:::

## License Key

1. `LICENSE_KEY=`
   1. You get this from https://shadowdevs.com/license. This is your license from us to use Shopify Bot.
   2. Example: `LICENSE_KEY=your_license_key_here`

## Discord Bot Configuration

2. `DISCORD_TOKEN=`

   1. Your Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications).
   2. Navigate to your application > Bot tab > Click "Reset Token" to get your token.
   3. See the [Discord Application Setup](/shopifyBot/install/discord) guide for detailed instructions.
   4. Example: `DISCORD_TOKEN=your_bot_token_here`

3. `CLIENT_ID=`
   1. Your Discord Application ID (also called Client ID).
   2. Navigate to your application > General Information > Copy the "Application ID".
   3. See the [Discord Application Setup](/shopifyBot/install/discord) guide for detailed instructions.
   4. Example: `CLIENT_ID=your_bot_client_id_here`

## Shopify Configuration

4. `SHOPIFY_SHOP_NAME=`

   1. Your Shopify store name (the part before `.myshopify.com`).
   2. For example, if your store is `https://my-store.myshopify.com`, use `my-store`.
   3. Example: `SHOPIFY_SHOP_NAME=your-store-name`

5. `SHOPIFY_CLIENT_ID=`

   1. Your Shopify Admin API Client ID.
   2. Get this from your Shopify Dev Dashboard.
   3. See the Shopify App Setup guide for detailed instructions.
   4. Example: `SHOPIFY_CLIENT_ID=your_admin_api_client_id`

6. `SHOPIFY_CLIENT_SECRET=`

   1. Your Shopify Admin API Client Secret.
   2. Get this from your Shopify Dev Dashboard.
   3. **Keep this secret secure!** It provides access to your Shopify store data.
   4. Example: `SHOPIFY_CLIENT_SECRET=your_admin_api_client_secret`

7. `SHOPIFY_WEBHOOK_SECRET=` (Optional)
   1. Your Shopify Webhook Secret for webhook verification.
   2. Get this from your Shopify app settings when creating webhooks.
   3. This is optional but recommended for security.
   4. Example: `SHOPIFY_WEBHOOK_SECRET=your_webhook_secret_here`

## MongoDB Configuration

8. `MONGODB_URI=`
   1. The MongoDB connection string for your database.
   2. For local MongoDB: `mongodb://localhost:27017/shopifybot`
   3. For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/shopifybot`
   4. Example: `MONGODB_URI=mongodb://localhost:27017/shopifybot`

## Web Server Configuration

9. `WEB_SERVER_PORT=`

   1. The port number for the ExpressJS web server.
   2. By default, this is `3000`. Make sure this matches your Nginx configuration.
   3. Example: `WEB_SERVER_PORT=3000`

10. `WEB_SERVER_URL=`
    1. The full URL where your web server is accessible.
    2. For local development: `http://localhost:3000`
    3. For production, use your actual domain with HTTPS: `https://yourdomain.com`
    4. This is used for customer account linking and OAuth redirects.
    5. Example: `WEB_SERVER_URL=https://yourdomain.com`

## Logging Configuration

11. `WEB_LOGGING=`

    1. Enable or disable console logging for web server requests.
    2. Set to `true` to enable, `false` to disable.
    3. Useful for debugging web server issues.
    4. Example: `WEB_LOGGING=true`

12. `WEBHOOK_LOGGING=`
    1. Enable or disable console logging for webhook processing.
    2. Set to `true` to enable, `false` to disable.
    3. Useful for debugging webhook integration with Shopify.
    4. Example: `WEBHOOK_LOGGING=true`

## Deployment Configuration

13. `SKIP_DEPLOY=`
    1. Set to `true` to skip deploying slash commands to Discord on bot startup.
    2. Set to `false` when running the bot for the first time or when you've added new commands.
    3. After the first deployment, you can set this to `true` to make the bot load faster.
    4. Make sure to set it to `false` after any updates, so any command changes are deployed.
    5. Example: `SKIP_DEPLOY=true`

## Configuration Complete

Once you've filled in all the required values in your `.env` file, save it and you're ready to start the bot! Remember to restart the bot whenever you make changes to the `.env` file for them to take effect.
