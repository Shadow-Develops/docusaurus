---
sidebar_position: 1
---

# Google

Google OAuth integration allows users to sign in with their Google accounts. This provides a convenient authentication method and can streamline the registration process.

## Setup Overview

To enable Google login, you need to:

1. Create a Google OAuth application
2. Configure authorized redirect URIs
3. Add credentials to Shadow Store
4. Enable the integration

## Creating Google OAuth Application

### Step 1: Access Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Create a new project or select an existing one

### Step 2: Enable Google+ API

1. Navigate to **APIs & Services > Library**
2. Search for "Google+ API"
3. Click on it and enable the API

### Step 3: Create OAuth Credentials

1. Go to **APIs & Services > Credentials**
2. Click "Create Credentials"
3. Select "OAuth client ID"
4. Choose "Web application"

### Step 4: Configure OAuth Consent Screen

1. Navigate to **OAuth consent screen**
2. Fill in required information:
   - App name
   - User support email
   - Developer contact information
3. Save and continue

### Step 5: Set Authorized Redirect URIs

Add your Shadow Store callback URL:

```
https://yourdomain.com/auth/google/callback
```

Replace `yourdomain.com` with your actual domain.

**Important:** Use `https://` for production domains.

### Step 6: Get Client Credentials

After creating the OAuth client:

1. Copy the **Client ID**
2. Copy the **Client Secret**
3. Keep these secure

## Configuring Shadow Store

### Adding Credentials

1. Navigate to **Admin Panel > Integrations**
2. Locate Google OAuth section
3. Enter your **Client ID**
4. Enter your **Client Secret**
5. Save configuration

### Environment Variables

Alternatively, add to your `.env` file:

```env
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
```

## Testing the Integration

1. Log out of Shadow Store
2. Go to the login page
3. Click "Sign in with Google"
4. Authorize the application
5. You should be redirected and logged in

## User Experience

### First-Time Google Login

When a user signs in with Google for the first time:

1. They authorize Shadow Store
2. A new account is created automatically
3. Profile information is imported from Google:
   - Name
   - Email address
   - Profile picture (optional)
4. User is logged in immediately

### Returning Users

For users who have previously signed in with Google:

1. Click "Sign in with Google"
2. Select their Google account
3. Logged in immediately (no re-authorization needed)

## Linking Accounts

Users who created an account with email/password can link their Google account:

1. User logs in with email/password
2. Navigate to account settings
3. Click "Link Google Account"
4. Authorize with Google
5. Accounts are now linked
6. User can sign in with either method

## Security Considerations

**Scopes:**

Shadow Store typically requests:

- `openid`: OpenID Connect authentication
- `profile`: Basic profile information
- `email`: Email address

## Troubleshooting

### Redirect URI Mismatch

**Error:** "redirect_uri_mismatch"

**Solutions:**

- Verify redirect URI in Google Console matches exactly
- Check for http vs https
- Ensure no trailing slashes
- Confirm domain is correct

### Invalid Client

**Error:** "invalid_client"

**Solutions:**

- Verify Client ID is correct
- Check Client Secret is accurate
- Ensure credentials aren't expired
- Confirm project is enabled

### Access Denied

**Error:** User sees "Access Denied"

**Solutions:**

- Check OAuth consent screen is configured
- Verify app isn't in testing mode with restricted users
- Ensure all required scopes are approved
- Check user's Google account isn't restricted

### Login Button Not Appearing

**Solutions:**

- Verify credentials are configured
- Check integration is enabled
- Clear browser cache
- Restart Shadow Store application
