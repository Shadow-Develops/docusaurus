---
sidebar_position: 5
---

# Users & Permissions

Community Template includes a full user management system with granular role-based permissions for controlling admin panel access.

## User Accounts

User accounts are created automatically on first login via any supported method (email, Discord, Google, Steam). Each account stores:

- Username (from their auth provider, or the part before `@` for email login)
- Email address
- Avatar
- Linked login methods
- Admin permissions
- Join date
- Ban/disabled status
- Staff notes

## Managing Users

Go to **Admin Panel > Users**. Requires the `manageUsers` permission.

The user list can be searched by username, email, or user ID, and filtered by status:

- **All** - every registered account
- **Admins** - users with any admin permission
- **Banned** - accounts that are banned
- **Disabled** - accounts that are disabled

### User Detail Page

Click any user to open their detail page. From here you can:

- **Edit permissions** - grant or revoke admin roles (see Permission System below)
- **Ban / Unban** - prevent the user from accessing restricted areas (downloads, admin panel)
- **Disable / Enable** - prevent the user from logging in at all
- **Add a staff note** - leave an internal comment visible only to admins (useful for logging why action was taken)
- **View linked accounts** - see which login providers are connected to the account

:::info
You cannot ban or modify users who have the `owner` permission. Owner accounts are protected.
:::

## Permission System

Community Template uses a granular permission system. Each user can be granted any combination of the following permissions:

| Permission           | What it allows                                                   |
| -------------------- | ---------------------------------------------------------------- |
| `owner`              | Full access to everything - bypasses all other permission checks |
| `viewPanel`          | Access the admin panel at all                                    |
| `manageSettings`     | Edit site settings, theme, navbar, and footer                    |
| `managePages`        | Manage home page sections and custom pages                       |
| `manageUsers`        | View users, change permissions, ban, and disable accounts        |
| `manageBlog`         | Create, edit, and delete blog posts                              |
| `manageGallery`      | Upload and manage gallery images                                 |
| `manageTeam`         | Add, edit, and remove team members                               |
| `manageDownloads`    | Upload and manage download files/releases                        |
| `manageApplications` | Create forms and review submitted applications                   |
| `manageNewsletter`   | Manage subscribers and send campaigns                            |
| `manageDiscord`      | Configure Discord integration settings                           |
| `viewAuditLogs`      | View the audit log history                                       |

### Granting Permissions

On the user detail page, check the boxes next to the permissions you want to grant and save. Users receive access immediately on their next page load.

A user needs `viewPanel` as a minimum to see the admin panel - without it, they won't see the `/admin` link even if they have other permissions.

### Owner Permission

The `owner` permission grants full access to everything and cannot be restricted. It is intended for site administrators.

**Automatic owner assignment:** Any email address listed in the `OWNERS` array in your `.env` file is automatically granted owner permissions when they log in. This means you don't need to manually set permissions for your primary admin accounts.

```env
OWNERS=["admin@yourdomain.com", "coowner@yourdomain.com"]
```

### Discord Role Mapping

You can automatically sync Discord server roles to Community Template permissions. Set this up in **Admin Panel > Discord > Staff Role Mappings**. Users with a mapped Discord role receive the corresponding admin permission automatically when they log in with Discord.

## Ban vs. Disable

|                             | Banned | Disabled |
| --------------------------- | ------ | -------- |
| **Can log in?**             | Yes    | No       |
| **Can browse the site?**    | Yes    | No       |
| **Can access downloads?**   | No     | No       |
| **Can access admin panel?** | No     | No       |

Use **Disable** to fully prevent someone from accessing the site. Use **Ban** to allow browsing but block downloads and admin access.

## Ban List

:::info[Coming Soon]
This feature is currently in development and will be introduced in a later update.
:::

Beyond banning individual accounts, you can maintain a ban list of identifiers that are checked on every login. Go to **Admin Panel > Users > Ban List**.

You can block:

- **Email address** - blocks any account using that email
- **Provider ID** - blocks a specific Discord ID, Google ID, Steam ID, etc.

If a match is found on login, the user's account is automatically flagged as banned or disabled. This is useful for blocking someone who creates new accounts to evade a ban.

### Discord Ban Sync

If you ban a user directly in your Discord server (via Discord's moderation tools), they will also be blocked from accessing Community Template's restricted areas (downloads, admin panel) on their next login attempt. This check is performed automatically.
