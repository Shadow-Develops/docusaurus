---
sidebar_position: 1
---

# Getting Started

Get your personal landing page up and running in minutes. This guide will walk you through installation, configuration, and your first deployment.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **pnpm** (package manager)
- **Git** installed on your system
- A **GitHub account** (for deployment)
- A code editor (VS Code recommended)
- Basic understanding of JSON (for configuration)

## Installation

### 1. Get the Template

You have two options:

**Option A: Fork the Repository (Recommended for GitHub Pages)**

1. Visit [github.com/Shadow-Develops/PersonalLanding](https://github.com/Shadow-Develops/PersonalLanding)
2. Click the **Fork** button in the top right
3. Clone your fork:

```bash
git clone https://github.com/yourusername/PersonalLanding.git
cd PersonalLanding
```

**Option B: Clone Directly**

```bash
git clone https://github.com/Shadow-Develops/PersonalLanding.git
cd PersonalLanding
```

You'll need to create your own repository later for deployment.

### 2. Install Dependencies

Install all required packages:

```bash
npm install
# or
pnpm install
```

This will install:

- SvelteKit and Svelte 5
- Tailwind CSS 4 and daisyUI 5
- Vite and build tools
- Other necessary dependencies

### 3. Start Development Server

Launch the local development server:

```bash
npm run dev
```

Your site will be available at `http://localhost:5173`

The dev server includes:

- **Hot Module Replacement (HMR)** - See changes instantly
- **Error Overlay** - Clear error messages during development
- **Fast Refresh** - Component state is preserved during updates

### 4. Initialize Git (If Not Already Done)

If you cloned the repository, Git is already set up. If you downloaded a ZIP file, initialize Git:

```bash
git init
git add .
git commit -m "Initial commit"
```

You'll need this for GitHub Pages deployment later.

## First Steps

### Configure Your Site

Open `config.json` in your code editor. This file controls your entire site.

#### Update Site Settings

```json
{
	"domain": "https://yoursite.com",
	"siteSettings": {
		"siteName": "Your Name",
		"siteDescription": "Your tagline or brief description",
		"metaColor": "#4A90E2"
	}
}
```

| Field             | Description                                 |
| ----------------- | ------------------------------------------- |
| `domain`          | Your site's URL (used for metadata)         |
| `siteName`        | Your name or brand (appears in browser tab) |
| `siteDescription` | SEO description for search engines          |
| `metaColor`       | Theme color for mobile browsers             |

#### Enable Your First Sections

The `sections` array defines what appears on your page and in what order.

Start simple with a hero and about section:

```json
{
	"sections": [
		{
			"type": "hero",
			"enabled": true,
			"variant": "centered",
			"name": "Your Name",
			"tagline": "Your professional tagline",
			"avatar": "/img/your-avatar.png",
			"showAvatar": true
		},
		{
			"type": "about",
			"enabled": true,
			"variant": "centered",
			"title": "About Me",
			"content": "Write a brief introduction about yourself...",
			"skills": ["Skill 1", "Skill 2", "Skill 3"]
		}
	]
}
```

**Save the file**, and your changes will appear instantly in the browser!

### Add Your Avatar/Logo

1. Place your image in the `static/img/` folder
2. Name it something memorable (e.g., `avatar.png`, `logo.png`)
3. Reference it in config: `"avatar": "/img/avatar.png"`

## Understanding the Structure

Here's what each folder does:

```
PersonalLanding/
├── config.json           # Your site configuration (edit this!)
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── sections/ # All section components
│   │   └── config.js     # Config loader
│   └── routes/
│       ├── +layout.svelte # Site layout/wrapper
│       └── +page.svelte   # Main page (auto-loads sections)
├── static/
│   ├── img/              # Your images go here
│   └── favicon.ico       # Browser icon
└── docs/                 # Documentation (you're reading it!)
```

**Important:** You should only need to edit `config.json` for most customizations!

## Common Tasks

### Disable a Section

Set `enabled: false`:

```json
{
	"type": "services",
	"enabled": false, // This section won't appear
	"title": "..."
}
```

### Reorder Sections

Sections appear in the order they're listed in the `sections` array. Just cut and paste to reorder:

```json
{
  "sections": [
    { "type": "hero", ... },     // First
    { "type": "projects", ... }, // Second
    { "type": "about", ... }     // Third
  ]
}
```

### Use a Section Multiple Times

You can add the same section type multiple times with different settings:

```json
{
	"sections": [
		{
			"type": "links",
			"variant": "card",
			"title": "Social Media",
			"items": [
				/* social links */
			]
		},
		{
			"type": "links",
			"variant": "minimal",
			"title": "Business Links",
			"items": [
				/* business links */
			]
		}
	]
}
```

## Build for Production

When you're ready to deploy to GitHub Pages:

```bash
npm run build
```

This creates an optimized static site in the `build/` folder with:

- Minified code
- Optimized images
- Pre-rendered HTML
- Compressed assets

### Preview the Production Build

Test the production build locally before deploying:

```bash
npm run preview
```

This serves the `build/` folder to ensure everything looks correct.

**Note:** When you push to GitHub, the automated workflow will build and deploy automatically. You don't need to run `npm run build` manually for deployments.

## Next Steps

Now that your site is running locally, here's what to do next:

1. **[Deployment Guide](./deployment)** - Set up automated GitHub Pages deployment with GitHub Actions
2. **[Configuration Reference](./configuration)** - Learn about all configuration options
3. **[Sections Reference](./sections)** - Explore all available section types and variants
4. **[Customization Guide](./customization)** - Customize colors, themes, and styles

**Ready to go live?** Follow the [Deployment Guide](./deployment) to set up automated GitHub Pages deployment. Every push to your main branch will automatically update your live site!

## Troubleshooting

### Port Already in Use

If port 5173 is taken, Vite will automatically try the next available port. Look at the terminal output for the actual URL.

### Changes Not Appearing

1. Make sure you saved `config.json`
2. Check the terminal for any error messages
3. Try refreshing the browser (Ctrl/Cmd + R)
4. Restart the dev server if issues persist

### Module Not Found Errors

Run `npm install` again to ensure all dependencies are installed.

### Build Errors

- Check that all image paths in `config.json` are correct
- Ensure all required fields for enabled sections are filled in
- Look for trailing commas or syntax errors in JSON
