---
sidebar_position: 5
pagination_next: null
pagination_prev: null
---

# Staff Manager

The Staff Manager allows you to create a team of administrators with granular permissions. Control who can access different areas of your store's admin panel and delegate responsibilities safely.

## Permissions

Shadow Store has 35 distinct permissions organized into 8 groups. The **Owner** role bypasses all permission checks and has unrestricted access to everything.

### Store

| Permission         | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `VIEW_ORDERS`      | View orders and order details                                        |
| `MANAGE_ORDERS`    | Manage orders (update status, process refunds)                       |
| `MANAGE_PRODUCTS`  | Create, edit, and delete products; manage releases and inventory     |
| `MANAGE_STORE`     | Configure store settings, tax, and display options                   |
| `MANAGE_DISCOUNTS` | Create discount codes, manage sales, create referral codes           |
| `MANAGE_INVOICES`  | Create and edit invoices, process payments, view invoice history     |
| `MANAGE_QUOTES`    | Create, edit, and cancel quotes; approve or reject revision requests |

### Users

| Permission      | Description                                 |
| --------------- | ------------------------------------------- |
| `VIEW_USERS`    | View customer profiles and account details  |
| `MANAGE_USERS`  | Edit customer profiles and account settings |
| `BAN_USER`      | Ban and unban customers                     |
| `DISABLE_USER`  | Disable and re-enable customer accounts     |
| `EMAIL_USER`    | Send emails to customers                    |
| `TRANSFER_USER` | Transfer purchases between accounts         |

### Content

| Permission              | Description                         |
| ----------------------- | ----------------------------------- |
| `MANAGE_CONTENT`        | Edit custom pages and page sections |
| `MANAGE_BLOGS`          | Create and edit blog posts          |
| `MANAGE_NEWSLETTERS`    | Create and send newsletters         |
| `MANAGE_FORMS`          | Create and edit forms               |
| `VIEW_FORM_SUBMISSIONS` | View form submission data           |

### Analytics

| Permission      | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `VIEW_INSIGHTS` | View the analytics dashboard, subscription analytics, and export data |

### Engagement

| Permission               | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| `MANAGE_LOYALTY`         | Configure the loyalty program, tiers, and earning rules       |
| `MANAGE_REFERRAL`        | View referral analytics, manage all codes, configure settings |
| `MANAGE_REVIEWS`         | Approve, reject, and moderate product reviews                 |
| `MANAGE_REVIEW_SETTINGS` | Configure review moderation settings                          |
| `MANAGE_SUBSCRIPTIONS`   | View and manage customer subscriptions                        |

### Appearance & Layout

| Permission          | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `MANAGE_APPEARANCE` | Theme customization, branding, custom CSS              |
| `MANAGE_LAYOUT`     | Homepage, product page, and store layout configuration |

### Settings

| Permission        | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| `MANAGE_SETTINGS` | Configure site-wide settings, email, integrations, and general preferences |

### System

