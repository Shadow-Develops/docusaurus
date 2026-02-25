---
sidebar_position: 3
---

# Applications & Forms

The applications system lets you build custom forms - staff applications, event sign-ups, feedback forms, or anything else. Visitors submit responses that staff can review in the admin panel.

Requires the `manageApplications` permission.

## Public Side

Forms are listed at `/applications`. Visitors can browse open forms and filter by status:

- **Open** - accepting submissions
- **Full** - reached the maximum number of submissions
- **Closed** - manually closed by an admin

Clicking a form opens it at `/applications/[slug]`.

Submitted responses are visible to the submitter at `/submissions`.

## Managing Forms

Go to **Admin Panel > Applications** to create and manage forms and review submissions.

### Creating a Form

Click **New Form** and configure:

| Field                         | Notes                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| **Title**                     | Shown in the public form listing and at the top of the form                                      |
| **Slug**                      | URL path for the form (e.g., `staff-app`)                                                        |
| **Description**               | Short description shown in the listing card                                                      |
| **Status**                    | `open` or `closed`                                                                               |
| **Max Submissions**           | Optional cap on total accepted submissions - the form automatically shows as "Full" when reached |
| **Submission Limit Per User** | Optional cap on how many times a single user can submit                                          |
| **Require Login**             | Whether users must be logged in to submit                                                        |

### Form Fields

After creating the form, add fields to it. Each field has:

- **Label** - the question or field name shown to the user
- **Type** - see field types below
- **Required** - whether the field must be filled in
- **Placeholder** - hint text inside the input
- **Order** - drag to reorder fields

**Available field types:**

| Type       | Description                  |
| ---------- | ---------------------------- |
| `text`     | Single-line text input       |
| `textarea` | Multi-line text area         |
| `select`   | Dropdown with custom options |
| `checkbox` | Boolean yes/no checkbox      |
| `radio`    | Multiple choice (pick one)   |
| `number`   | Numeric input                |
| `url`      | URL input with validation    |
| `email`    | Email input with validation  |

For `select` and `radio`, add a list of choices in the field configuration.

### Reviewing Submissions

Go to **Admin Panel > Applications > Submissions** to see all responses.

Each submission shows:

- The submitter's username and avatar
- Submission date and time
- Status badge: `pending`, `under review`, `accepted`, or `denied`

Click any submission to view the full response. From there you can:

- Change the status to **Under Review**, **Accepted**, or **Denied**
  - Provide a reason with the status change
- Leave an internal staff note (not visible to the applicant)
- Leave public comments, with the option to let the applicant reply

### Closing a Form

Set the form status to **Closed** in the edit view. Closed forms are still listed publicly but show "Not Accepting Applicants" and the submit button is disabled.

If you set a **Max Submissions** limit, the form closes automatically when reached and shows "Max Submissions Reached" instead.

## Discord Notifications

When a new application is submitted, Community Template can ping a Discord role in a configured channel. Set this up in **Admin Panel > Discord > Application Notifications**.
