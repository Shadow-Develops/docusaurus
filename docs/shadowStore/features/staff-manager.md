---
sidebar_position: 5
pagination_next: null
pagination_prev: null
---

# Staff Manager

The Staff Manager allows you to create a team of administrators with granular permissions. Control who can access different areas of your store's admin panel and delegate responsibilities safely.

## Permission Types

Shadow Store includes the following admin permissions:

### `owner`

- **Description**: Full store owner access with unrestricted privileges
- **Access**: Everything
- **Special**: Can only be granted by users listed in the `OWNERS` environment variable
- **Cannot be removed**: Once set via environment, protected from removal

### `manageStaff`

- **Description**: Manage staff members and their permissions
- **Access**: Add/remove staff, grant permissions (except owner)
- **Restriction**: Cannot grant permissions they don't have themselves

### `manageProducts`

- **Description**: Manage product catalog
- **Access**:
  - Create, edit, delete products
  - Manage releases
  - View product analytics
  - Manage inventory

### `manageProductSettings`

- **Description**: Configure store settings
- **Access**:
  - Store configuration
  - Tax settings
  - Shipping settings
  - Product display options

### `manageDiscounts`

- **Description**: Manage promotional tools
- **Access**:
  - Create discount codes
  - Manage sales
  - Create referral codes
  - View discount analytics

### `manageForms`

- **Description**: Manage custom forms
- **Access**:
  - Create and edit forms
  - View submissions
  - Manage form settings

### `manageInvoices`

- **Description**: Handle billing and invoices
- **Access**:
  - Create and edit invoices
  - Process payments
  - View invoice history
  - Send payment reminders

### `manageReviews`

- **Description**: Moderate product reviews
- **Access**:
  - Approve/reject reviews
  - Handle reported reviews
  - Configure review settings
  - View review analytics

### `managePages`

- **Description**: Manage website pages and content
- **Access**:
  - Edit homepage
  - Manage custom pages
  - Edit blog posts
  - Manage partners and team pages

### `manageSettings`

- **Description**: Configure site-wide settings
- **Access**:
  - Site configuration
  - Email settings
  - Integration settings
  - General preferences

### `manageTheme`

- **Description**: Customize store appearance
- **Access**:
  - Theme customization
  - Branding settings
  - Custom CSS
  - Logo and images

## Adding Staff Members

1. Navigate to **Admin Panel > Staff**
2. Click "Add Staff Member"
3. Enter the user's email address (they must have an account)
4. Select permissions to grant:
   - Check the boxes for permissions you want to give
   - You can only grant permissions you have yourself
5. Click "Add Staff Member"
6. The user immediately gains access to granted permissions

:::info
The user must have an existing account on your Shadow Store. If they don't, ask them to create one first.
:::

## Managing Existing Staff

### Viewing Staff Members

The staff list shows:

- User name and email
- Currently assigned permissions
- Date added as staff
- Actions (edit permissions, remove staff)

### Editing Permissions

1. Navigate to **Admin Panel > Staff**
2. Find the staff member
3. Click "Edit Permissions"
4. Add or remove permissions:
   - Check to add a permission
   - Uncheck to remove a permission
5. Click "Save Changes"

**Permission Validation:**

- You cannot grant permissions you don't have
- You cannot modify owner permissions (unless you're also an owner)
- Changes apply immediately

### Removing Staff

1. Navigate to **Admin Panel > Staff**
2. Find the staff member
3. Click "Remove Staff"
4. Confirm removal
5. All permissions are revoked immediately

:::warning
Removing a staff member revokes all their admin access. They will no longer be able to access the admin panel.
:::

## Owner Management

### Environment Owners

Owners defined in the `OWNERS` environment variable:

- Have permanent owner status
- Cannot be removed via staff manager
- Can grant owner status to others
- Can manage all other owners

### Granting Owner Status

Only existing owners can grant owner permissions:

1. Navigate to **Admin Panel > Staff**
2. Add or edit a staff member
3. Check the `owner` permission
4. Save changes

:::danger
Be very careful when granting owner permissions. Owners have unrestricted access to everything, including the ability to remove other staff members and change critical settings.
:::

## Permission Inheritance

### Hierarchy Rules

The permission system follows these rules:

1. **Owner Overrides**: Owners can access everything regardless of other permissions
2. **No Self-Escalation**: Staff cannot grant themselves permissions
3. **No Peer Escalation**: Staff cannot grant permissions they don't have
4. **Owner Protection**: Only owners can manage other owners

### Example Scenarios

**Scenario 1: Product Manager**

- **Permissions**: `manageProducts`, `manageProductSettings`
- **Can**: Create products, edit products, configure store settings
- **Cannot**: Manage staff, edit theme, moderate reviews

**Scenario 2: Content Manager**

- **Permissions**: `managePages`, `manageTheme`
- **Can**: Edit website pages, customize theme
- **Cannot**: Manage products, access invoices, moderate reviews

**Scenario 3: Customer Support**

- **Permissions**: `manageReviews`, `manageInvoices`, `manageForms`
- **Can**: Moderate reviews, handle invoices, view form submissions
- **Cannot**: Edit products, manage staff, change settings

## Discord Audit Logging

All staff-related actions are logged to Discord (if configured):

**Logged Actions:**

- Staff member added
- Permissions granted
- Permissions revoked
- Staff member removed
- Failed permission attempts

**Log Information:**

- Who performed the action
- Target staff member
- Permissions involved
- Timestamp
- Action result

Configure Discord logging at **Admin Panel > Integrations > Discord**

## Security Features

### Self-Interaction Prevention

Staff members cannot:

- Grant themselves new permissions
- Remove their own staff status
- Modify their own permissions

This prevents privilege escalation and requires admin oversight for permission changes.

### Permission Validation

Every admin action validates:

- User has required permission
- Permission is currently active
- User is not banned
- Session is valid

### Audit Trail

All admin actions are tracked:

- Action performed
- User who performed it
- Timestamp
- Result (success/failure)

Access audit logs at **Admin Panel > Logs**

## Common Permission Sets

### Store Manager

Permissions: `manageProducts`, `manageProductSettings`, `manageDiscounts`

- Handles day-to-day store operations
- Cannot access sensitive settings or staff management

### Content Editor

Permissions: `managePages`, `manageForms`

- Manages website content
- Cannot access products or billing

### Customer Service

Permissions: `manageReviews`, `manageInvoices`, `manageForms`

- Handles customer interactions
- Cannot modify products or settings

### Developer/Designer

Permissions: `manageTheme`, `managePages`

- Customizes appearance
- Cannot access business operations

### Full Administrator

Permissions: All except `owner`

- Can manage most aspects
- Cannot add/remove staff or other critical functions

## Troubleshooting

### Cannot Grant Permission

**Possible Reasons:**

- You don't have that permission yourself
- You're trying to grant `owner` but you're not an owner
- You're trying to modify your own permissions
- The user is not registered

**Solution:**

- Contact an owner to grant the permission
- Verify you have the necessary permissions
- Ask another admin to modify your permissions

### Staff Member Can't Access Feature

**Check:**

1. Verify they have the correct permission
2. Check if permission was recently revoked
3. Ensure they're logged in
4. Verify session hasn't expired
5. Check audit logs for any issues

### Accidentally Removed Staff

**Recovery:**

- Re-add them via Staff Manager
- Re-grant their previous permissions
- Check audit logs to see what permissions they had
