---
sidebar_position: 2
---

# Configuration Guide

Everything in Personal Landing is configured through the `config.json` file at the root of your project. This guide covers all available options.

## Configuration Structure

The config file has three main parts:

```json
{
	"domain": "https://yoursite.com",
	"siteSettings": {},
	"footerSettings": {},
	"sections": []
}
```

## Domain

The base URL of your deployed site. Used for metadata and SEO.

```json
{
	"domain": "https://yoursite.com"
}
```

During development, this can be `http://localhost:5173`.

## Site Settings

Global settings that affect your entire site.

```json
{
	"siteSettings": {
		"siteName": "Your Name",
		"siteDescription": "A brief description of your site",
		"metaColor": "#4A90E2"
	}
}
```

### Options

| Field             | Type   | Description                                              |
| ----------------- | ------ | -------------------------------------------------------- |
| `siteName`        | string | Your name or site title (appears in browser tab and SEO) |
| `siteDescription` | string | Site description for search engines                      |
| `metaColor`       | string | Theme color for mobile browsers (hex code)               |

## Footer Settings

Configure the footer that appears at the bottom of your page.

```json
{
	"footerSettings": {
		"enabled": true,
		"text": "© {date} [{siteName}](https://yoursite.com). All rights reserved."
	}
}
```

### Options

| Field     | Type    | Description                                         |
| --------- | ------- | --------------------------------------------------- |
| `enabled` | boolean | Show or hide the footer                             |
| `text`    | string  | Footer text (supports variables and markdown links) |

### Variables in Footer Text

You can use these variables in the `text` field:

- `{date}` — Current year (e.g., 2024)
- `{siteName}` — Value from `siteSettings.siteName`

### Markdown Links in Footer

Use markdown syntax for clickable links:

```json
{
	"text": "© {date} [{siteName}](https://yoursite.com) • [Privacy](https://yoursite.com/privacy)"
}
```

## Sections

The `sections` array is where you define what appears on your page and in what order.

### Basic Section Structure

Every section has at least these fields:

```json
{
	"type": "sectionType",
	"enabled": true,
	"title": "Section Title"
}
```

### Common Fields

These fields are available for most sections:

| Field     | Type    | Required | Description                                        |
| --------- | ------- | -------- | -------------------------------------------------- |
| `type`    | string  | ✅ Yes   | Section type (hero, about, links, etc.)            |
| `enabled` | boolean | No       | Show/hide the section (default: true)              |
| `title`   | string  | No       | Section heading                                    |
| `variant` | string  | No       | Design variant (for sections with multiple styles) |

### Section Order

Sections appear in the order they're listed in the array:

```json
{
  "sections": [
    { "type": "hero", ... },     // Appears first
    { "type": "about", ... },    // Appears second
    { "type": "projects", ... }  // Appears third
  ]
}
```

### Multiple Instances

You can use the same section type multiple times:

```json
{
	"sections": [
		{
			"type": "hero",
			"variant": "centered",
			"name": "Main Hero"
		},
		{
			"type": "about",
			"variant": "split",
			"title": "About Me"
		},
		{
			"type": "links",
			"variant": "card",
			"title": "Social Media"
		},
		{
			"type": "links",
			"variant": "minimal",
			"title": "Business Links"
		}
	]
}
```

## Available Section Types

Here's a quick overview of all section types. See the [Sections Reference](./sections) for detailed documentation.

### Core Sections

| Type      | Description                       | Variants                                    |
| --------- | --------------------------------- | ------------------------------------------- |
| `hero`    | Page header with name/tagline     | centered, split, minimal, bold, card, links |
| `about`   | About section with bio and skills | centered, split, card, minimal              |
| `links`   | Social media and external links   | default, grid, card, minimal                |
| `contact` | Contact form and/or email button  | -                                           |

### Content Sections

| Type           | Description                           | Variants                          |
| -------------- | ------------------------------------- | --------------------------------- |
| `services`     | Services or offerings you provide     | -                                 |
| `projects`     | Portfolio projects with tags          | -                                 |
| `timeline`     | Work experience or education timeline | -                                 |
| `testimonials` | Client testimonials or reviews        | -                                 |
| `faq`          | Frequently asked questions            | -                                 |
| `stats`        | Statistics or achievements            | -                                 |
| `gallery`      | Image gallery                         | grid, masonry, lightbox, carousel |

## Example: Complete Configuration

Here's a complete, minimal config.json:

```json
{
	"domain": "https://alexsmith.dev",
	"siteSettings": {
		"siteName": "Alex Smith",
		"siteDescription": "Full-stack developer & designer creating digital experiences",
		"metaColor": "#4A90E2"
	},
	"footerSettings": {
		"enabled": true,
		"text": "© {date} {siteName}. All rights reserved."
	},
	"sections": [
		{
			"type": "hero",
			"enabled": true,
			"variant": "centered",
			"name": "Alex Smith",
			"tagline": "Full-stack Developer & Designer",
			"avatar": "/img/avatar.png",
			"showAvatar": true
		},
		{
			"type": "about",
			"enabled": true,
			"variant": "centered",
			"title": "About Me",
			"content": "I'm a passionate developer who loves creating beautiful, functional web applications. With expertise in modern JavaScript frameworks and a keen eye for design, I help bring ideas to life.",
			"skills": [
				"JavaScript",
				"TypeScript",
				"Svelte",
				"React",
				"Node.js",
				"Tailwind CSS"
			]
		},
		{
			"type": "projects",
			"enabled": true,
			"title": "Featured Projects",
			"items": [
				{
					"name": "Project One",
					"description": "A modern web application built with Svelte",
					"url": "https://github.com/alexsmith/project-one",
					"tags": ["Svelte", "TypeScript", "PostgreSQL"]
				},
				{
					"name": "Project Two",
					"description": "An API platform for developers",
					"url": "https://github.com/alexsmith/project-two",
					"tags": ["Node.js", "REST", "Docker"]
				}
			]
		},
		{
			"type": "links",
			"enabled": true,
			"variant": "card",
			"title": "Connect With Me",
			"items": [
				{
					"name": "GitHub",
					"url": "https://github.com/alexsmith",
					"icon": "github"
				},
				{
					"name": "LinkedIn",
					"url": "https://linkedin.com/in/alexsmith",
					"icon": "linkedin"
				},
				{
					"name": "Email",
					"url": "mailto:alex@example.com",
					"icon": "email"
				}
			]
		},
		{
			"type": "contact",
			"enabled": true,
			"title": "Get In Touch",
			"description": "Have a project in mind? Let's talk!",
			"button": {
				"enabled": true,
				"type": "email",
				"value": "alex@example.com",
				"text": "Send Email"
			},
			"form": {
				"enabled": false
			}
		}
	]
}
```
