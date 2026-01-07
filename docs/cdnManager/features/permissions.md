---
sidebar_position: 1
---

# Permissions System

CDN Manager features a comprehensive permissions system that allows you to control exactly who can access and manage your files. This guide explains how permissions work and how to configure them.

## Granular Permission System

CDN Manager uses a **fully granular permission system** where individual permissions are granted to users. Roles are assigned internally based on which permissions a user has been granted, making the system highly flexible and customizable.

### How It Works

1. **Permissions are granted individually** - Users receive specific permissions like `cdn.upload`, `cdn.delete`, or `admin.users.manage`
2. **Roles are automatically assigned** - The system internally assigns role labels (like CDN_MANAGER) based on the combination of permissions granted
3. **Full customization** - You can grant any combination of permissions to create custom access levels beyond the predefined roles

## Individual Permissions

The following individual permissions can be granted:

### General Admin Permissions
- `owner` - Full unrestricted access (bypasses all checks)
- `admin.settings.manage` - Manage system settings
- `admin.audit.view` - View audit logs

### CDN/File Management Permissions
- `cdn.admin` - CDN administrator access
- `cdn.view` - View files and folders
- `cdn.download` - Download files
- `cdn.upload` - Upload files
- `cdn.delete` - Delete files
- `cdn.edit` - Edit file contents
- `cdn.move` - Move/rename files
- `cdn.folder.create` - Create new folders
- `cdn.folder.delete` - Delete folders
- `cdn.directory.permissions` - Manage directory permissions
- `cdn.file.permissions` - Manage file permissions

### User Management Permissions
- `admin.users.manage` - Manage user accounts
- `admin.users.permissions` - Assign permissions to users
- `users.ban` - Ban/unban users

## Permission Roles

For convenience, the system recognizes standard role combinations. These roles are **automatically assigned** based on the individual permissions granted:

### Owner (OWNER)

**Required Permission:** `owner`

- Full unrestricted access to everything
- Can manage all users and their permissions
- Can access admin panel
- Can modify all settings
- Bypasses all access restrictions
- Configured via the `OWNERS` environment variable

### CDN Manager (CDN_MANAGER)

**Required Permissions:**
- `cdn.admin`
- `cdn.view`
- `cdn.upload`
- `cdn.delete`
- `cdn.edit`
- `cdn.move`
- `cdn.folder.create`
- `cdn.folder.delete`
- `cdn.directory.permissions`
- `cdn.file.permissions`

**Capabilities:**
- Full file management capabilities
- Can upload, download, view, edit, move, and delete files
- Can create and delete folders
- Can manage directory and file permissions
- Cannot access admin panel (unless granted admin permissions)
- Cannot manage users or system settings (unless granted admin permissions)

### CDN Uploader (CDN_UPLOADER)

**Required Permissions:**
- `cdn.view`
- `cdn.upload`
- `cdn.folder.create`

**Capabilities:**
- Can upload files
- Can create folders
- Can view files they have access to
- Cannot edit, move, or delete files
- Cannot download files (unless `cdn.download` permission is explicitly granted)

### CDN Viewer (CDN_VIEWER)

**Required Permission:** `cdn.view`

**Capabilities:**
- Can only view files
- Cannot upload, edit, move, or delete
- Read-only access to files and folders
- Cannot download files (unless `cdn.download` permission is explicitly granted)

### User Moderator (USER_MODERATOR)

**Required Permissions:**
- `admin.users.manage`
- `users.ban`
- `admin.users.permissions`

**Capabilities:**
- Can manage user accounts
- Can ban or remove bans from users
- Can assign permissions to users
- Cannot access file management features (unless granted CDN permissions)
- Special administrative role for user management

## Custom Permission Combinations

Since permissions are fully granular, you can create custom access levels by granting any combination of individual permissions. This allows you to tailor access control to your specific needs.

### Examples of Custom Combinations

**Download-Only User:**
- `cdn.view`
- `cdn.download`

