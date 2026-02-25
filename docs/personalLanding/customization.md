---
sidebar_position: 4
---

# Customization

Learn how to customize the look and feel of your Personal Landing page beyond configuration. This guide covers themes, colors, fonts, and custom components.

## Styling Overview

Personal Landing is built with:

- **Tailwind CSS 4** - Utility-first CSS framework
- **daisyUI 5** - Component library with theming support

Most customization can be done without touching code, using Tailwind's utility classes and daisyUI's theming system.

## Changing Themes

### Using Built-in daisyUI Themes

daisyUI comes with [30+ pre-built themes](https://daisyui.com/docs/themes/). To change your theme, edit `src/routes/layout.css`.

The file uses Tailwind CSS v4's new `@plugin` syntax:

```css
@import 'tailwindcss';
@plugin '@tailwindcss/typography';
@plugin 'daisyui';

/* Use a built-in theme */
@theme {
	--daisyui-themes: light, dark, cupcake, cyberpunk;
}
```

Alternatively, you can configure daisyUI directly:

```css
@plugin 'daisyui' {
	themes:
		[ 'light',
		'dark',
		'cupcake',
		'cyberpunk'];
}
```

The first theme in the list becomes the default. See all themes: [daisyUI themes](https://daisyui.com/docs/themes/)

### Popular Theme Options

| Theme       | Style                      |
| ----------- | -------------------------- |
| `light`     | Clean, minimal light theme |
| `dark`      | Modern dark theme          |
| `cupcake`   | Soft pastels               |
| `bumblebee` | Yellow/black               |
| `emerald`   | Green accents              |
| `corporate` | Professional blue          |
| `synthwave` | Retro 80s                  |
| `cyberpunk` | Neon highlights            |
| `valentine` | Pink/romantic              |
| `aqua`      | Cool blues                 |

### Theme Switcher

To let users toggle between light and dark, configure it in `src/routes/layout.css`:

```css
@plugin 'daisyui' {
	themes:
		[ 'light',
		'dark'];
	darktheme: 'dark';
}
```

Then add a theme toggle button in your layout. daisyUI will handle the switching automatically via the `data-theme` attribute.

## Custom Theme

Create your own theme by defining custom colors in `src/routes/layout.css` using the `@plugin 'daisyui/theme'` syntax:

```css
@import 'tailwindcss';
@plugin '@tailwindcss/typography';
@plugin 'daisyui';

/* Generate themes easily: https://daisyui.com/theme-generator */
@plugin 'daisyui/theme' {
	name: 'mytheme';
	default: true;
	prefersdark: false;
	color-scheme: 'light';

	/* Colors use oklch format for better color accuracy */
	--color-primary: oklch(54% 0.245 262.881); /* Main brand color */
	--color-primary-content: oklch(97% 0.014 254.604); /* Text on primary */
	--color-secondary: oklch(60% 0.118 184.704); /* Secondary accent */
	--color-secondary-content: oklch(98% 0.014 180.72);
	--color-accent: oklch(55% 0.288 302.321); /* Highlight color */
	--color-accent-content: oklch(97% 0.014 308.299);
	--color-neutral: oklch(21% 0.006 285.885); /* Neutral elements */
	--color-neutral-content: oklch(98% 0 0);
	--color-base-100: oklch(100% 0 0); /* Background */
	--color-base-200: oklch(96% 0.001 286.375); /* Secondary background */
	--color-base-300: oklch(92% 0.002 286.033); /* Tertiary background */
	--color-base-content: oklch(20% 0.005 285.823); /* Text color */
	--color-info: oklch(60% 0.126 221.723);
	--color-success: oklch(59% 0.145 163.225);
	--color-warning: oklch(68% 0.162 75.834);
	--color-error: oklch(57% 0.245 27.325);

	/* Border radius */
	--radius-selector: 0.5rem;
	--radius-field: 0.5rem;
	--radius-box: 0.5rem;

	/* Sizing */
	--size-selector: 0.21875rem;
	--size-field: 0.28125rem;
	--border: 1.5px;
}
```

**Tip:** Use the [daisyUI Theme Generator](https://daisyui.com/theme-generator) to visually create your theme and get the oklch color values.

The dev server will hot-reload when you save the file.

## Customizing Colors

### Via CSS Theme Variables

Extend Tailwind's color palette in `src/routes/layout.css`:

```css
@theme {
	--color-brand-50: #ebf5ff;
	--color-brand-100: #d1e9ff;
	--color-brand-500: #4a90e2;
	--color-brand-900: #1e3a8a;
}
```

Or use oklch format for better color accuracy:

```css
@theme {
	--color-brand-50: oklch(96% 0.02 240);
	--color-brand-500: oklch(61% 0.15 240);
	--color-brand-900: oklch(25% 0.08 240);
}
```

Use in components: `class="bg-brand-500 text-brand-50"`

### Per-Section Colors

Edit the section components directly in `src/lib/components/sections/` to change specific background colors:

```svelte
<section class="bg-primary text-primary-content px-4 py-16">
  <!-- Content -->
</section>
```

Common daisyUI color classes:

- `bg-base-100`, `bg-base-200`, `bg-base-300` - Backgrounds
- `bg-primary`, `bg-secondary`, `bg-accent` - Themed backgrounds
- `text-base-content` - Body text
- `text-primary`, `text-secondary` - Themed text

## Changing Fonts

### Using Google Fonts

1. Add the font import to `src/routes/+layout.svelte`:

```svelte
<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</svelte:head>
```

2. Update `src/routes/layout.css`:

```css
@theme {
	--font-family-sans: 'Inter', system-ui, sans-serif;
	--font-family-heading: 'Poppins', system-ui, sans-serif;
}
```

3. Use the font:

```svelte
<h1 class="font-heading text-4xl font-bold">Your Name</h1>
<p class="font-sans">Body text here</p>
```

### System Fonts

For better performance, use system fonts in `src/routes/layout.css`:

```css
@theme {
	--font-family-sans:
		-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

## Custom Sections

### Creating a New Section

1. Copy the template at `src/lib/components/sections/_Template.svelte`
2. Rename it (e.g., `MySection.svelte`)
3. Edit the component
4. Add config to `config.json`:

```json
{
	"sections": [
		{
			"type": "mySection",
			"enabled": true,
			"title": "My Custom Section",
			"customData": "Whatever you need"
		}
	]
}
```

The section will automatically appear!

### Section Component Structure

```svelte
<script>
  let { data } = $props();
  // data contains your config from config.json
</script>

<section id="my-section" class="px-4 py-16 bg-base-200/50">
  <div class="max-w-4xl mx-auto">
    {#if data.title}
      <h2 class="text-3xl font-bold text-center mb-12">
        {data.title}
      </h2>
    {/if}

    <!-- Your custom content -->
    <div class="text-center">
      <p>{data.customData}</p>
    </div>
  </div>
</section>
```

## Modifying Existing Sections

### Edit Section Files

All sections are in `src/lib/components/sections/`. Edit them directly to change layout or styling.

Example: Make the About section wider:

```svelte
<!-- AboutCentered.svelte -->
<section class="px-4 py-16">
  <!-- Change max-w-4xl to max-w-6xl -->
  <div class="max-w-6xl mx-auto">
    <!-- content -->
  </div>
</section>
```

### Add Custom Classes

Inject custom classes via Tailwind:

```svelte
<section class="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-16">
  <!-- Gradient background -->
</section>
```

## Icons

### Changing Icons

The project uses inline SVG icons stored in the component script tags. Many section components define icon mappings in their `<script>` section using a `defaultIcons` object.

For example, in `src/lib/components/sections/Services.svelte`:

```svelte
<script>
  const defaultIcons = {
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    design: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
    consulting: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    default: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  };
</script>
```

To change or add icons:

1. Open the section file (e.g., `src/lib/components/sections/Services.svelte` or `src/lib/components/sections/Links.svelte`)
2. Find the `defaultIcons` object in the `<script>` tag
3. Replace the SVG string for an existing icon or add a new one:

```svelte
<script>
  const defaultIcons = {
    // ... existing icons
    custom: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="Your custom SVG path here"/></svg>`
  };
</script>
```

### Icon Libraries

To use an icon library like [Lucide](https://lucide.dev/) or [Heroicons](https://heroicons.com/):

1. Install the library:

```bash
npm install lucide-svelte
```

2. Import and use:

```svelte
<script>
  import { Github, Linkedin } from 'lucide-svelte';
</script>

<Github class="w-6 h-6" />
<Linkedin class="w-6 h-6" />
```

## Layout Customization

### Page Layout

The main layout is in `src/routes/+layout.svelte`. Edit this file to:

- Add a navigation bar
- Include global scripts
- Add site-wide styles

### Section Spacing

Control spacing between sections by editing class names:

```svelte
<section class="py-8">  <!-- Smaller spacing -->
<section class="py-16"> <!-- Default spacing -->
<section class="py-24"> <!-- Larger spacing -->
```

### Container Width

Adjust max width for sections:

```svelte
<div class="max-w-2xl mx-auto">  <!-- Narrow -->
<div class="max-w-4xl mx-auto">  <!-- Default -->
<div class="max-w-6xl mx-auto">  <!-- Wide -->
<div class="max-w-full mx-auto"> <!-- Full width -->
```

## Advanced Customization

### Custom CSS

Add global styles in `src/routes/layout.css` after the theme definitions:

```css
/* Custom styles */
.custom-gradient {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.custom-shadow {
	box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

### Animations

Add Tailwind animations:

```svelte
<div class="animate-fade-in">
  <!-- Fades in -->
</div>

<div class="transition-all duration-300 hover:scale-105">
  <!-- Scales on hover -->
</div>
```

Define custom animations in `src/routes/layout.css`:

```css
@theme {
	/* Define keyframes */
	--animate-fade-in: fadeIn 1s ease-in-out;
	--animate-slide-up: slideUp 0.5s ease-out;
}

/* Define the actual keyframe animations */
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes slideUp {
	0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
```

### Responsive Design

Tailwind's responsive prefixes work throughout:

```svelte
<div class="text-sm md:text-base lg:text-lg">
  <!-- Smaller on mobile, larger on desktop -->
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
</div>
```

## Tips

### Preview Changes

The dev server updates instantly. Save your file and check the browser.

### Use Browser DevTools

- Right-click → Inspect to see applied classes
- Edit classes in DevTools to test before committing

### Reference daisyUI Components

Browse [daisyUI components](https://daisyui.com/components/) for ready-made UI elements:

- Buttons, cards, badges
- Alerts, modals, tooltips
- Forms, inputs, dropdowns

### Keep It Simple

Start with daisyUI themes and Tailwind utilities. Only add custom CSS when necessary.
