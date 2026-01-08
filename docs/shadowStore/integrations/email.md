---
sidebar_position: 3
---

# Email: SendGrid & SMTP

Shadow Store supports email sending through SendGrid or SMTP for transactional emails, notifications, and customer communications. Choose the method that best fits your needs.

## Overview

Email integration options:

- **SendGrid**: Cloud-based email service
- **SMTP**: Direct SMTP server connection (recommended)
- **Google Workspace**: Gmail/Google SMTP

## SendGrid Integration

SendGrid is good because of its reliability, deliverability, and easy setup; however, it is a paid service.

### Setting Up SendGrid

**Step 1: Create SendGrid Account**

1. Visit [SendGrid](https://sendgrid.com/)
2. Sign up for an account
3. Verify your email address
4. Complete account setup

**Step 2: Verify Sender Identity**

For better deliverability:

1. Navigate to **Settings > Sender Authentication**
2. Choose single sender verification or domain authentication
3. Follow verification steps
4. Complete DNS setup (for domain authentication)

**Step 3: Create API Key**

1. Go to **Settings > API Keys**
2. Click "Create API Key"
3. Name: "Shadow Store Production"
4. Permissions: Select "Full Access" or "Mail Send" only
5. Click "Create & View"
6. Copy the API key immediately

:::warning
API keys are only shown once. Save it securely immediately.
:::

### Configuring SendGrid in Shadow Store

**Via Admin Panel:**

1. Navigate to **Admin Panel > Integrations**
2. Scroll to SendGrid section
3. Enter your SendGrid API Key
4. Save configuration

**Via Environment Variables:**

Add to `.env` file:

```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

### Testing SendGrid

1. Send a test email from Shadow Store
2. Check SendGrid Activity Feed for delivery
3. Verify email arrives correctly
4. Check spam folder if not in inbox

## SMTP Integration

Use standard SMTP for self-hosted email or other providers.

### SMTP Modes

Shadow Store supports two SMTP modes:

**Basic SMTP:**

- Standard SMTP connection
- Works with most email providers
- Simple configuration

**Google Workspace (Gmail):**

- Specialized for Google SMTP
- OAuth2 authentication
- Enhanced security

### Basic SMTP Setup

**Required Information:**

- SMTP Host (e.g., `smtp.example.com`)
- SMTP Port (e.g., `587`)
- Username
- Password
- Encryption method (TLS/SSL)

**Configuration:**

**Via Admin Panel:**

1. Navigate to **Admin Panel > Integrations**
2. Select SMTP section
3. Choose "Basic" mode
4. Enter SMTP host
5. Enter port number
6. Enter username and password
7. Select encryption method
8. Save configuration

**Via Environment Variables:**

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password_here
```

### Google Workspace SMTP

Use Gmail or Google Workspace for sending emails.

**Prerequisites:**

- Google Workspace account (or Gmail with App Password)
- Less secure app access enabled OR App Password generated

**Step 1: Generate App Password** (Recommended)

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification (if not already)
3. Navigate to **App Passwords**
4. Generate new app password for "Mail"
5. Copy the 16-character password

**Step 2: Configure in Shadow Store**

**Via Admin Panel:**

1. **Admin Panel > Integrations > SMTP**
2. Select "Google Workspace" mode
3. Enter your Gmail address
4. Enter the app password
5. Save configuration

**Via Environment Variables:**

```env
SMTP_HOST=null
SMTP_PORT=null
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
```

_Make sure to go to admin panel and set SMTP Mode._

### Common SMTP Providers

**Gmail/Google Workspace:**

```
Host: smtp.gmail.com
Port: 587
Encryption: TLS
```

**Outlook/Office 365:**

```
Host: smtp.office365.com
Port: 587
Encryption: TLS
```

**Yahoo Mail:**

```
Host: smtp.mail.yahoo.com
Port: 587 or 465
Encryption: TLS or SSL
```

**Custom Provider:**
Check your email provider's SMTP documentation for specific settings.

## Email Types

Shadow Store sends various email types:

**Transactional:**

- Order confirmations
- Purchase receipts
- Account verifications

**Marketing:**

- Newsletters

## Testing Email Configuration

### Send Test Email

1. Configure email integration
2. Navigate to **Admin Panel > Customers > Yourself**
3. Click "Send Email"
4. Input a message
5. Verify formatting and delivery

### Troubleshooting Tests

**Email not received:**

- Check spam/junk folder
- Verify SMTP credentials
- Check server logs for errors
- Confirm email address is correct

**Authentication failed:**

- Verify username/password
- Check app password for Google
- Ensure less secure apps enabled (if needed)
- Try different port (587 vs 465)

## Troubleshooting

### SendGrid Issues

**API Key Invalid:**

- Verify API key is correct
- Check for extra spaces
- Ensure key has proper permissions
- Generate new key if needed

**Emails Marked as Spam:**

- Complete sender authentication
- Set up domain authentication
- Verify SPF/DKIM records
- Improve email content quality
- Check sender reputation

### SMTP Issues

**Connection Timeout:**

- Verify SMTP host is correct
- Check port number
- Ensure firewall allows connection
- Try alternative port

**Authentication Failed:**

- Verify credentials are correct
- Check for app password requirement
- Ensure account isn't locked
- Verify encryption method matches

**TLS/SSL Errors:**

- Try alternative encryption method
- Update SSL certificates
- Check server SSL support
- Verify port matches encryption type

## Switching Email Providers

To switch from one provider to another:

1. Configure new provider credentials
2. Test with test emails
3. Monitor delivery for first batch
4. Keep old provider active initially
5. Fully switch after confirming new provider works
6. Remove old credentials
