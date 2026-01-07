---
sidebar_position: 4
---

# Admin Guide

This guide is for administrators and owners who manage CDN Manager installations. Learn how to manage users, configure settings, and maintain your CDN Manager instance.

## Accessing the Admin Panel

Only users with `OWNER` or specific admin permissions can access the admin panel.

**To Access:**

1. Log in to your CDN Manager instance
2. Navigate to `/admin` or click the "Admin" link in the navigation
3. The admin dashboard will display system statistics and quick links

## Dashboard Overview

The admin dashboard shows key metrics:

- **Total Users:** Number of registered users
- **Total Directories:** Number of folders in the system
- **Total Files:** Number of uploaded files
- **Total Storage Used:** Disk space consumed by files

## User Management

Manage user accounts and their permissions.

### Understanding the Permission System

CDN Manager uses a **fully granular permission system**:

- **Individual permissions** are granted to users (e.g., `cdn.upload`, `cdn.delete`, `admin.users.manage`)
- **Roles are automatically assigned** internally based on which permissions are granted
- This allows complete flexibility to create custom access levels beyond predefined roles
- You can grant any combination of permissions to match your specific requirements

**Example:** If you grant a user `cdn.view`, `cdn.upload`, and `cdn.folder.create`, the system will internally recognize them as having the CDN_UPLOADER role. However, you can also grant them additional permissions like `cdn.download` to customize their access further.

### Viewing Users

**Navigate to:** Admin Panel > Users

You'll see a list of all users with:

- Email address
- Registration date
- Permission roles
- Last login

### Creating Users

CDN Manager uses email-based authentication, so users are created automatically when they log in for the first time. You can then assign permissions.

### Assigning Permissions

CDN Manager uses a **fully granular permission system** where you grant individual permissions to users. The system automatically assigns role labels based on the permissions granted.

#### Assigning Individual Permissions

1. Navigate to Admin Panel > Users
2. Find the user in the list
3. Click "Edit" or "Permissions"
4. Grant specific permissions from the following categories:

**General Admin Permissions:**

- `owner` - Full system access (bypasses all restrictions)
- `admin.settings.manage` - Manage system settings
- `admin.audit.view` - View audit logs

**CDN/File Management Permissions:**

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

**User Management Permissions:**

- `admin.users.manage` - Manage user accounts
- `admin.users.permissions` - Assign permissions to users
- `users.ban` - Ban/remove bans from users

5. Click Save

#### Using Predefined Roles

For convenience, you can also grant permissions using standard role combinations:

- **OWNER** - `owner` permission (full access)
- **CDN_MANAGER** - All CDN management permissions
- **CDN_UPLOADER** - `cdn.view`, `cdn.upload`, `cdn.folder.create`
- **CDN_VIEWER** - `cdn.view` only
- **USER_MODERATOR** - User management permissions

These roles are automatically recognized based on the individual permissions granted.

#### Permission Tips

**For Read-Only Users:**

- Grant: `cdn.view`
- Optionally add: `cdn.download`

**For Content Contributors:**

- Grant: `cdn.view`, `cdn.upload`, `cdn.folder.create`
- Optionally add: `cdn.download`

**For Team Leaders:**

- Grant all CDN permissions (CDN_MANAGER role)
- Consider adding: `cdn.directory.permissions`, `cdn.file.permissions`

**For Administrators:**

- Reserve `owner` permission for system administrators
- Use specific admin permissions for limited admin roles

**Custom Access Levels:**

- Mix and match individual permissions to create custom access levels
- Example: Grant only `cdn.view` + `cdn.edit` for editors who shouldn't delete

### Permission Priority System

Permissions can be set at three levels, with a clear priority order:

**Priority Order (Highest to Lowest):**

1. **File-Level Permissions** - Specific to individual files
2. **Directory-Level Permissions** - Applied to folders and their contents
3. **General User Permissions** - User's baseline permissions

**How It Works:**

