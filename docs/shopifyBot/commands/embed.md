---
sidebar_position: 5
pagination_next: null
pagination_prev: null
---

# Embed

The `/embed` command allows staff members to create, save, and send custom Discord embeds. This command requires **Manage Messages** permissions and is only accessible to staff members.

## Overview

Embeds are rich message formats that include titles, descriptions, colors, and timestamps. They're perfect for:

- Announcements and updates
- Information displays
- Welcome messages
- Store promotions
- Rules and guidelines

---

## Subcommands

### Create and Send an Embed

Create a new embed and send it immediately to a channel.

**Command:** `/embed create`

**Required Options:**

- `title` - The embed title (appears at the top in bold)
- `description` - The main content of the embed

**Optional:**

- `color` - Hex color code (e.g., `#5865F2`). Defaults to server embed color
- `channel` - The channel to send the embed to. Defaults to current channel

**Example:**

```
/embed create
  title: New Product Launch
  description: Check out our latest collection now available!
  color: #FF5733
  channel: #announcements
```

**Result:**
The embed is sent to the specified channel, and you receive a confirmation message.

:::tip Color Codes
Find hex color codes at [htmlcolorcodes.com](https://htmlcolorcodes.com/) or use common ones:

- Blue: `#5865F2`
- Green: `#57F287`
- Red: `#ED4245`
- Purple: `#9B59B6`
- Gold: `#FEE75C`
  :::

---

### Save an Embed

Save an embed template for repeated use later.

**Command:** `/embed save`

**Required Options:**

- `name` - A unique name to identify this saved embed
- `title` - The embed title
- `description` - The embed description

**Optional:**

- `color` - Hex color code. Defaults to server embed color

**Example:**

```
/embed save
  name: welcome-message
  title: Welcome to Our Server!
  description: Thanks for joining! Make sure to read the rules.
  color: #00FF00
```

**Benefits of Saving:**

- Reuse embeds without recreating them
- Maintain consistent messaging
- Save time on frequently used embeds
- Track usage statistics

:::caution Unique Names
Each saved embed must have a unique name. If you try to save with an existing name, you'll get an error.
:::

---

### Send a Saved Embed

Retrieve and send a previously saved embed.

**Command:** `/embed send`

**Required:**

- `name` - The name of the saved embed (autocomplete enabled)

**Optional:**

- `channel` - The channel to send to. Defaults to current channel

**Example:**

```
/embed send
  name: welcome-message
  channel: #welcome
```

**Features:**

- **Autocomplete** - Start typing the name and matching embeds will appear
- **Usage Tracking** - Each time you send a saved embed, the usage count increases
- **Quick Access** - No need to remember titles, descriptions, or colors

---

### List All Saved Embeds

View all saved embeds in your server with their usage statistics.

**Command:** `/embed list`

**Example Output:**

```
📋 Saved Embeds

**welcome-message** - "Welcome to Our Server!" (Used 45 times)
**rules** - "Server Rules" (Used 12 times)
**store-hours** - "Store Hours" (Used 8 times)
```

This helps you:

- See which embeds are most popular
- Find the exact name for sending
- Identify unused embeds to delete

---

### Delete a Saved Embed

Remove a saved embed that's no longer needed.

**Command:** `/embed delete`

**Required:**

- `name` - The name of the saved embed to delete (autocomplete enabled)

**Example:**

```
/embed delete name: old-promo
```

:::caution
Deletion is permanent and cannot be undone. Make sure you have the correct embed name before confirming.
:::

---

## Embed Formatting

### Basic Structure

Every embed created includes:

- **Title** - Bold text at the top
- **Description** - Main content area
- **Color** - Left border and accent color
- **Timestamp** - Automatically added at the bottom

### Example Embed Display

```
┌─ [Title in Bold]
│  Description text goes here.
│  This is the main content area.
│
└─ 🕒 Timestamp
```

---

## Advanced Tips

### Multi-Line Descriptions

Discord automatically wraps text, but you can use line breaks in your description:

- Keep paragraphs short for readability
- Use markdown formatting (see below)

### Markdown Support

Embeds support Discord markdown:

- **Bold text:** `**text**`
- _Italic text:_ `*text*`
- **_Bold italic:_** `***text***`
- `Code:` `` `code` ``
- [Links:](https://example.com) `[text](url)`
- ~~Strikethrough:~~ `~~text~~`

**Example:**

```
/embed create
  title: Product Update
  description: **New Feature:** We've added *one-click checkout*! Visit our [store](https://example.com) today.
```

---

## Use Cases

### Announcements

```
/embed create
  title: 📢 Important Announcement
  description: The store will be closed for maintenance on Saturday.
  color: #FEE75C
  channel: #announcements
```

### Welcome Messages

Save a welcome embed and send it when new members join:

```
/embed save
  name: welcome
  title: Welcome to [Your Server]!
  description: We're glad you're here! Check out #rules and #faq to get started.
```

### Promotional Content

```
/embed create
  title: 🎉 Flash Sale!
  description: Use code **SAVE20** for 20% off all items. Ends tonight!
  color: #FF5733
  channel: #promotions
```

### Information Displays

```
/embed save
  name: store-info
  title: Store Information
  description: **Hours:** Mon-Fri 9AM-5PM\n**Support:** support@example.com
```

---

## Usage Analytics

Track how often saved embeds are used:

- View usage counts with `/embed list`
- Identify your most helpful embeds
- Optimize messaging based on popularity
- Clean up unused embeds

---

## Error Messages

### "Invalid color format"

Make sure your color is in hex format: `#` followed by 6 characters (0-9, A-F)

- ✅ Correct: `#5865F2`
- ❌ Wrong: `5865F2`, `blue`, `#58F`

### "An embed with name already exists"

That name is already taken. Choose a different name or delete the existing embed first.

### "No saved embed found with name"

The embed name doesn't exist. Use `/embed list` to see all saved embeds.

### "Failed to send embed"

The bot may lack permissions in the target channel. Ensure the bot can:

- View the channel
- Send messages
- Embed links

---

## Permissions Required

To use this command, you need:

- **Manage Messages** permission (Discord)
- A **staff role** configured in bot settings

---

## Tips for Staff

- Create a library of commonly used embeds for quick access
- Use consistent colors for different types of messages (e.g., blue for info, red for urgent)
- Save embeds with clear, descriptive names
- Test embeds in a staff channel before sending to public channels
- Keep descriptions concise - long text walls are hard to read
- Use the server's configured embed color for brand consistency
- Delete outdated embeds regularly to keep the list clean
