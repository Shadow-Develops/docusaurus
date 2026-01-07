---
sidebar_position: 4
---

# Configuration

You now have the server and files setup, so we can get to configuring the basics. This guide will go over every line of the `.env` file.\
Environment variables are stored securely in your `.env` file rather than the database to protect sensitive configuration.

## Required Settings

### License Key

1. `LICENSE_KEY=`
   - Get this from https://shadowdevs.com/license - it should be a simple string
   - This is your license from Shadow Devs to use CDN Manager
   - Required for the application to function
   - Verified with a 72-hour grace period

### Server Configuration

2. `PORT=3001`

   - The port your application will run on
   - By default it's `3001`, but you can change it to any valid port number
   - Make sure this port is not already in use

3. `HOST=localhost`

   - This modifies how SvelteKit interacts with the server
   - Keep as `localhost` unless you have specific networking requirements

4. `BODY_SIZE_LIMIT=50000000000`
   - Maximum request body size (50GB by default)
   - This allows for large file uploads
   - Adjust based on your maximum file size needs

### Database

5. `MONGO_URL=`
   - The MongoDB connection URL for your database
   - If you do not add any password lock to your database and leave it as local only, you can use: `mongodb://127.0.0.1:27017/cdnmanager`
   - For production, consider using authentication: `mongodb://username:password@127.0.0.1:27017/cdnmanager`

### Domain Settings

6. `ORIGIN=`

   - Your full domain URL, including the protocol
   - Example: `https://cdn.yourdomain.com`
   - Must include `https://` (or `http://` for development)

7. `PUBLIC_DOMAIN=`
   - Just your domain name without the protocol
   - Example: `cdn.yourdomain.com`
   - Used for email links and public CDN routes

## Owner Permissions

8. `OWNERS=["email@example.com"]`
   - Must be a JSON array of email addresses
   - Users who log in with these emails will have full owner permissions
   - Example: `OWNERS=["admin@example.com","owner@example.com"]`
   - These users bypass all permission checks

## Email Configuration

CDN Manager uses email for authentication. You can use either SendGrid or SMTP.

### Option 1: SendGrid (Recommended)

9. `SENDGRID_KEY=`
   - Head to the [SendGrid API Keys](https://app.sendgrid.com/settings/api_keys) page
   - Create an API key with "Mail Send" permissions
   - Copy and paste the key here
   - If using SendGrid, you don't need to configure SMTP settings

### Option 2: SMTP

If you're not using SendGrid, configure your SMTP server:

10. `SMTP_HOST=`

    - The host address for your SMTP server
    - Example: `smtp.gmail.com`
    - Set to `null` if using SendGrid

11. `SMTP_PORT=`

    - The port for your SMTP server
    - Common ports: `587` (TLS), `465` (SSL), `25` (unsecured)
    - Set to `null` if using SendGrid

12. `SMTP_USER=`

    - The email address or username for your SMTP server
    - Example: `noreply@yourdomain.com`

13. `SMTP_PASS=`
    - The password or app-specific password for your SMTP account
    - For Gmail, use an [app password](https://support.google.com/accounts/answer/185833)

:::warning[Email Fallback]
If neither SendGrid nor SMTP are configured, CDN Manager will fall back to Shadow Devs' SMTP server. For production use, we recommend configuring your own email service.
:::

## Complete Example

Here's a complete `.env` file example:

```env
# License (REQUIRED)
LICENSE_KEY=your-license-key-here

# Server Configuration
PORT=5173
HOST=localhost
BODY_SIZE_LIMIT=5368709120

# Database
MONGO_URL=mongodb://127.0.0.1:27017/cdnmanager

# Domain Settings
ORIGIN=https://cdn.yourdomain.com
PUBLIC_DOMAIN=cdn.yourdomain.com

# Owner Permissions
OWNERS=["admin@yourdomain.com"]

# Email Configuration (SendGrid)
SENDGRID_KEY=SG.your-sendgrid-key-here

# Email Configuration (SMTP) - Leave as null if using SendGrid
SMTP_HOST=null
SMTP_PORT=null
SMTP_USER=
SMTP_PASS=
```
