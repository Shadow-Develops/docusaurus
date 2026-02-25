---
sidebar_position: 2
---

# Steam

Steam login uses OpenID 2.0, which means users authenticate directly on Steam's website. No OAuth credentials are needed - just a Steam Web API key.

## Get a Steam API Key

1. Go to [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)
2. Sign in with your Steam account
3. Enter your domain name in the domain field
4. Agree to the terms and click **Register**
5. Copy your API key

## Configure Community Template

Add to your `.env`:

```env
STEAM_API_KEY=your_steam_api_key_here
```

Then enable Steam login in **Admin Panel > Settings > Login Methods**.

## Troubleshooting

**Steam login button not appearing:**

- Verify `STEAM_API_KEY` is set in your `.env`
- Check that Steam is enabled in **Admin Panel > Settings > Login Methods**
- Restart the application after updating `.env`

**Login fails or redirects to an error:**

- Confirm your Steam API key is valid and not expired
- Ensure `ORIGIN` in your `.env` matches the domain you registered with Steam
