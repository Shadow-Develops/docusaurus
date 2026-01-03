---
sidebar_position: 2
pagination_next: null
pagination_prev: null
---

# FAQ Manager

The `/faq-manage` command allows administrators to create, edit, delete, and list frequently asked questions (FAQs) for your server. This command requires **Manage Guild** permissions and is only accessible to staff members.

## Overview

FAQs help you provide quick, consistent answers to common customer questions. Users can retrieve FAQs using the `/faq` command with a slug identifier.

---

## Subcommands

### Add a New FAQ

Create a new FAQ entry.

**Command:** `/faq-manage add`

**Required Options:**

- `title` - The FAQ title displayed in the embed
- `slug` - A unique identifier for quick access (e.g., "refund-policy", "shipping-times")
- `answer` - The FAQ answer (supports markdown and `\n` for new lines, max 4000 characters)

**Optional:**

- `category` - Organize FAQs by category (defaults to "General")

**Example:**

```
/faq-manage add
  title: Refund Policy
  slug: refund-policy
  answer: We offer full refunds within 30 days of purchase.\nNo questions asked!
  category: Policies
```

:::tip Slug Best Practices

- Use lowercase letters and hyphens
- Make it memorable and easy to type
- Examples: `shipping`, `returns`, `sizing-chart`
  :::

---

### Edit an Existing FAQ

Update an existing FAQ's title, answer, or category.

**Command:** `/faq-manage edit`

**Required:**

- `slug` - The slug of the FAQ you want to edit

**Optional (at least one required):**

- `title` - New title
- `answer` - New answer (supports markdown and `\n` for new lines)
- `category` - New category

**Example:**

```
/faq-manage edit
  slug: refund-policy
  answer: We offer full refunds within 60 days of purchase.\nNo questions asked!
```

:::info
You only need to provide the fields you want to update. Other fields will remain unchanged.
:::

---

### Delete an FAQ

Remove an FAQ from your server.

**Command:** `/faq-manage delete`

**Required:**

- `slug` - The slug of the FAQ to delete

**Example:**

```
/faq-manage delete slug: old-promo
```

:::caution
Deletion is permanent and cannot be undone. Make sure you have the correct slug before confirming.
:::

---

### List All FAQs

View all FAQs in your server, organized by category.

**Command:** `/faq-manage list`

**Example Output:**

```
📋 All FAQs

📁 General
**How to Order** (`how-to-order`) - Used 45 times
**Contact Us** (`contact`) - Used 23 times

📁 Policies
**Refund Policy** (`refund-policy`) - Used 67 times
**Shipping Policy** (`shipping`) - Used 89 times

12 total FAQs
```

---

## Using FAQs

Once created, FAQs can be accessed by anyone using:

**User Command:** `/faq slug: refund-policy`

This will display the FAQ in a formatted embed that users can read.

---

## Formatting Tips

The `answer` field supports Discord markdown:

- **Bold text:** `**text**`
- _Italic text:_ `*text*`
- `Code:` `` `code` ``
- [Links:](https://example.com) `[text](url)`
- Lists: Use `\n• Item 1\n• Item 2`
- Line breaks: Use `\n` for new lines

**Example with formatting:**

```
**Our Guarantee**\n\nWe offer:\n• 30-day returns\n• Free shipping over $50\n• 24/7 support\n\nQuestions? Contact us at support@example.com
```

---

## Usage Analytics

Each FAQ tracks how many times it's been used. This helps you:

- Identify the most helpful FAQs
- Find questions customers ask frequently
- Optimize your FAQ content

View usage counts with `/faq-manage list`.

---

## Tips

- Keep answers concise and easy to understand
- Use categories to organize related FAQs
- Review and update FAQs regularly
- Create slugs that are intuitive and memorable
- Use markdown formatting for better readability
- Monitor usage counts to prioritize important FAQs
