---
sidebar_position: 7
pagination_next: null
pagination_prev: null
---

# Custom Pages

The Custom Pages feature allows you to create standalone pages with custom content and URLs. Perfect for creating About pages, Terms of Service, Privacy Policy, or any other unique content that doesn't fit into other categories.

## Accessing Custom Pages Management

Navigate to **Admin Panel > Pages > Custom Pages** to access the custom pages management interface.

## Creating a Custom Page

1. Navigate to **Admin Panel > Pages > Custom**
2. In the "Create New Page" section, fill in:
   - **Page Title**: The heading shown on the page
   - **URL Slug**: Unique identifier for the page URL
   - **Content**: Full page content in markdown
   - **Requires Login**: Toggle if page should require authentication
3. Click "Create Page"

The page will be immediately accessible at `/{slug}`

## Custom Page Fields

### Page Title

The main heading displayed at the top of the custom page.

**Examples:**

```
About Us
Terms of Service
Privacy Policy
Frequently Asked Questions
Contact Information
Shipping & Returns
```

### URL Slug

Creates the page's unique URL path.

**Format:**

- Letters (a-z, A-Z)
- Numbers (0-9)
- Hyphens for word separation
- No spaces or special characters

**Examples:**

- `about` → `/about`
- `terms-of-service` → `/terms-of-service`
- `privacy-policy` → `/privacy-policy`
- `contact-us` → `/contact-us`

**Slug Guidelines:**

- Use lowercase letters
- Keep slugs short but descriptive
- Use hyphens to separate words
- Never change slugs after sharing links
- Avoid conflicts with existing routes

### Content

The main body content of your custom page, written in markdown.

**Markdown Support:**

Full markdown syntax is supported:

```markdown
# Main Heading

## Section Heading

### Subsection

**Bold text** and _italic text_

- Bullet points
- Another point

1. Numbered lists
2. Second item

[Link text](https://example.com)

![Image](https://example.com/image.jpg)

> Blockquote text

`Inline code`

&grave;&grave;&grave;
Code block
&grave;&grave;&grave;
```

_You can find a full list of our supported markdown via the [Markdown page](/shadowStore/markdown)._

**Content Examples:**

**About Page:**

```markdown
# About Our Company

Founded in 2024, we are dedicated to providing...

## Our Mission

To deliver exceptional...

## Our Team

Meet the people behind...
```

**Terms of Service:**

```markdown
# Terms of Service

Last updated: January 1, 2024

## 1. Acceptance of Terms

By accessing this website...

## 2. User Obligations

You agree to...
```

### Requires Login

Toggle to require users to be logged in to view the page.

**When to Use:**

- Member-only content
- Customer resources
- Account-specific information
- Exclusive content

**Public Pages (Login Not Required):**

- About Us
- Terms of Service
- Privacy Policy
- Contact Information
- FAQ

**Protected Pages (Login Required):**

- Member Resources
- Customer Portal
- Account Settings
- Exclusive Content

## Managing Custom Pages

### Viewing All Pages

The pages table displays:

- **Title**: Page heading
- **URL**: Full path to the page
- **Auth Required**: Badge showing if login is required
- **Actions**: Customize and Edit buttons

### Editing a Page

**From Admin Panel:**

1. Click "Customize" to open the page customization interface
2. Or click the Edit link to go to `/{slug}#edit`

**Direct Editing:**

1. Visit the page at `/{slug}`
2. Add `#edit` to the URL: `/{slug}#edit`
3. Edit interface appears (if authorized)
4. Modify title, content, or settings
5. Click "Save Changes"

**Edit Permissions:**

- Store owners
- Users with `managePages` permission

### Deleting a Page

1. Navigate to **Admin Panel > Pages > Custom**
2. Click "Delete" on the page you want to remove
3. Confirm deletion in the modal dialog
4. The page and its content will be permanently removed

:::warning
Deleting a custom page is permanent and cannot be undone. This will:

- Remove the page content
- Delete the URL route
- Remove all associated data
  :::

## Common Custom Page Types

### About Us

Introduce your company or organization:

```markdown
# About Us

## Our Story

Founded in 2024...

## What We Do

We specialize in...

## Our Values

- Quality
- Innovation
- Customer Service
```

### Privacy Policy

Detail your data practices:

```markdown
# Privacy Policy

Last Updated: January 1, 2024

## Information We Collect

We collect the following...

## How We Use Information

Your information is used to...

## Data Protection

We implement security measures...
```

### Terms of Service

Outline usage terms:

```markdown
# Terms of Service

## 1. Agreement to Terms

By using our service...

## 2. User Responsibilities

You agree to...

## 3. Intellectual Property

All content is protected...
```

### FAQ

Answer common questions:

```markdown
# Frequently Asked Questions

## General

### What is Shadow Store?

Shadow Store is...

### How do I get started?

To begin...

## Billing

### What payment methods do you accept?

We accept...
```

### Contact

Provide contact information:

```markdown
# Contact Us

## Get in Touch

Have questions? Reach out to us:

**Email:** support@example.com
**Phone:** (555) 123-4567

## Office Hours

Monday-Friday: 9am-5pm PST
```

### Shipping & Returns

Detail policies:

```markdown
# Shipping & Returns

## Shipping Information

We ship orders within...

## Return Policy

Items can be returned within 30 days...

## Exchanges

To exchange an item...
```

## Permissions

To manage custom pages, users must have:

- `owner` - Full store owner access
- `managePages` - Page management permissions

## Troubleshooting

### Page Not Accessible

**Solutions:**

- Verify the page was created successfully
- Check the URL slug is correct
- Ensure no typos in the URL
- Check if login is required
- Verify user is logged in if required

### Markdown Not Rendering

**Solutions:**

- Check markdown syntax is correct
- Verify code blocks are properly closed
- Test markdown in a preview tool
- Check for special characters needing escape
- Review markdown documentation

### Edit Button Not Showing

**Solutions:**

- Verify user has `managePages` permission
- Check user is logged in as admin/owner
- Add `#edit` manually to URL
- Clear browser cache
- Try different browser

### URL Conflict

**Solutions:**

- Choose a different slug
- Check for existing routes
- Avoid system reserved paths
- Use more specific slug names
- Check for duplicate slugs

### Content Not Saving

**Solutions:**

- Check internet connection
- Verify no special characters causing issues
- Try saving in smaller sections
- Clear browser cache
- Check browser console for errors
- Try different browser
