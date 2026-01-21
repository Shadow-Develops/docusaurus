---
sidebar_position: 20
pagination_next: null
pagination_prev: null
---

# Local Development

This guide covers running ShadowStatus locally for development and testing.

## Prerequisites

- **Node.js 20+** — [Download here](https://nodejs.org/)
- **npm** — Comes with Node.js
- **Git** — For cloning the repository

## Clone and Install

```bash
git clone https://github.com/Shadow-Develops/ShadowStatus.git
cd ShadowStatus
npm install
```

## Development Server

Start the development server with hot-reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

:::tip
Changes to Svelte components and styles will hot-reload automatically. Changes to `config.json` or `monitors.json` require a server restart.
:::

## Running Monitor Checks Locally

To test your monitor configuration locally:

```bash
npm run check-monitors
```

This runs the same script that GitHub Actions executes, updating `static/data/status.json` with the results.

:::warning[Environment Variables]
For local development, create a `.env` file in the project root:

```env title=".env"
GIT_TOKEN=your_github_token_here
DISCORD_WEBHOOK=https://discord.com/api/webhooks/...
WEBHOOK_URL=https://your-webhook-endpoint.com
```

Never commit this file to your repository.
:::

## Building for Production

Generate a production build:

```bash
npm run build
```

The static site will be output to the `./build` directory. You can preview it with:

```bash
npm run preview
```

## Other Commands

| Command                  | Description                |
| ------------------------ | -------------------------- |
| `npm run dev`            | Start development server   |
| `npm run build`          | Build for production       |
| `npm run preview`        | Preview production build   |
| `npm run check-monitors` | Run monitor checks locally |
| `npm run format`         | Format code with Prettier  |
| `npm run lint`           | Check code formatting      |

## Project Structure

```
ShadowStatus/
├── .github/workflows/     # GitHub Actions workflows
│   ├── deploy.yml         # Build and deploy to Pages
│   └── monitor-checks.yml # Run monitor checks
├── src/
│   ├── lib/
│   │   ├── components/    # Svelte components
│   │   ├── client/        # Client utilities
│   │   └── config.js      # Config loader
│   └── routes/            # SvelteKit routes
├── scripts/
│   └── check-monitors.js  # Core monitoring script
├── data/                  # Runtime data (history, state)
├── static/                # Static assets
│   └── data/status.json   # Generated status data
├── config.json            # Site configuration
├── monitors.json          # Monitor definitions
└── package.json           # Dependencies
```