**Upload + Download User:**
- `cdn.view`
- `cdn.upload`
- `cdn.download`
- `cdn.folder.create`

**File Editor (No Delete):**
- `cdn.view`
- `cdn.edit`
- `cdn.move`

**Permission Manager Only:**
- `cdn.directory.permissions`
- `cdn.file.permissions`

**Audit Reviewer:**
- `admin.audit.view`

You can mix and match any permissions to create the exact access level you need for each user.

## Permission Levels

Permissions can be set at three levels with the following priority order:

### Permission Priority (Override System)

When determining a user's access to a file, the system checks permissions in this order:

1. **File-Level Permissions** (Highest Priority)
2. **Directory-Level Permissions** (Medium Priority)
3. **General User Permissions** (Lowest Priority)

**Important:** More specific permissions always override general ones. If a user has file-level permissions set, those will be used instead of directory or general permissions. If no file-level permissions exist, directory-level permissions are checked. If neither exists, general user permissions apply.

### File-Level Permissions

- **Highest priority** - Override all other permission levels
- Applied to specific individual files
- Allow granular control over sensitive documents
- Useful for restricting or granting access beyond directory settings
- Set via the File Permissions modal

**Example:** A user with general `cdn.delete` permission can have that permission removed for a specific file by setting file-level permissions without `cdn.delete`.

### Directory-Level Permissions

- **Medium priority** - Override general user permissions
- Applied to entire folders and their contents
- Inherited by all files and subfolders within that directory
- Can be synced to all children when updated
- Set via the Directory Permissions modal

**Example:** A user with general `cdn.view` permission can be granted `cdn.upload` for a specific directory by setting directory-level permissions.

### General User Permissions

- **Lowest priority** - Used only when no file or directory permissions are set
- Applied globally across the entire system
- Set via Admin Panel > Users > Permissions
- Serves as the baseline permission level for the user

## Access Modes

In addition to role-based permissions, directories and files can have access modes:

### Public

- Accessible to everyone, no login required
- Anyone with the link can view/download
- Useful for publicly shared assets

### Users-only

- Requires authentication
- Any logged-in user can access
- Role permissions still apply

### CDN-only

- Only accessible via CDN routes (`/cdn/[...path]`)
- Not accessible through the main file manager interface
- Useful for assets embedded in websites

### Whitelist

- Only accessible to whitelisted IPs or domains
- Configure whitelist in directory/file settings
- Supports CIDR notation (e.g., `192.168.1.0/24`)
- Can whitelist specific domains (e.g., `example.com`)

## Configuring Permissions

### Setting Directory Permissions

1. Navigate to the directory in the file manager
2. Click the settings icon or right-click the folder
3. Select "Directory Permissions"
4. Choose users and their permission levels
5. Optionally check "Sync to all children" to apply to subfolders
6. Click Save

### Setting File Permissions

1. Locate the file in the file manager
2. Click the settings icon or right-click the file
3. Select "File Permissions"
4. Choose users and their permission levels
5. Click Save

### Configuring Access Modes

1. Access the directory or file settings modal
2. Select the access mode from the dropdown:
   - Public
   - Users-only
   - CDN-only
   - Whitelist
3. If using Whitelist mode, add IP addresses or domains
4. Configure separate download permissions if needed
5. Click Save

## IP and Domain Whitelisting

When using Whitelist access mode, you can specify allowed IPs and domains:

### IP Whitelisting

- Add individual IPs: `192.168.1.100`
- Add CIDR ranges: `192.168.1.0/24`
- Supports both IPv4 and IPv6

### Domain Whitelisting

- Add specific domains: `example.com`
- Subdomains are matched separately
- Useful for restricting access to specific websites

### Blacklisting

You can also block specific IPs, domains, users, or emails:

- Navigate to Admin Panel > Ban List
- Add ban entries with optional expiration dates
- Ban types: IP, Domain, User, Email
- Banned entities cannot access any resources

