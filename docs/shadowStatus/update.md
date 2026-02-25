---
sidebar_position: 10
pagination_next: null
pagination_prev: null
---

# Updating Shadow Status

Keep your status page up-to-date with the latest features and fixes.

## If You Forked the Repository

Syncing your fork with the upstream repository is the easiest way to get updates.

### Via GitHub Web Interface

1. Go to your forked repository on GitHub
2. Make a save of your `data/history.json`, `data/notification-state.json`, `static/data/status.json`, `config.json`, and `monitors.json` as they may get overridden.
3. Click **Sync fork** near the top of the page
4. Click **Update branch** if there are new commits
5. Pull the changes locally if needed:
   ```bash
   git pull origin main
   ```
6. Push your saved data/config files to ensure your content is being used!

### Via Command Line

```bash
# Add the upstream remote (only needed once)
git remote add upstream https://github.com/Shadow-Develops/ShadowStatus.git

# Fetch upstream changes
git fetch upstream

# Merge upstream changes into your main branch
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

:::warning[Merge Conflicts]
If you've modified core files (not just `config.json` and `monitors.json`), you may encounter merge conflicts. Resolve them carefully, keeping your custom changes where needed.
:::

---

## If You Used "Use as Template"

You'll need to manually apply updates since there's no direct link to the original repository.

### Option 1: Cherry-Pick Specific Changes

1. Add the original repository as a remote:

   ```bash
   git remote add upstream https://github.com/Shadow-Develops/ShadowStatus.git
   git fetch upstream
   ```

2. View the commit history to find relevant updates:

   ```bash
   git log upstream/main --oneline
   ```

3. Cherry-pick specific commits:
   ```bash
   git cherry-pick <commit-hash>
   ```

### Option 2: Manual File Updates

1. Check the [Shadow Status releases](https://github.com/Shadow-Develops/ShadowStatus/releases) for change notes
2. Compare your files with the latest version
3. Manually update changed files, preserving your configuration

---

## What to Preserve During Updates

**Always keep your customizations in:**

- `config.json` - Your site settings
- `monitors.json` - Your monitor definitions
- `static/CNAME` - Your custom domain (if set)
- `static/img/` - Your custom images/logo
- `data/` - Your history and state files

**Files that may need updating:**

- `scripts/check-monitors.js` - Monitor checking logic
- `src/` - Frontend components
- `package.json` - Dependencies
- `.github/workflows/` - GitHub Actions workflows

---

## Post-Update Steps

1. **Check for new dependencies:**

   ```bash
   npm install
   ```

2. **Review release notes** for any configuration changes needed in `config.json`

3. **Test locally** before deploying:

   ```bash
   npm run dev
   npm run check-monitors
   ```

4. **Commit and push** your changes to trigger a new deployment

---

## Breaking Changes

Major version updates may include breaking changes. Always check the release notes before updating. Common breaking changes might include:

- New required fields in `config.json`
- Changed monitor configuration format
- Updated GitHub Actions workflow syntax
- New environment variable requirements

The release notes will include migration instructions for any breaking changes.
