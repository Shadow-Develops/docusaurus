---
sidebar_position: 1
---

# Email

:::warning
Email is required for Blog Builder to function. The login system sends 6-digit codes by email, without a working email provider, no one can sign in.
:::

Blog Builder uses email for passwordless authentication (login code delivery) and for form submission notifications. You can configure either SendGrid or SMTP.

## Option 1: SendGrid

[SendGrid](https://sendgrid.com/) is a cloud email service with good deliverability and easy setup.

### Setup

1. Create a SendGrid account and verify your email
2. Go to **Settings > Sender Authentication** and verify your sender domain or email address for better deliverability
3. Go to **Settings > API Keys** and create a new key with **Mail Send** permissions
4. Copy the API key (it is only shown once)

:::warning
Save the API key immediately. SendGrid will not show it again.
:::

### Configuration

Add to your `.env`:

```env
SENDGRID_KEY=your-sendgrid-key-here
```

Then in **Admin Panel > Settings > Email**, set:

- **From Address**: the verified sender email address
- **Mode**: SendGrid

## Option 2: SMTP

Use your own SMTP server or a third-party provider.

### Configuration

Add to your `.env`:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your_password
```

Then in **Admin Panel > Settings > Email**, set:

- **From Address**: the email address to send from
- **Mode**: SMTP
- **SMTP Mode**: Default (or Google Workspace if using Gmail)

### Common SMTP Settings

**Gmail / Google Workspace:**

```
Host: smtp.gmail.com
Port: 587
```

For Gmail, you must use an [App Password](https://support.google.com/accounts/answer/185833) rather than your account password. Generate one under Google Account Security > App Passwords.

**Outlook / Office 365:**

```
Host: smtp.office365.com
Port: 587
```

**Yahoo Mail:**

```
Host: smtp.mail.yahoo.com
Port: 587
```

## Email Templates

You can customize the header and footer that appear on all outgoing emails in **Admin Panel > Settings > Email**. These accept HTML.

## Troubleshooting

**Emails not being received:**

- Check your spam/junk folder
- Verify sender authentication is set up (especially for SendGrid)
- Confirm the From Address is authorized by your email provider
- Check server logs for delivery errors

**Authentication errors:**

- Double-check your API key or SMTP credentials
- For Gmail, ensure you're using an App Password
- Try port `465` with SSL if `587` with TLS fails

**Verification codes expiring:**

- Login codes expire after **10 minutes**
- Request a new code from the login page if the code has expired
- You can request up to 3 codes per email address per 10-minute window
