---
sidebar_position: 7
---

# Users

Blog Builder manages users and admin permissions through the Users section of the admin panel.

## Admin Panel

- **Location:** Admin Panel > Users (`/admin/users`)
- **Required permission:** `viewUsers` (to view), plus additional permissions for actions

## How Accounts Are Created

Accounts are created automatically the first time an email address successfully completes the login flow. There is no manual registration step, anyone who receives a valid login code and enters it gets an account.

Email addresses listed in the `OWNERS` environment variable automatically receive the `owner` permission on first account creation.

## User Fields

Each user account has:

- Email address
- Username (derived from email on creation)
- Join date
- Admin permissions list
- Ban status (with reason and date if banned)
- Disabled status
- Internal notes (admin-only)

## Admin Actions

| Action                    | Required Permission      | Notes                                 |
| ------------------------- | ------------------------ | ------------------------------------- |
| View user list            | `viewUsers`              |                                       |
| Ban user                  | `manageUsers`            | Cannot ban owners or your own account |
| Unban user                | `manageUsers`            |                                       |
| Disable user              | `manageUsers`            | Prevents login without banning        |
| Enable user               | `manageUsers`            |                                       |
| Add/edit user note        | `manageUsers`            |                                       |
| Assign/revoke permissions | `manageStaff` or `owner` | Subject to delegation rules below     |
| Email user                | `emailUser`              |                                       |

## Permission System

All admin permissions are listed below. Permissions are additive, a user only has access to what they are explicitly granted.

| Permission       | Access Granted                                                                                                    |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `owner`          | Full admin access. Bypasses all permission checks. Set via `OWNERS` env var only (cannot be assigned via the UI). |
| `viewUsers`      | View the user list and user profiles                                                                              |
| `manageUsers`    | Ban, unban, disable, enable users, and add notes                                                                  |
| `banUser`        | Ban users                                                                                                         |
| `disableUser`    | Disable users                                                                                                     |
| `emailUser`      | Send a direct email to a user                                                                                     |
| `manageStaff`    | Assign and revoke permissions on other users (subject to delegation rules)                                        |
| `viewInsights`   | View the analytics dashboard                                                                                      |
| `manageTheme`    | Edit theme, custom CSS, and background settings                                                                   |
| `manageSettings` | Edit general site settings (navbar, footer, email, SEO, policies, redirects)                                      |
| `managePages`    | Manage landing page, custom pages, gallery, and team                                                              |
| `manageForms`    | Manage forms and view/export submissions                                                                          |
| `manageBlogs`    | Create, edit, and manage blog posts                                                                               |
| `viewLogs`       | View the audit log and error log                                                                                  |

:::warning
The `owner` permission is only granted automatically via the `OWNERS` environment variable.
:::

## Permission Assignment Rules

- An **owner** can assign or revoke any permission on any non-owner user
- A user with **`manageStaff`** can assign or revoke permissions that they themselves hold, with one exception: they cannot assign or revoke `manageStaff` itself
- A user cannot modify their own permissions
- Owners cannot be banned, disabled, or have permissions modified by non-owners

## Audit & Error Logs

All admin actions are recorded in the audit log, viewable at Admin Panel > Logs. The audit log is pruned to a maximum of 5,000 entries. Requires the `viewLogs` permission.
