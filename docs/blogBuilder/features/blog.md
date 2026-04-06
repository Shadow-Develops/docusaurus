---
sidebar_position: 1
---

# Blog

Blog Builder includes a full blog management system with a draft/publish workflow, markdown editor, tag-based organization, and automatic SEO metadata.

## Admin Panel

- **Location:** Admin Panel > Blog (`/admin/blog`)
- **Required permission:** `manageBlogs`

## Creating a Post

Each blog post has the following fields:

| Field        | Description                                                       |
| ------------ | ----------------------------------------------------------------- |
| Title        | The post's display title                                          |
| Slug         | URL path (auto-generated from the title, editable)                |
| Content      | Markdown editor (see the [Markdown guide](/blogBuilder/markdown)) |
| Excerpt      | Short summary shown in post listings                              |
| Cover Image  | Optional header image for the post                                |
| Tags         | Comma-separated list of tags                                      |
| Status       | `draft`, `published`, or `archived`                               |
| Scope        | Site-wide or scoped to a custom page category                     |
| Publish Date | Optional custom date (defaults to current time when published)    |

## Post Statuses

| Status      | Behavior                                                                              |
| ----------- | ------------------------------------------------------------------------------------- |
| `draft`     | Not publicly visible. Admins with `manageBlogs` can preview.                          |
| `published` | Visible on the public blog.                                                           |
| `archived`  | Hidden from public listings. The URL remains accessible to admins with `manageBlogs`. |

## Blog Scopes

Posts can be published in one of two scopes:

- **Site-wide**: Post appears at `/blog` and `/blog/[slug]`
- **Category (scoped)**: Post is assigned to a custom page's blog category. It appears at `/[page-slug]/blog` and `/[page-slug]/blog/[post-slug]`

For scoped posts, the target custom page must have the "Has Blog" option enabled. See the [Pages](/blogBuilder/features/pages) documentation for details.

## Public Routes

| Route                           | Description                           |
| ------------------------------- | ------------------------------------- |
| `/blog`                         | Blog listing (filterable by tag)      |
| `/blog/[slug]`                  | Individual blog post                  |
| `/[page-slug]/blog`             | Scoped blog listing for a custom page |
| `/[page-slug]/blog/[post-slug]` | Scoped blog post                      |

## Tag Filtering

The `/blog` listing page supports filtering by tag via the `?tag=` query parameter (e.g. `/blog?tag=news`). All published tags are available from the `GET /api/tags` endpoint.

## Post Views

Each time a published blog post is loaded, its view count is incremented. Views are tracked on the post document and also recorded as `blog_view` events in the analytics system.

## Search

Blog posts are included in the site-wide search. Published posts are searchable by title, excerpt, and content body via `/search`.

:::info
Admins with `manageBlogs` can also see draft posts in search results when logged in.
:::

## Slug Availability

Before saving a new post, slug availability is checked via `GET /api/slugcheck/post?slug=[slug]`. If the slug is already in use, a number is automatically appended (e.g. `my-post-2`).
