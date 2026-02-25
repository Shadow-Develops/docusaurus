---
sidebar_position: 2
---

# Blog

The blog lets you publish articles, news, and updates at `/blog`. Posts are written in Markdown and support categories, tags, cover images, and featured flags.

## Public Blog

Visitors can browse posts at `/blog`. The listing shows posts in a card grid (3 columns) sorted by publish date, newest first.

**Filtering options available to visitors:**

- **Search** - full-text across title, excerpt, and content
- **Tags** - click any tag to filter to posts with that tag
- **Category** - filter by category
- **Author** - click an author's name to see only their posts

Active filters are shown as dismissible badges. Multiple filters can be active at once. Each card shows the post title, excerpt, up to 3 tags (with a "+N more" indicator if there are more), author avatar and name, and publish time.

Individual posts are available at `/blog/[slug]`.

## Managing Posts

Go to **Admin Panel > Blog** to manage all posts. You need the `manageBlog` permission.

### Creating a Post

Click **New Post** and fill in:

| Field            | Notes                                                       |
| ---------------- | ----------------------------------------------------------- |
| **Title**        | Shown in the card and as the page heading                   |
| **Slug**         | URL path - auto-generated from the title, can be customized |
| **Excerpt**      | Short summary shown in the post card                        |
| **Content**      | Full Markdown body of the post                              |
| **Cover Image**  | Image shown at the top of the post and in the card          |
| **Category**     | Assign to a single category                                 |
| **Tags**         | Comma-separated tags for filtering                          |
| **Author**       | Defaults to the logged-in admin; can be changed             |
| **Featured**     | Marks the post with a "Featured" badge in the listing       |
| **Status**       | `draft` (not publicly visible) or `published`               |
| **Publish Date** | Defaults to now; can be backdated                           |

### Editing & Deleting

Click any post in the admin list to edit it. Posts can be returned to draft at any time. Deleting a post is permanent.

### Draft Posts

Draft posts are not visible to the public but can be previewed by logged-in admins. This is useful for writing posts ahead of time before you're ready to publish.

## Discord Notifications

When a new post is published, Community Template can automatically send a message to a Discord channel. Configure the channel ID and ping role in **Admin Panel > Discord > Notifications**.

## Markdown in Blog Posts

Blog posts support the full Markdown feature set - headings, lists, code blocks, images, links, alerts, and HTML. See the [Markdown guide](../markdown) for details.
