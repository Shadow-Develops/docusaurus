---
sidebar_position: 1
pagination_next: null
pagination_prev: null
---

# Settings

The `/settings` command provides a comprehensive interface for configuring all bot settings for your Discord server. This command requires **Administrator** permissions and is only accessible to staff members.

## Overview

Settings are organized into four main categories:

- **General** - Basic bot settings and appearance
- **Shopify** - Shopify integration features
- **Roles** - Role management and permissions
- **Logging** - Configure log channels for various events

## Using the Settings Command

Run `/settings` to open the settings menu. You'll see an interactive embed with a dropdown menu to select categories and buttons to configure specific settings.

---

## General Settings

### Embed Color

Customize the color of all bot embeds using a hex color code.

**How to set:**

1. Select "General" from the category dropdown
2. Click **Set Color** button
3. Enter a hex code (e.g., `#5865F2`)

### Show PII (Personally Identifiable Information)

Toggle whether sensitive information like email addresses and phone numbers are displayed in bot responses.

- ✅ **Enabled** - PII is visible in embeds
- ❌ **Disabled** - PII is redacted (shown as `||REDACTED||`)

**Recommendation:** Keep this disabled for public channels to protect customer privacy.

### Company Line as Discord

When enabled, displays the customer's Discord username as the "Company" field in customer information embeds instead of their actual company name from Shopify.

### Join Notifications

Enable or disable automatic notifications when new members join the server and link their Shopify accounts.

---

## Shopify Settings

### Sales Dashboard

Toggle the automatic sales dashboard feature. When enabled, the bot will track and display sales analytics in designated channels.

### Inventory Alert Threshold

Set the minimum inventory level that triggers low stock alerts.

**How to set:**

1. Select "Shopify" from the category dropdown
2. Click **Set Inventory Threshold** button
3. Enter a number (e.g., `10`)

**Example:** If set to 10, you'll receive alerts when any product's inventory drops below 10 units.

---

## Role Settings

### Client Role

The role automatically assigned to users who link their Shopify customer accounts. This role identifies verified customers in your server.

**How to set:**

1. Select "Roles" from the category dropdown
2. Click **Set Client Role** button
3. Select a role from the dropdown

### Auto-Assign on Join

When enabled, the client role is automatically assigned to users when they successfully link their Shopify account. The role is only assigned if the customer has at least one order.

### Staff Roles

Define which roles have access to staff-only commands and features.

**Adding staff roles:**

1. Click **Add Staff Role** button
2. Select one or more roles (up to 10)

**Removing staff roles:**

1. Click **Remove Staff Role** button
2. Select the roles you want to remove

---

## Logging Settings

Configure dedicated channels for different types of bot logs. All log channels must be text channels or announcement channels.

### Available Log Types

#### Member Join/Leave

Logs when members join or leave the server, including account linking status.

#### Shopify Commands

Tracks all Shopify-related commands used in the server, including:

- Customer lookups
- Order queries
- Inventory checks
- Account linking/unlinking

#### Moderation

Records moderation actions and staff commands.

#### Sales

Logs all sales activity, order updates, and purchase notifications.

**How to set a log channel:**

1. Select "Logging" from the category dropdown
2. Click the button for the log type you want to configure
3. Select a channel from the dropdown

---

## Tips

- Settings are server-specific and persist across bot restarts
- All changes take effect immediately
- Click the **Refresh** button to reload the current settings view
- Settings are only visible to you (ephemeral messages)
