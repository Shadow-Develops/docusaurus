---
sidebar_position: 4
---

# Configuration

With your server and files set up, it's time to configure Community Template. All configuration is done through the `.env` file in your installation directory. This file keeps sensitive credentials out of the database and away from version control.

## Required Settings

### License Key

```env
LICENSE_KEY=
```

- Get your key from [shadowdevs.com/license](https://shadowdevs.com/license)
- Required for the application to start
- License is verified on startup with a 72-hour grace period if the license server is temporarily unreachable

### Server Configuration

```env
PORT=5173
```

- The port Community Template listens on (default: `5173`)
- Make sure nothing else is using this port

```env
HOST=localhost
```

- Controls how SvelteKit binds to the network interface
- Leave as `localhost` unless you have a specific reason to change it

```env
BODY_SIZE_LIMIT=50000000000
```

- Maximum request body size in bytes (default: 50 GB)
- Affects the maximum file size that can be uploaded
- Adjust downward if you don't need large uploads

### Database

```env
MONGO_URL=mongodb://127.0.0.1:27017/communitytemplate
```

- MongoDB connection string
- The default works if MongoDB is running locally without authentication
- For authenticated connections: `mongodb://username:password@127.0.0.1:27017/communitytemplate`

### Domain Settings

```env
ORIGIN=https://community.yourdomain.com
```

- Your full domain URL including protocol (`https://` for production)
- Used for OAuth callbacks and session security

```env
PUBLIC_DOMAIN=community.yourdomain.com
```

- Domain without protocol
- Used in links sent via email and for display purposes

## Owner Permissions

```env
OWNERS=["admin@yourdomain.com"]
```

- JSON array of email addresses that automatically receive **owner** (full admin) permissions on login
- Supports multiple owners: `["admin@yourdomain.com","other@yourdomain.com"]`
- Owner permission bypasses all other permission checks

## OAuth Configuration

### Discord

```env
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
BOT_TOKEN=
```

- Required for Discord login and the Discord bot
- Get these from the [Discord Developer Portal](https://discord.com/developers/applications)
- `BOT_TOKEN` is the bot token for the same application - this is one bot, not two separate ones
- See the [Discord Integration guide](../integrations/discord) for full setup instructions

### Google

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

- Required for Google login
- Get these from [Google Cloud Console](https://console.cloud.google.com/)
- See the [Google Login guide](../integrations/login/google) for setup instructions

### Steam

```env
STEAM_API_KEY=
```

- Required for Steam login
- Get your key from [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)

## Email Configuration

Community Template uses email for passwordless authentication (magic codes). Configure either SendGrid or SMTP. If neither is configured, it will fall back to Shadow Devs' SMTP server.

### Option 1: SendGrid

```env
SENDGRID_KEY=SG.your-sendgrid-key-here
```

- Get your API key from [SendGrid](https://app.sendgrid.com/settings/api_keys)
- Create a key with "Mail Send" permissions
- If using SendGrid, leave SMTP variables empty

### Option 2: SMTP

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your_password
```

- Standard SMTP credentials
- Common ports: `587` (TLS), `465` (SSL)
- For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) with `smtp.gmail.com` on port `587`
- Set `SMTP_HOST=null` if using SendGrid instead

## Miscellaneous

```env
DEFAULT_AVATAR=/img/default-avatar.png
```

- Path to the default avatar image used for new users
- Relative to the `static/` directory

## Complete Example

```env
# License (REQUIRED)
LICENSE_KEY=your-license-key-here

# Server
PORT=5173
HOST=localhost
BODY_SIZE_LIMIT=50000000000

# Database
MONGO_URL=mongodb://127.0.0.1:27017/communitytemplate

# Domain
ORIGIN=https://community.yourdomain.com
PUBLIC_DOMAIN=community.yourdomain.com

# Owners
OWNERS=["admin@yourdomain.com"]

# Discord
DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret
BOT_TOKEN=your_bot_token

# Google
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Steam
STEAM_API_KEY=your_steam_api_key

# Email (SendGrid)
SENDGRID_KEY=SG.your-sendgrid-key

# Email (SMTP) - leave SMTP_HOST=null if using SendGrid
SMTP_HOST=null
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Misc
DEFAULT_AVATAR=/img/default-avatar.png
```
