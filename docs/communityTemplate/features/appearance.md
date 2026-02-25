---
sidebar_position: 8
---

# Appearance

Control the look and feel of your site - theme, colors, background, navbar, and footer. Requires the `manageSettings` permission.

---

## Theme

Go to **Admin Panel > Theme** to configure the visual theme.

### DaisyUI Themes

Community Template is built with [DaisyUI](https://daisyui.com/). You can select from any built-in DaisyUI theme (e.g., dark, light, cupcake, cyberpunk, etc.) or apply a fully custom color palette.

### Custom Theme

If you select "Custom" theme, you can configure each color individually:

- **Primary** - main brand color (buttons, links, highlights)
- **Secondary** - secondary accent
- **Accent** - third accent color
- **Neutral** - neutral tones for backgrounds and borders
- **Base** - page background colors (base-100, base-200, base-300)

Colors are defined as HSL values. The preview updates in real time.

### Background

Choose how the page background looks:

| Type            | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| **Theme**       | Uses the background color from the active DaisyUI theme     |
| **Solid Color** | A single custom color                                       |
| **Gradient**    | A gradient between two colors with a configurable direction |
| **Image**       | A background image (URL or uploaded file)                   |

---

## Navbar

Go to **Admin Panel > Navbar** to configure the navigation bar.

### Layout

| Option       | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| **Centered** | Logo centered, nav links on either side                      |
| **Double**   | Logo on the left, two configurable action links on the right |

### Style

| Option          | Description                           |
| --------------- | ------------------------------------- |
| **Default**     | Uses the theme's base color           |
| **Solid**       | Custom solid background color         |
| **Gradient**    | Gradient between two colors           |
| **Transparent** | No background (good with hero images) |

### Behavior

- **Sticky** - navbar stays at the top when scrolling
- **Blur** - adds a frosted glass blur effect behind the navbar
- **Shadow** - adds a drop shadow
- **Hide on scroll** - navbar hides when scrolling down, reappears when scrolling up

### Logo Size

Choose small, medium, or large logo display in the navbar.

### Navigation Items

Add, edit, reorder, and delete nav links. Each item has:

- **Label** - the text shown in the navbar
- **URL** - where it links to (internal path or full URL)
- **Dropdown** - add sub-items to create a dropdown menu
- **Mega Menu** - enable mega menu mode for a wider dropdown with descriptions

Drag items to reorder them. Reordering affects the live site immediately on save.

---

## Footer

Go to **Admin Panel > Footer** to configure the footer.

### Layout

- **Horizontal** - all content in a single row
- **Columns** - organized into multiple link columns

### Style

Same options as the navbar: default, solid, gradient.

### Social Icons

Add URLs for any of the supported social platforms. Leave a field empty to hide that icon:

- Discord
- Twitter / X
- YouTube
- Instagram
- TikTok
- GitHub
- Twitch
- Reddit
- Facebook
- LinkedIn
- Email

### Link Columns (Column layout only)

Add columns of links to the footer. Each column has a heading and a list of links with labels and URLs. Useful for organizing page links, policy pages, etc.

### Logo & Description

- **Logo size** - small, medium, or large
- **Logo description** - short text shown below the logo (e.g., a tagline)

### Copyright

Toggle the copyright notice on or off. The copyright text uses your site name automatically.

### Custom Text & Action

- **Text** - free text shown in the footer (supports basic HTML)
- **Action** - an optional footer-wide call-to-action (label + URL)

---

## Custom CSS

For fine-grained control beyond what the theme and navbar/footer settings allow, add global CSS in **Admin Panel > Settings > Custom CSS**. See [Site Settings](./site-settings#custom-css) for details.
