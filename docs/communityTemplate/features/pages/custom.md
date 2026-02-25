---
sidebar_position: 2
---

# Custom Pages

Custom pages let you create any number of additional pages at your own URLs - about pages, rules, FAQs, guides, or anything else your community needs. They use the same section-based builder as the home page with the addition of access control. Requires the `managePages` permission.

## Managing Custom Pages

Go to **Admin Panel > Pages** to create and manage custom pages.

The page list shows all pages with their slug, status (enabled/disabled), and last updated time. You can search by title or slug.

### Creating a Page

Click **New Page** and fill in:

| Field           | Notes                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **Title**       | Shown at the top of the page and used to auto-generate the slug                                        |
| **Slug**        | The URL path (e.g., `about` → `/about`). Lowercase letters, numbers, and hyphens only. Must be unique. |
| **Description** | Optional meta description for SEO                                                                      |
| **Access**      | Who can view the page - see Access Control below                                                       |
| **Enabled**     | Whether the page is publicly visible                                                                   |

Pages start as **disabled** (draft mode) by default. Toggle enabled when you're ready to publish.

### Editing a Page

Click any page in the list to open its editor. From here you can:

- Update the title, slug, description, and access settings
- Build the page layout using sections (same section builder as the home page)
- Enable or disable the page

If you change a page's slug, the old URL stops working immediately. Update any links that point to it.

### Deleting a Page

Delete a page permanently from its edit page. This cannot be undone.

---

## Access Control

Each custom page can be restricted to specific audiences:

| Access Type           | Who can view                                                                                   |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| **Public**            | Everyone, including visitors who are not logged in                                             |
| **Logged In**         | Any user with an account who is logged in. Unauthenticated visitors are redirected to `/login` |
| **Specific Users**    | Only users whose account IDs you specify                                                       |
| **Admin Permissions** | Only users who hold one or more of the admin permissions you specify                           |

**Specific Users** - enter user IDs one per line. This is useful for beta testing a page with specific people before making it public.

**Admin Permissions** - select one or more permissions from the list. Any user with at least one of the selected permissions can view the page. Useful for internal staff pages (e.g., a page only viewable by users with `manageApplications`).

---

## Building the Page Layout

Custom pages use the same section types as the home page builder. See the [Home Page Builder](./home) documentation for a full reference of available sections and their options.

Everything available on the home page is also available on custom pages:

- Hero (all layout modes including carousel)
- Features, Stats, FAQ, Testimonials
- Gallery, Newsletter, Banner, Info, Text Content
- Video, Social Proof, Discord, Featured

Managing sections works the same way - add, drag to reorder, enable/disable, edit config, delete.

---

## Tips

- The slug must be unique across all custom pages and cannot conflict with built-in routes (e.g., `/blog`, `/admin`, `/auth`)
- Disabled pages return a 404 for all visitors, including admins
- Access control errors (logged-out users, insufficient permissions) return a 403 page
- All changes are saved immediately when you click **Save** - there is no auto-save