- More specific permissions **completely override** less specific ones
- File permissions override directory permissions
- Directory permissions override general user permissions
- The system does not merge permissions; it uses the most specific level available

**Example Scenarios:**

**Granting Extra Access to a Directory:**

- User's general permissions: `cdn.view`
- Directory permission: `cdn.view`, `cdn.upload`, `cdn.delete`
- Result: User can upload and delete in that directory only

**Restricting Access to a File:**

- User's general permissions: `cdn.view`, `cdn.upload`, `cdn.delete`
- File permission: `cdn.view` only
- Result: User can only view that file, cannot delete it

### Directory-Specific Permissions

Set permissions for specific directories to override general user permissions:

1. Navigate to the file manager
2. Right-click on a folder
3. Select "Directory Permissions"
4. Grant specific permissions to users for this folder
5. Optionally sync to all child folders
6. Click Save

**Note:** Directory permissions will apply to all files and subfolders unless overridden by file-level permissions.

### File-Specific Permissions

Set permissions for specific files to override both directory and general permissions:

1. Locate the file in the file manager
2. Right-click and select "File Permissions"
3. Grant specific permissions to users for this file
4. Click Save

**Note:** File permissions have the highest priority and will completely override directory and general user permissions for that specific file.

## Settings Management

Configure site-wide settings.

**Navigate to:** Admin Panel > Settings

### Site Settings

Configure basic site information:

- **Site Name:** Display name for your CDN
- **Site Description:** Brief description

#### Restriction Modes

We have 3 different types of modes you can put the site into:

- **Staff Only:** Anyone with a single general permission can access the site's content
- **Admin Only:** Only those with `cdn.admin` and `owner` permissions can access the site's content
- **Maintenance Mode:** Only those with staff permissions can access the site, and a maintenance error will be displayed to normal users

### Email Settings

Configure email service for authentication:

- **Type:** Set if SMTP or SendGrid is being used
- **SMTP Mode:** If type is SMTP, then you can set if the service should be default (normal smtp servers) or gmail (Google Workspace servers)
- **From Email:** Sender email address
- **Header:** HTML code that will be applied above the email content
- **Footer:** HTML code that will be applied below the email content

**Note:** Actual SMTP/SendGrid credentials are configured in the `.env` file.

### Footer Settings

Customize the footer content:

- **Footer Text:** Copyright notice or additional info
- **Links:** Add custom links to the footer (appears above the text)

## Directory Settings

Configure access control for directories.

### Access Modes

Set how directories can be accessed:

**Public:**

- No authentication required
- Anyone with the link can access
- Useful for publicly shared assets

**Users-only:**

- Requires user login
- Any authenticated user can access
- Role permissions still apply

**CDN-only:**

- Only accessible via `/cdn/` routes
- Not visible in file manager to restricted users
- Useful for embedded assets

**Whitelist:**

- Restricted to specific IPs or domains
- Configure whitelist in directory settings
- Blocks all other access

### Configuring Directory Access

1. Navigate to the director you wish to configure
2. Select "Directory Permissions"
3. Choose an access mode
4. Configure whitelist/blacklist if needed
5. Set separate download permissions if desired
6. Click Save

### IP and Domain Whitelisting

**For Whitelist mode:**

Add allowed IPs:

- Individual IPs: `192.168.1.100`
- CIDR ranges: `192.168.1.0/24`
- IPv6 supported

Add allowed domains:

- `example.com`
- `www.example.com`
- Subdomains are matched separately

## File Settings

Configure access control for individual files.

### File Access Modes

Same options as directories:

- Public
- Users-only
- CDN-only
- Whitelist

File settings override directory settings.

### Download Permissions

Set separate permissions for downloading vs. viewing:

1. Navigate to the file's directory
2. Hit "Permissions" in the file's actions
3. Set view access mode
4. Set download access mode (can be more restrictive)
5. Click Save

**Example Use Case:**

- View mode: Public (anyone can view)
- Download mode: Whitelist (only specific IPs can download)

