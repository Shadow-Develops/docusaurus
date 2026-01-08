---
sidebar_position: 7
pagination_next: null
pagination_prev: null
---

# Theme & Branding

Customize your Shadow Store's appearance with powerful theming options. Shadow Store uses daisyUI themes and provides both preset themes and complete custom theme control.

## Accessing Theme Settings

Navigate to **Admin Panel > Theme** to access all theming options.

## Theme Types

Shadow Store offers two approaches to theming:

### Preset Themes

Choose from 29 professionally designed daisyUI themes:

**Light Themes:**

- Light, Cupcake, Bumblebee, Emerald, Corporate, Wireframe, Lofi, Pastel, Fantasy, Cmyk, Autumn, Lemonade, Winter

**Dark Themes:**

- Dark, Synthwave, Retro, Cyberpunk, Halloween, Forest, Aqua, Black, Luxury, Dracula, Business, Acid, Night, Coffee, Dim, Nord, Sunset

**Seasonal Themes:**

- Valentine, Garden

**To Use a Preset Theme:**

1. Navigate to **Admin Panel > Theme**
2. Select "Preset Themes" option
3. Choose your desired theme from the dropdown
4. Click "Save Theme Settings"
5. Refresh the page to see changes

:::info
Preview all daisyUI themes at [daisyui.com/docs/themes/](https://daisyui.com/docs/themes/)
:::

### Custom Themes

Create your own unique theme with full control over every color:

**Available Color Variables:**

- **Brand Colors**: Primary, Secondary, Accent (with content colors)
- **Base Colors**: Neutral, Base 100/200/300 (with content colors)
- **State Colors**: Info, Success, Warning, Error (with content colors)
- **Styling Options**: Border radius, sizing, borders, depth, noise

**To Create a Custom Theme:**

1. Navigate to **Admin Panel > Theme**
2. Select "Custom Theme" option
3. Either:
   - Import from daisyUI Theme Generator (Quick Import)
   - Manually enter color values

## Using the daisyUI Theme Generator

The easiest way to create custom themes is with the daisyUI Theme Generator:

1. Visit [daisyui.com/theme-generator](https://daisyui.com/theme-generator)
2. Customize colors using the visual color pickers
3. Click the "CSS" button to copy the generated configuration
4. Return to **Admin Panel > Theme**
5. Select "Custom Theme"
6. Paste the CSS into the "Quick Import" textarea
7. Click "Import Theme"
8. Fields will auto-populate with your theme values
9. Click "Save Theme Settings"

:::tip
The Quick Import feature automatically parses daisyUI CSS and populates all color fields for you.\
It does not save the settings after import, you still need to hit the save button.
:::

## Custom Theme Color Reference

### Brand Colors

**Primary** - Your main brand color

```
oklch(65.69% 0.196 275.75)
```

Used for: Main buttons, links, primary actions

**Secondary** - Secondary brand color

```
oklch(74.8% 0.26 342.55)
```

Used for: Secondary buttons, accents

**Accent** - Accent color for highlights

```
oklch(76.76% 0.184 183.61)
```

Used for: Highlights, special elements

Each brand color has a corresponding **Content** color for text/icons displayed on that color background.

### Base Colors

**Neutral** - Neutral dark color

```
oklch(23.04% 0.065 252.42)
```

**Base 100** - Main surface color

```
oklch(25.3% 0.015 252.42)
```

Used for: Page backgrounds

**Base 200** - Darker surface shade

```
oklch(22.77% 0.013 252.42)
```

Used for: Elevated surfaces

**Base 300** - Even darker surface shade

```
oklch(20.23% 0.012 252.42)
```

Used for: Highest elevation surfaces

**Base Content** - Text color for base backgrounds

```
oklch(89.82% 0.011 252.42)
```

### State Colors

**Info** - Informational messages

```
oklch(70.76% 0.221 231.08)
```

**Success** - Success messages

```
oklch(62.8% 0.257 149.57)
```

**Warning** - Warning messages

```
oklch(84.71% 0.199 83.87)
```

**Error** - Error messages

```
oklch(65.69% 0.257 27.33)
```

Each state color has a corresponding **Content** color.

### Styling Options

**Border Radius** (Box, Button, Selector, Field)

```
1rem, 0.5rem, 0rem, 1rem
```

Controls the roundedness of elements

**Size** (Selector, Field)

```
0.25rem
```

Controls element sizing

**Border**

```
1px
```

Border width for elements

**Depth**

```
1
```

Shadow depth multiplier

**Noise**

```
1
```

Noise texture intensity

## Seasonal & Holiday Effects

Add festive decorations to your site with seasonal effects:

**Available Effects:**

- **Winter** - Falling snowflakes with glow effects
- **Halloween** - Cobwebs, animated spiders, flying bats, floating ghosts
- **Spring** - Flowers blooming from bottom, fluttering butterflies
- **Summer** - Pulsing sun, bouncing beach balls, animated waves
- **Fall** - Swirling autumn leaves with realistic patterns
- **Thanksgiving** - Harvest items (pumpkins, wheat, corn, acorns) drifting down
- **Valentine's Day** - Floating hearts with pink gradient background
- **Easter** - Hopping colorful eggs and bunnies
- **St. Patrick's Day** - Spinning shamrocks with rainbow
- **4th of July** - Bursting fireworks and sparkling stars
- **New Year's** - Falling confetti

**To Enable Seasonal Effects:**

1. Navigate to **Admin Panel > Theme**
2. Scroll to "Season/Holiday Effects"
3. Select your desired effect from the dropdown
4. Click "Save Theme Settings"
5. Effects appear immediately on all pages

:::info
New seasonal effects are added periodically. Join the [Discord](https://discord.gg/shadowdevs) to suggest new effects!
:::

## Custom CSS

Inject custom CSS to further customize your store:

**To Add Custom CSS:**

1. Navigate to **Admin Panel > Theme**
2. Scroll to "Custom CSS" section
3. Enter your CSS in the textarea
4. Click "Save Theme Settings"

**Available CSS Variables:**

```css
/* Brand Colors */
var(--color-primary)
var(--color-primary-content)
var(--color-secondary)
var(--color-secondary-content)
var(--color-accent)
var(--color-accent-content)

/* Base Colors */
var(--color-neutral)
var(--color-neutral-content)
var(--color-base-100)
var(--color-base-200)
var(--color-base-300)
var(--color-base-content)

/* State Colors */
var(--color-info)
var(--color-info-content)
var(--color-success)
var(--color-success-content)
var(--color-warning)
var(--color-warning-content)
var(--color-error)
var(--color-error-content)
```

**Example Custom CSS:**

```css
/* Custom button hover effect */
.btn-primary:hover {
	transform: scale(1.05);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Custom product card styling */
.product-card {
	border: 2px solid var(--color-primary);
	border-radius: 1rem;
}

/* Gradient background for hero section */
.hero-section {
	background: linear-gradient(
		135deg,
		var(--color-primary),
		var(--color-secondary)
	);
}
```

## Color Format: OKLCH

Shadow Store uses the OKLCH color format for better color representation:

**Format:** `oklch(lightness% chroma hue)`

- **Lightness**: 0-100% (how light/dark)
- **Chroma**: 0-0.4 typically (color intensity)
- **Hue**: 0-360 (color angle on color wheel)

**Examples:**

```css
oklch(65% 0.2 275)   /* Purple */
oklch(75% 0.15 140)  /* Green */
oklch(85% 0.18 45)   /* Orange */
oklch(20% 0.02 250)  /* Dark gray-blue */
```

:::tip
Use the daisyUI Theme Generator's color pickers - they automatically generate OKLCH values for you!
:::

## Switching Themes

**To Change Themes:**

1. Navigate to **Admin Panel > Theme**
2. Select new theme type (Preset or Custom)
3. Configure new theme settings
4. Click "Save Theme Settings"
5. Refresh to see changes

:::warning
Switching from Custom to Preset will not delete your custom theme data - it will be preserved if you switch back.
:::

## Permissions

**Required Permissions:**

- `owner` - Full access
- `manageTheme` - Theme customization access

## Troubleshooting

### Theme Not Applying

**Possible Causes:**

- Browser cache needs clearing
- Page needs refreshing
- Custom CSS syntax errors

**Solutions:**

- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check browser console for CSS errors

### Colors Look Wrong

**Possible Causes:**

- Incorrect OKLCH format
- Missing content colors
- Browser doesn't support OKLCH

**Solutions:**

- Verify OKLCH values follow format
- Ensure all content colors are set
- Use modern browser (Chrome, Firefox, Safari)

### Custom CSS Not Working

**Possible Causes:**

- Syntax errors in CSS
- Specificity issues
- CSS cached

**Solutions:**

- Validate CSS syntax
- Use more specific selectors
- Clear cache and hard refresh
