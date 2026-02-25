---
sidebar_position: 1
---

# Google

Google OAuth lets users sign in with their Google account. Community Template uses PKCE flow for secure authentication.

## Create a Google OAuth Application

### Step 1: Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one

### Step 2: Configure OAuth Consent Screen

1. Navigate to **APIs & Services > OAuth consent screen**
2. Choose **External** (or Internal if you're a Google Workspace organization)
3. Fill in the required fields:
   - App name
   - User support email
   - Developer contact email
4. Save and continue through the scopes and test users steps

### Step 3: Create OAuth Credentials

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > OAuth client ID**
3. Select **Web application**
4. Under **Authorized redirect URIs**, add:

```
https://yourdomain.com/auth/google/callback
```

Replace `yourdomain.com` with your actual domain.

5. Click **Create** and copy the **Client ID** and **Client Secret**

## Configure Community Template

Add to your `.env`:

```env
GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
```

Then enable Google login in **Admin Panel > Settings > Login Methods**.

## Troubleshooting

**"redirect_uri_mismatch"**

- Verify the redirect URI in Google Console exactly matches `https://yourdomain.com/auth/google/callback`
- Check for `http` vs `https` and trailing slashes

**"invalid_client"**

- Verify your Client ID and Client Secret are correct and have no extra spaces

**"Access Denied"**

- Check that the OAuth consent screen is fully configured
- If your app is in testing mode, add your email to the test users list
