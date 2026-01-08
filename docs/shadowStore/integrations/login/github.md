---
sidebar_position: 2
pagination_next: null
---

# Github

GitHub OAuth integration enables users to sign in with their GitHub accounts, making authentication convenient especially for developer-focused stores.

## Creating GitHub OAuth App

### Step 1: Access GitHub Settings

1. Go to [GitHub](https://github.com/)
2. Sign in to your account
3. Click your profile picture (top right)
4. Select **Settings**

### Step 2: Navigate to Developer Settings

1. Scroll down to **Developer settings** (left sidebar)
2. Click **OAuth Apps**
3. Click **New OAuth App**

### Step 3: Register New Application

Fill in the application details:

**Application name:**

```
Shadow Store - Your Site Name
```

**Homepage URL:**

```
https://yourdomain.com
```

**Application description:**

```
Sign in to Shadow Store with your GitHub account
```

**Authorization callback URL:**

```
https://yourdomain.com/auth/github/callback
```

**Important:** Replace `yourdomain.com` with your actual domain.

### Step 4: Get Credentials

After creating the app:

1. Copy the **Client ID**
2. Click "Generate a new client secret"
3. Copy the **Client Secret** immediately
4. Store these securely

:::warning
The client secret is only shown once. Save it immediately or you'll need to generate a new one.
:::

## Configuring Shadow Store

### Adding Credentials

**Via Admin Panel:**

1. Navigate to **Admin Panel > Integrations**
2. Locate GitHub OAuth section
3. Enter **Client ID**
4. Enter **Client Secret**
5. Save configuration

**Via Environment Variables:**

Add to your `.env` file:

```env
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
```

## Testing the Integration

1. Log out of Shadow Store
2. Navigate to login page
3. Click "Sign in with GitHub"
4. Authorize the application
5. Redirected and logged in successfully

## User Experience

### First-Time GitHub Login

New users signing in with GitHub:

1. Click "Sign in with GitHub"
2. Authorize Shadow Store
3. Account created automatically
4. Profile data imported:
   - GitHub username
   - Email address
   - Avatar/profile picture
5. Logged in immediately

### Returning Users

Users who previously signed in with GitHub:

1. Click "Sign in with GitHub"
2. Logged in immediately
3. No re-authorization required

## Account Linking

If you login with one method and the email matches on both, they will link.\
_We will look at adding a method for linking later._

## Security Considerations

**Scopes:**

Shadow Store requests minimal scopes:

- `user`: Basic user information
- `read:user`: Read user profile
- `user:email`: Access email addresses

## Troubleshooting

### Redirect URI Mismatch

**Symptoms:**

- Error: "redirect_uri_mismatch"
- Redirected to error page

**Solutions:**

- Verify callback URL in GitHub app matches exactly
- Check for http vs https
- Ensure no trailing slash differences
- Confirm domain matches

### Invalid Client Credentials

**Symptoms:**

- "invalid_client" error
- Authentication fails

**Solutions:**

- Verify Client ID is correct
- Ensure Client Secret is accurate
- Check for extra spaces in credentials
- Regenerate client secret if uncertain

### Missing Email Permission

**Symptoms:**

- User logged in but no email
- Account creation fails

**Solutions:**

- User may have no public email on GitHub
- Request `user:email` scope
- Ask user to make email public on GitHub
- Implement email input fallback

### Login Button Not Showing

**Solutions:**

- Verify credentials are configured
- Check integration is enabled in settings
- Clear browser cache
- Restart application
- Check console for errors