## Ban List Management

Block access for specific IPs, domains, users, or emails.

**Navigate to:** Admin Panel > Ban List

### Creating a Ban

1. Click "Add Ban"
2. Select ban type:
   - **IP Address:** Block specific IP or CIDR range
   - **Domain:** Block requests from specific domain
   - **User:** Block specific user account
   - **Email:** Block email address (prevents login)
3. Enter the value to ban
4. Add a reason (optional but recommended)
5. Set expiration (optional - leave blank for permanent)
6. Click Save

### Managing Bans

View all active bans:

- Ban type and value
- Reason
- Created date
- Expiration date
- Created by (admin who added it)

**Actions:**

- **Edit:** Modify ban details or expiration
- **Delete:** Remove the ban immediately

### Ban Behavior

Banned entities are:

- Blocked from all endpoints
- Prevented from accessing CDN routes
- Unable to log in (for user/email bans)
- Shown an access denied message

## Audit Logs

Review all system activity for security and compliance.

**Navigate to:** Admin Panel > Audit Logs

### What is Logged

- File uploads, downloads, views
- File/folder deletions, renames, moves
- Permission changes
- User logins
- Settings modifications
- Ban list changes

### Log Information

Each entry includes:

- **Timestamp:** When the action occurred
- **User:** Who performed the action (if authenticated)
- **IP Address:** Source IP
- **Action:** Type of action performed
- **Target:** File, folder, or user affected
- **Status:** Success or failure
- **Details:** Additional context

### Filtering Logs

Filter by:

- Date range
- User
- Action type
- Target resource
- Success/failure

## Backup and Maintenance

### Database Backup

Regularly backup your MongoDB database:

```bash
mongodump --uri="mongodb://127.0.0.1:27017/cdnmanager" --out=/path/to/backup
```

### File Backup

Backup the `cdn-files` directory:

```bash
cp -r /path/to/cdn-files /path/to/backup/
```

### Cleanup Tasks

**Orphaned Chunks:**

- Automatically cleaned every 30 minutes
- Can manually do via FTP

**Orphaned Thumbnails:**

- Removed when parent file is deleted
- Check for orphans periodically

**Old Sessions:**

- Automatically cleaned by MongoDB TTL index
- Sessions expire after 30 days

### Monitoring

Monitor these metrics:

- Disk space usage
- MongoDB performance
- API response times
- Error logs
- Failed login attempts

## Security Best Practices

### Owner Accounts

- Limit the number of owner accounts
- Use strong, unique email passwords
- Review owner list in `.env` regularly

### Email Security

- Use a dedicated email service
- Enable SPF/DKIM for your domain
- Monitor for suspicious login attempts

### Permission Management

- Follow principle of least privilege
- Regularly audit user permissions
- Remove permissions for inactive users

### Access Control

- Use whitelist mode for sensitive files
- Enable CDN-only mode for embedded assets
- Review ban list periodically

### Regular Audits

- Review audit logs weekly
- Check for unusual access patterns
- Monitor file upload activity
- Verify permission changes

### Updates

- Keep Node.js updated
- Update MongoDB regularly
- Monitor for CDN Manager updates from Shadow Devs
- Test updates in staging first

## Troubleshooting

### Users Cannot Log In

1. Check email configuration in `.env`
2. Verify SendGrid/SMTP is working
3. Check if user is banned
4. Review audit logs for failed attempts
5. Check maintenance mode status

### Files Not Uploading

1. Check disk space
2. Verify `BODY_SIZE_LIMIT` in `.env`
3. Check user permissions
4. Review server logs for errors
5. Check MongoDB connection

### Performance Issues

1. Monitor MongoDB performance
2. Check disk I/O
3. Review file sizes (thumbnails generating?)
4. Check number of concurrent uploads
5. Consider increasing server resources

### Permission Issues

1. Verify user has required role
2. Check directory/file settings
3. Review access mode configuration
4. Check if user is banned
5. Verify whitelist/blacklist rules
