---
sidebar_position: 7
---

# Site Settings

Site settings control the core configuration of your Community Template installation. Go to **Admin Panel > Settings**. Requires the `manageSettings` permission.

Settings are organized across several sections:

---

## General

| Setting              | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| **Site Name**        | Displayed in the browser tab, navbar, and meta tags                 |
| **Site Description** | Used in meta description tags for SEO                               |
| **Meta Color**       | Browser chrome/theme color (shown in mobile browsers)               |
| **Site Logo**        | Your community logo - shown in the navbar and footer                |
| **Banner Image**     | Optional wide banner image used in embed previews                   |
| **Keywords**         | Comma-separated SEO keywords                                        |
| **Embed Image**      | Controls which image is used in link previews - site banner or logo |

---

## Authentication

Enable or disable individual login methods:

- **Email** - passwordless magic code login
- **Discord** - OAuth via Discord
- **Google** - OAuth via Google
- **Steam** - OpenID via Steam

Disabling a method hides its button from the login page and prevents new logins via that method. Existing accounts linked to that method are not affected.

---

## Disabled Pages

Toggle individual pages on or off. Disabled pages return a 404 for all visitors (including logged-in users who don't have admin permissions). Available pages:

- Blog
- Gallery
- Team
- Downloads
- Applications
- Submissions
- Newsletter
- Search

Disabling a page does not delete its content - re-enabling it restores it immediately.

---

## Redirects

Create URL redirect rules for your site. Each rule has:

- **From** - the path on your site (e.g., `/old-page`)
- **To** - the destination (e.g., `/new-page` or a full URL)

Redirects are applied server-side on every request before the page loads. Useful for handling renamed pages or external link shortcuts.

---

## Custom CSS

Inject global CSS that is applied across your entire site. Use this for:

- Overriding DaisyUI/Tailwind default styles
- Fine-tuning colors, fonts, or spacing beyond what the theme picker provides
- Hiding or repositioning specific elements

The CSS is injected into a `<style>` tag in the page `<head>`.

---

## Email

Configure the email service used for sending magic login codes and newsletter campaigns.

| Setting          | Description                                               |
| ---------------- | --------------------------------------------------------- |
| **From Address** | The sender email address (e.g., `noreply@yourdomain.com`) |
| **Mode**         | `smtp` or `sendgrid`                                      |
| **SMTP Mode**    | `default` or `google` (for Gmail/Google Workspace)        |
| **Email Header** | HTML to prepend to all outgoing emails                    |
| **Email Footer** | HTML to append to all outgoing emails                     |

For credential setup, see the [Email Integration](../integrations/email) guide.

---

## Maintenance Mode

Enable maintenance mode to show a maintenance message to all non-admin visitors. Staff (any user with admin permissions) can still access the site normally.

The toggle is in **Admin Panel > Settings > General**. There is no confirmation - enabling it takes effect immediately.

:::warning
Make sure you have admin permissions before enabling maintenance mode. If you get locked out, you can disable it by directly editing the `settings` collection in MongoDB and setting `maintenance: false` on the `site` document.
:::
