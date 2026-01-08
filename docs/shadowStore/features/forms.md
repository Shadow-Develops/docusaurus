---
sidebar_position: 6
pagination_next: null
pagination_prev: null
---

# Forms

The Forms feature provides a custom form builder that allows you to create, manage, and collect data from users. This system is perfect for applications, surveys, feedback forms, contact forms, and any other data collection needs.

## Creating a Form

1. Navigate to **Admin Panel > Forms**
2. Click "Create New Form"
3. Configure the form:
   - **Form Name**: Internal name for the form
   - **URL Slug**: Unique identifier for the form URL (e.g., `application-form`)
   - **Description**: Optional description shown to users
   - **Form Fields**: Add custom fields (text, textarea, email, number, etc.)
4. Configure field properties:
   - Field label
   - Field type (text, email, number, textarea, select, checkbox, radio)
   - Required/optional
   - Placeholder text
   - Validation rules
5. Click "Create Form"

## Form Fields

### Supported Field Types

- **Text**: Single-line text input
- **Textarea**: Multi-line text input
- **Email**: Email address with validation
- **Number**: Numeric input
- **Select**: Dropdown selection
- **Checkbox**: Multiple choice checkboxes
- **Radio**: Single choice radio buttons
- **Date**: Date picker
- **File**: File upload

### Field Configuration

Each field can be configured with:

- **Label**: Display name for the field
- **Required**: Whether the field must be filled
- **Placeholder**: Helper text shown in empty fields
- **Validation**: Custom validation rules
- **Options**: For select, checkbox, and radio fields

## Managing Forms

### Viewing Forms

Access all forms at **Admin Panel > Forms**. The list shows:

- Form name
- URL slug
- Number of submissions
- Creation date
- Actions (edit, delete, view submissions)

### Editing Forms

1. Navigate to **Admin Panel > Forms**
2. Click "Edit" on the desired form
3. Modify form fields, settings, or structure
4. Click "Save Changes"

### Deleting Forms

Forms can be deleted from the form management page. This will also delete all associated submissions.

:::warning
Deleting a form permanently removes all submission data. This action cannot be undone.
:::

## Submissions

### Public Form Access

Users can access forms via the public URL: `/form/[slug]`

Example: `/form/application-form`

### Viewing Submissions

Admins can view all submissions:

1. Navigate to **Admin Panel > Forms > Submissions**
2. Select a form to view its submissions
3. View submission details:
   - Submission date
   - User information (if logged in)
   - Form responses
   - Status (open/closed)

### Managing Submissions

For each submission, you can:

- **View Details**: See complete submission data
- **Change Status**: Mark as open or closed
- **Delete**: Remove submission
- **Export**: Download submission data

### User Access to Submissions

Users who submitted a form can view their own submission at `/form-subs/[submission-id]`. They can see:

- Their responses
- Submission date
- Current status

## Form Access Control

Forms can be configured with different access levels:

- **Public**: Anyone can submit (logged in or not)
- **Account Required**: Only logged-in users can submit
- **Role Restricted**: Only users with specific roles can submit

## Notifications

Configure email notifications for form submissions:

1. Navigate to form settings
2. Enable submission notifications
3. Set recipient email addresses
4. Customize notification template

Notifications can include:

- Form name
- Submission date
- User information
- All form responses

## Permissions

To manage forms, users must have:

- `owner` - Full store owner access
- `manageForms` - Form management permissions

Regular users can only:

- Submit forms (if allowed)
- View their own submissions
