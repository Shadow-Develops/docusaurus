---
sidebar_position: 1
---

# Personal Landing

A modern, customizable landing page template for showcasing your personal brand, projects, and contact information.

## Features

- **Multiple Section Types** - 10 unique section types including Hero, About, Services, Projects, Gallery, Timeline, Testimonials, FAQ, Links, and Contact
- **Multiple Variants** - Each section comes with multiple design variants (e.g., Hero has 6 variants: Centered, Split, Minimal, Bold, Card, Links)
- **JSON Configuration** - Configure your entire site through a single `config.json` file - no code changes needed
- **Fully Static** - Deploys anywhere static sites can be hosted (Vercel, Netlify, GitHub Pages, etc.)
- **Modern Tech Stack** - Built with the latest versions of Svelte 5, SvelteKit, Tailwind CSS 4, and daisyUI 5
- **Responsive Design** - Mobile-first design that looks great on all devices
- **Customizable Themes** - Built on daisyUI's theming system with easy color customization
- **Fast Performance** - Optimized builds with Vite and SvelteKit's static adapter

## Tech Stack

| Category   | Technologies   |
| ---------- | -------------- |
| Framework  | SvelteKit      |
| UI Library | Svelte 5       |
| Styling    | Tailwind CSS 4 |
| Components | daisyUI 5      |
| Build Tool | Vite           |
| Deployment | Static Adapter |

## How It Works

1. **Configure** - Edit `config.json` to set up your site content, sections, and order
2. **Customize** - Adjust colors, themes, and styling via Tailwind and daisyUI
3. **Build** - Run `npm run build` to generate a static site
4. **Deploy** - Upload to any static hosting platform

---

## FAQ

### Is this really free to host?

Yes! It is designed to run entirely on GitHub Pages (free) with GitHub Actions (free tier includes 2,000 minutes/month).

### Do I need a server or database?

No. The Personal Landing page is fully static. All data is stored in JSON files within your repository.

### Can I use a custom domain?

Yes! Add a `CNAME` file to your `static/` folder with your domain, then configure your DNS to point to GitHub Pages. See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
