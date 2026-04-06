---
sidebar_position: 3
---

# Forms

Blog Builder includes a form builder for collecting submissions from site visitors. Forms can be published as standalone pages or embedded inside page sections.

## Admin Panel

- **Location:** Admin Panel > Forms (`/admin/forms`)
- **Required permission:** `manageForms`

## Form Types

| Type        | Description                                                         |
| ----------- | ------------------------------------------------------------------- |
| `full_page` | The form is accessible at its own public URL: `/form/[slug]`        |
| `section`   | The form is embedded inside a page using the **Forms** section type |

## Form Statuses

| Status     | Behavior                              |
| ---------- | ------------------------------------- |
| `draft`    | Not publicly accessible               |
| `active`   | Accepting submissions from the public |
| `archived` | No longer accepting submissions       |

## Building a Form

Each form has the following settings:

| Field                         | Description                                              |
| ----------------------------- | -------------------------------------------------------- |
| Title                         | Internal name for the form                               |
| Description                   | Optional description shown on the form page              |
| Slug                          | URL path for `full_page` forms (e.g. `/form/contact`)    |
| Submit Button Label           | Text shown on the submit button                          |
| Success Message & Description | Shown to the user after successful submission            |
| Allow Replies                 | When enabled, admins can reply to individual submissions |
| Notification Email            | Receives an email when a new submission arrives          |
| Fields                        | The list of input fields (drag-reorderable)              |

## Field Types

| Type       | Description                                    |
| ---------- | ---------------------------------------------- |
| `text`     | Single-line text input                         |
| `email`    | Email address (validated on submission)        |
| `phone`    | Phone number (validated: 7-20 digits)          |
| `number`   | Numeric input with optional min/max            |
| `textarea` | Multi-line text input                          |
| `checkbox` | Boolean toggle (checked / unchecked)           |
| `radio`    | Single-choice selection from a list of options |
| `select`   | Dropdown selection from a list of options      |
| `rating`   | Numeric rating input                           |
| `file`     | File attachment                                |

Each field has a label, an internal name, and a required toggle. Type-specific options (like min/max for numbers or a list of choices for radio/select) are configured per-field.

## Submissions

Submissions are listed per-form in the admin panel. Each submission shows:

- All submitted field values
- Submission date and time
- Submission status (`open` or `closed`)
- Reply thread (if `Allow Replies` is enabled on the form)

### CSV Export

All submissions for a form can be exported as a CSV file from the submissions view.

### Reply Threads

If "Allow Replies" is enabled on the form, admins can send replies directly to individual submissions. Reply history is stored on the submission record.

## Email Notifications

If a notification email is set on the form, an email is sent to that address each time a new submission is received.

:::warning
Email must be configured in Settings > Email for notifications to work. See the [Email integration guide](/blogBuilder/integrations/email).
:::

## Public Routes

| Route          | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| `/form/[slug]` | Public form page (only for `full_page` forms with `active` status) |

<!--
TODO: check if this actually works, I don't think I allowed external requests
## API

`POST /api/forms/submit`

Submit a form programmatically. Accepts JSON:

```json
{
	"formId": "form-id-here",
	"data": {
		"fieldName": "value",
		"anotherField": "value"
	}
}
```

Returns:

```json
{
	"success": true,
	"submissionId": "submission-id-here"
}
```

All field validations (required fields, email format, phone format, number range, text length) are applied server-side.
-->
