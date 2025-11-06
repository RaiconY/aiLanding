# Deployment Guide

This project is configured for deployment on Netlify.

## Quick Deploy to Netlify

### 1. Push your code to GitHub

Make sure all changes are committed and pushed to your main branch.

### 2. Import to Netlify

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your repository: `RaiconY/aiLanding`
5. Netlify will auto-detect the build settings from `netlify.toml`

### 3. Deploy

Push to main branch to trigger automatic deployment.

## Architecture

- **Frontend**: Vite + React + TypeScript (deployed as static files)

## File Structure

```
/src                                   - React frontend source
netlify.toml                           - Netlify deployment configuration
```

## Local Development

```bash
npm run dev
```

Visit `http://localhost:5173`

## Production URL

After deployment, your app will be available at:
`https://your-site-name.netlify.app`