## Permission Inheritance and Priority

Permissions follow these rules:

### Priority Order

1. **File-level permissions override directory permissions** (File > Directory > General)
2. **Directory permissions override general user permissions**
3. **General user permissions are the baseline** (used when no file or directory permissions exist)
4. **Owner permissions always bypass all restrictions** (the `owner` permission ignores all other checks)
5. **Bans are checked first** (banned users cannot access anything, regardless of permissions)

### How Overrides Work

**Granting Additional Access:**
- User has general permission: `cdn.view`
- Directory permission grants: `cdn.view`, `cdn.upload`, `cdn.delete`
- Result: User can view, upload, and delete files in that directory

**Restricting Access:**
- User has general permissions: `cdn.view`, `cdn.upload`, `cdn.delete`
- File permission grants only: `cdn.view`
- Result: User can only view that specific file, cannot upload or delete it

**Complete Override:**
When you set permissions at a more specific level (file or directory), those permissions completely replace the less specific permissions for that resource. The system doesn't combine or merge permissions from different levels.

### Inheritance Rules

- **Directory permissions inherit to children** (unless explicitly overridden)
- **Subdirectories inherit parent directory permissions** (until different permissions are set)
- **Files inherit directory permissions** (until file-level permissions are set)

## Best Practices

### Use Directory Permissions for Organization

- Set permissions at the folder level for easier management
- Use file-level permissions sparingly for exceptions

### Separate Public and Private Content

- Create separate top-level folders for public vs. private files
- Set appropriate access modes on these folders

### Use Whitelist for Embedded Assets

- For images/videos embedded on specific websites
- Prevents hotlinking from unauthorized domains

### Regular Permission Audits

- Review permissions periodically
- Remove access for users who no longer need it
- Check audit logs for unusual access patterns

### Owner Account Security

- Limit the number of owner accounts
- Use owner accounts only when necessary
- Consider using CDN_MANAGER role for day-to-day operations

## Examples

### Example 1: Public Image Gallery

```
Directory: /public-images
Access Mode: Public
Permissions: None needed (public access)
```

### Example 2: Team Documents

```
Directory: /team-docs
Access Mode: Users-only
Permissions:
  - john@example.com: CDN_MANAGER (all CDN permissions)
  - jane@example.com: CDN_UPLOADER (upload, view, create folders)
  - team@example.com: CDN_VIEWER (view only)
```

**Or with custom granular permissions:**
```
  - john@example.com: Full management (cdn.admin, cdn.view, cdn.upload, cdn.delete, cdn.edit, cdn.move, cdn.folder.create, cdn.folder.delete)
  - jane@example.com: Upload only (cdn.view, cdn.upload, cdn.folder.create)
  - bob@example.com: View and download (cdn.view, cdn.download)
```

### Example 3: Website Assets

```
Directory: /website-assets
Access Mode: Whitelist
Whitelist: example.com, www.example.com
Permissions: Public via whitelist
```

### Example 4: Confidential Files

```
Directory: /confidential
Access Mode: Users-only
Permissions:
  - ceo@example.com: CDN_MANAGER
  - cfo@example.com: CDN_VIEW
File: /confidential/sensitive-report.pdf
Permissions:
  - ceo@example.com: CDN_VIEW
  (Restricts even further than directory)
```

## Troubleshooting

### User Cannot Access Files

1. Check if user is banned (Admin Panel > Ban List)
2. Verify user has appropriate role permission
3. Check directory access mode
4. Verify IP/domain if using whitelist
5. Check audit logs for access attempts

### Files Accessible When They Shouldn't Be

1. Check if directory is set to Public
2. Verify file-level permissions aren't overriding
3. Check if user has Owner role
4. Review whitelist/blacklist settings

### Permission Changes Not Taking Effect

1. Permissions are applied immediately
2. User may need to refresh the page
3. Check if "Sync to children" was enabled for directory changes
4. Verify changes were saved successfully