| Permission                 | Description                                                                       |
| -------------------------- | --------------------------------------------------------------------------------- |
| `LICENSE_SYSTEM`           | Manage license keys                                                               |
| `VIEW_LOGS`                | Access audit logs                                                                 |
| `MANAGE_PURCHASE_REQUESTS` | Review and act on purchase requests                                               |
| `MANAGE_WEBHOOKS`          | Create and configure webhooks                                                     |
| `MANAGE_STAFF`             | Add and remove staff, grant permissions (cannot grant permissions you don't have) |
| `VIEW_PANEL`               | Access the admin panel (required for all staff)                                   |

## Permission Presets

When adding or editing a staff member, you can apply a preset to quickly fill in a common set of permissions:

| Preset             | Included Permissions                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| **Support Agent**  | `VIEW_ORDERS`, `VIEW_USERS`, `EMAIL_USER`, `MANAGE_REVIEWS`, `VIEW_FORM_SUBMISSIONS`, `VIEW_PANEL`                              |
| **Content Editor** | `MANAGE_BLOGS`, `MANAGE_NEWSLETTERS`, `MANAGE_FORMS`, `VIEW_FORM_SUBMISSIONS`, `MANAGE_CONTENT`, `MANAGE_REVIEWS`, `VIEW_PANEL` |
| **Store Manager**  | `VIEW_ORDERS`, `MANAGE_ORDERS`, `MANAGE_PRODUCTS`, `MANAGE_STORE`, `MANAGE_DISCOUNTS`, `VIEW_PANEL`                             |
| **Client Manager** | `VIEW_ORDERS`, `MANAGE_INVOICES`, `MANAGE_QUOTES`, `VIEW_USERS`, `EMAIL_USER`, `VIEW_PANEL`                                     |
| **Full Access**    | All permissions except `owner`                                                                                                  |

Presets pre-fill the permission checkboxes but do not save automatically: review and confirm before saving.

## Staff Settings

### Require 2FA for Staff

You can require all staff members to have two-factor authentication enabled before accessing the admin panel.

1. Navigate to **Admin Panel > Staff**
2. Toggle **Require 2FA for Staff**
3. Save

Staff without 2FA set up will be prompted to enable it before they can access any admin features.

## Adding Staff Members

1. Navigate to **Admin Panel > Staff**
2. Click **Add Staff Member**
3. Enter the user's account ID
4. Select permissions (or apply a preset and adjust)
5. Click **Add Staff Member**

The user immediately gains access to the granted permissions.

:::info
The user must have an existing account on your Shadow Store. If they don't, ask them to create one first.
:::

## Managing Existing Staff

### Viewing Staff Members

The staff list shows:

- Username
- 2FA status
- Currently assigned permissions (as badges)
- Actions (edit permissions, remove staff)

### Editing Permissions

1. Navigate to **Admin Panel > Staff**
2. Find the staff member and click **Edit**
3. Add or remove permissions
4. Click **Save Changes**

You cannot grant permissions you don't hold yourself.

### Removing Staff

1. Navigate to **Admin Panel > Staff**
2. Find the staff member and click **Remove**
3. Confirm removal

All permissions are revoked immediately.

:::warning
Removing a staff member revokes all their admin access immediately.
:::

## Owner Management

Owners are defined via the `OWNERS` environment variable (an array of emails). They:

- Have permanent owner status that cannot be removed via the staff manager
- Can grant owner status to other users via the staff manager
- Bypass all permission checks

:::danger
Be very careful when granting owner permissions. Owners have unrestricted access to everything.
:::

## Permission Rules

1. **Owner overrides all**: Owners can access everything regardless of other permissions
2. **No self-escalation**: Staff cannot grant themselves permissions they don't have
3. **No peer escalation**: Staff cannot grant permissions they don't hold
4. **Owner protection**: Only owners can grant or modify owner status

## Discord Audit Logging

All staff-related actions are logged to Discord (if configured):

- Staff member added or removed
- Permissions granted or revoked
- Failed permission attempts

Configure Discord logging at **Admin Panel > Integrations > Discord**.

## Security

### Self-Interaction Prevention

Staff members cannot grant themselves new permissions or remove their own staff status. Changes to a staff member's permissions must be made by another admin.

### Audit Trail

Every admin action is logged with who performed it, what the action was, and a timestamp. Access audit logs at **Admin Panel > Logs**.

## Troubleshooting

### Cannot Grant Permission

- You don't have that permission yourself
- You're trying to grant `owner` but you're not an owner
- Contact an owner to grant the permission first

### Staff Member Can't Access Feature

1. Verify they have the correct permission
2. Check if `VIEW_PANEL` is enabled (required for admin access)
3. If 2FA enforcement is on, confirm they have 2FA set up
4. Check audit logs for any issues

### Accidentally Removed Staff

Re-add them via **Admin Panel > Staff** and re-grant their permissions. Check audit logs to see what permissions they previously held.
