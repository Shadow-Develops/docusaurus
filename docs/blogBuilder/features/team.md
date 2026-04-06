---
sidebar_position: 5
---

# Team

Blog Builder includes a team management system for displaying member profiles on your site.

## Admin Panel

- **Location:** Admin Panel > Team (`/admin/team`)
- **Required permission:** `managePages`

## Team Member Fields

Each team member has the following fields:

| Field        | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| Name         | Display name (required)                                     |
| Role         | Job title or role description                               |
| Bio          | Short biography                                             |
| Avatar       | Profile image                                               |
| Avatar Shape | `circle` or `square`                                        |
| Social Links | Array of label + URL pairs (e.g. Twitter, GitHub)           |
| Visible      | Show or hide on the public team page                        |
| Section Only | Member appears in Team sections but not on the `/team` page |

## Reordering

Team members can be drag-reordered in the admin panel. The order set here is reflected on the public team page and in any Team sections used on landing or custom pages.

## Section-Only Members

The "Section Only" toggle allows a team member to appear in the **Team** section type on landing pages and custom pages, while being excluded from the standalone `/team` page. This is useful for highlighting certain members in specific page sections without listing them on the main team page.

## Public Route

| Route   | Description                                  |
| ------- | -------------------------------------------- |
| `/team` | Public team page listing all visible members |

:::info
The `/team` route can be disabled in Settings > General > Page Toggles if you do not want a public team page.
:::
