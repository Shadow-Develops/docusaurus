---
sidebar_position: 9
---

# Audit Logs

The audit log records every admin action taken on the site - who did what, when, and from which IP address. This is useful for accountability, debugging, and security review.

Requires the `viewAuditLogs` permission.

## Viewing Audit Logs

Go to **Admin Panel > Audit Logs**.

The log displays a timeline of actions in reverse chronological order (newest first). Each entry shows:

- **Action** - what was done (e.g., `blog.create`, `user.ban`, `settings.update`)
- **Category** - broad grouping: `admin`, `user`, `system`, or `auth`
- **Performed by** - username and user ID of the admin who took the action
- **Target** - what was affected (e.g., a specific user ID, post slug, or setting name)
- **Details** - additional context about the action
- **IP address** - the client IP at the time of the action (Cloudflare and proxy headers are respected)
- **Timestamp** - exact date and time

## Filtering

The log can be filtered by:

- **Action** - search for a specific action string (e.g., `blog`)
- **Category** - filter to `admin`, `user`, `system`, or `auth` events
- **User** - show only actions by a specific admin
- **Target type** - filter by what was affected (user, blog_post, settings, etc.)
- **Date range** - limit results to a specific time window
- **Full-text search** - searches across action names and detail fields

Filters can be combined. Use the **Clear Filters** button to reset.

## Dashboard Stats

The admin dashboard shows a summary of audit activity:

- Actions in the last 24 hours
- Actions in the last 7 days
- Total actions recorded

## Discord Forwarding

Audit log entries can be automatically forwarded to a Discord channel. Configure the **Audit Channel** in **Admin Panel > Discord > Logs**. This lets you monitor admin activity in real time from Discord.

## Log Retention

The audit log automatically purges old entries to prevent unbounded database growth. Only the most recent **10,000 entries** are kept. Older entries are deleted automatically when new ones are added and the limit is exceeded.

## Error Logs

A separate **Error Log** exists for application errors (unhandled exceptions, failed requests, etc.). This is accessible at **Admin Panel > Error Logs** and is also shown as a summary widget on the admin dashboard.

Error logs are separate from audit logs and capture technical errors rather than admin actions.
