---
sidebar_position: 5
---

# Deployment

Deploy your Personal Landing page to GitHub Pages with automated workflows. Every push to your main branch will automatically build and deploy your site.

## GitHub Pages Deployment

Personal Landing is designed for GitHub Pages, with an automated workflow that builds and deploys your site whenever you push changes.

### Initial Setup

#### 1. Push to GitHub

If you haven't already, create a GitHub repository and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

#### 2. Add the Deployment Workflow

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_call: # Allow other workflows to trigger this

permissions:
  contents: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          publish_branch: gh-pages
```

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select the **gh-pages** branch and **/ (root)** folder
5. Click **Save**

#### 4. Configure Base Path (if needed)

If you're deploying to `username.github.io/repo-name` (not a custom domain), update `svelte.config.js`:

```js
import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
		},
	},
};
```

**Important:** Replace `your-repo-name` with your actual repository name.

If using a custom domain, you can omit the `paths.base` configuration.

### How It Works

1. You push changes to the `main` branch
2. GitHub Actions automatically triggers the workflow
3. The workflow:
   - Checks out your code
   - Installs dependencies
   - Builds your site (`npm run build`)
   - Deploys the `build/` folder to the `gh-pages` branch
4. GitHub Pages serves your site from the `gh-pages` branch

### Your Site URL

After deployment, your site will be available at:

- **Repository deployment:** `https://yourusername.github.io/repo-name`
- **Custom domain:** `https://yourcustomdomain.com` (see Custom Domain section)

### Deployment Status

Check deployment status in your repository:

1. Go to the **Actions** tab
2. View the latest workflow run
3. Green checkmark = successful deployment
4. Red X = deployment failed (click to view logs)

---

## Custom Domain

Use your own domain instead of `github.io`.

### Setup

1. Add a `CNAME` file to the `static/` folder containing your domain:

```
yourdomain.com
```

Or for a subdomain:

```
www.yourdomain.com
```

2. Configure your DNS provider:

**For apex domain (example.com):**

```
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153
```

**For subdomain (www.example.com):**

```
CNAME  www  yourusername.github.io
```

3. In GitHub repository settings → Pages:
   - Add your custom domain
   - Enable **Enforce HTTPS** (recommended)

4. Update `config.json`:

```json
{
	"domain": "https://yourdomain.com"
}
```

5. Update `svelte.config.js` to remove the base path:

```js
export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true,
		}),
		// Remove or comment out paths.base
	},
};
```

6. Rebuild and push:

```bash
npm run build
git add .
git commit -m "Add custom domain"
git push
```

### DNS Propagation

DNS changes can take up to 48 hours to propagate globally. Use [DNSChecker](https://dnschecker.org/) to monitor propagation.

---

## Manual Deployment (Alternative)

If you prefer manual deployment or need to deploy from your local machine:

### Option 1: GitHub CLI

```bash
# Install gh CLI if not already installed
# https://cli.github.com/

# Build and create release
npm run build
cd build
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/yourusername/repo-name.git
git push -f origin gh-pages
```

### Option 2: npm deploy Script

If your `package.json` has a `deploy` script configured:

```bash
npm run deploy
```

**Note:** The automated workflow is recommended for most users as it deploys automatically on every push.

---

## Environment Variables

GitHub Pages deployments are static, so environment variables must be set at build time.

### Adding Environment Variables

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets (e.g., `API_KEY`, `SITE_URL`)

### Using in Workflow

Update the workflow to use environment variables:

```yaml
- name: Build site
  run: npm run build
  env:
    PUBLIC_API_KEY: ${{ secrets.API_KEY }}
    PUBLIC_SITE_URL: ${{ secrets.SITE_URL }}
```

### Access in SvelteKit

```js
import { env } from '$env/static/public';

const apiKey = env.PUBLIC_API_KEY;
```

**Important:** Only use `PUBLIC_` prefix for client-side variables. Never expose sensitive data.

---

## Updating Your Site

To update your deployed site:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push:

```bash
git add .
git commit -m "Update content"
git push
```

The workflow automatically rebuilds and deploys your changes within 1-2 minutes.

---

## Troubleshooting

### Build Fails in GitHub Actions

**Check the workflow logs:**

1. Go to **Actions** tab
2. Click on the failed workflow
3. Review the error messages

**Common issues:**

- Missing dependencies → Ensure `package.json` is committed
- Build errors → Test `npm run build` locally first
- Node version mismatch → Workflow uses Node 20 by default

### Site Not Updating

1. Check that the workflow completed successfully (Actions tab)
2. Wait a few minutes for GitHub Pages to update
3. Clear your browser cache (Ctrl/Cmd + Shift + R)
4. Check that you pushed to the `main` branch

### 404 Errors

**If using repository-based deployment (`username.github.io/repo-name`):**

- Ensure `paths.base` is set correctly in `svelte.config.js`
- Verify the base path matches your repository name

**If using custom domain:**

- Check DNS records are correctly configured
- Ensure `CNAME` file exists in `static/` folder
- Verify custom domain is set in repository settings

### Images Not Loading

- Ensure images are in the `static/` folder, not `src/`
- Use paths starting with `/` (e.g., `/img/avatar.png`)
- If using base path, ensure images are referenced correctly

### Workflow Permission Errors

If you get permission errors:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Click **Save**

---

## Performance & Optimization

Your site is automatically optimized during build:

✓ **Pre-rendered HTML** — Fast initial load
✓ **Minified JS/CSS** — Smaller file sizes
✓ **Code splitting** — Only loads what's needed
✓ **Static generation** — No server required

### Further Optimization

**Compress images:**

- Use [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/)
- Convert to modern formats (WebP, AVIF)
- Optimize before adding to `static/img/`

**Enable caching:**
GitHub Pages automatically sets cache headers for optimal performance.

**Monitor performance:**

- Use [Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome DevTools
- Test on [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Alternative Platforms (Optional)

While Personal Landing is optimized for GitHub Pages, it works with any static hosting provider:

### Vercel

1. Import repository at [vercel.com](https://vercel.com)
2. Vercel auto-detects SvelteKit
3. Click **Deploy**

### Netlify

1. Import repository at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `build`
4. Click **Deploy**

### Cloudflare Pages

1. Connect repository at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Build command: `npm run build`
3. Build output: `build`
4. Deploy

All platforms support custom domains and automatic SSL certificates.

---

## Need Help?

- **GitHub Pages Docs:** [docs.github.com/pages](https://docs.github.com/en/pages)
- **GitHub Actions Docs:** [docs.github.com/actions](https://docs.github.com/en/actions)
- **SvelteKit Deployment:** [kit.svelte.dev/docs/adapters](https://kit.svelte.dev/docs/adapters)
