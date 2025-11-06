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

### 3. Configure Environment Variables

**This project uses `.env.production` file for maximum portability.**

**Option A: Commit .env.production to git (if repository is PRIVATE)**
1. Create `.env.production` in project root with your credentials
2. **Remove** `.env.production` from `.gitignore`
3. Commit and push to GitHub
4. Netlify will automatically use it

**Option B: Use Netlify CLI for deployment (recommended for PUBLIC repos)**
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Link site: `netlify link`
4. Deploy with local `.env.production`: `netlify deploy --prod`

**Option C: Use Netlify environment variables (fallback)**
If `.env.production` is not found, the function will fall back to using Netlify environment variables.
Add in Netlify site settings → Environment variables:
- `OPENAI_API_KEY`
- `OPENAI_WORKFLOW_ID`

### 4. Deploy

- **Via GitHub:** Push to main branch (requires Option A or C above)
- **Via Netlify CLI:** Run `netlify deploy --prod` (recommended)

## Architecture

- **Frontend**: Vite + React + TypeScript (deployed as static files)
- **Backend**: Netlify serverless function at `/.netlify/functions/chatkit-session`
- **ChatKit**: Official OpenAI ChatKit React component
- **Environment**: Credentials stored in `.env.production` (portable across hosting platforms)

## File Structure

```
/netlify/functions/chatkit-session.js  - Netlify serverless function for ChatKit sessions
/src                                   - React frontend source
/server                                - Local development server (not used in production)
netlify.toml                           - Netlify deployment configuration
.env.production                        - Production credentials (NOT in git by default)
.env.production.example                - Example credentials file (safe to commit)
```

## API Endpoints

- **Production**: `/api/chatkit/session` (redirects to `/.netlify/functions/chatkit-session`)
- **Local Dev**: `/api/chatkit/session` (proxied to `localhost:3000`)

## Local Development

```bash
# Terminal 1 - Backend (for local development)
npm run server

# Terminal 2 - Frontend
npm run dev
```

Visit `http://localhost:5173`

## Production URL

After deployment, your app will be available at:
`https://your-site-name.netlify.app`

## Troubleshooting

### ChatKit not working on production?
1. **Check `.env.production` file:**
   - Make sure it exists in project root
   - Verify credentials are correct
   - Check function logs: should see "Loaded environment variables from .env.production"
2. **Check Netlify function logs:** Dashboard → Functions → chatkit-session
3. **Verify API key has ChatKit access** in OpenAI dashboard

### Local development issues?
1. Make sure both backend and frontend servers are running
2. Check `.env` file exists with correct credentials (for local dev)
3. Check browser console for errors

### Environment variables not loading?
- If using GitHub auto-deploy: Use Option A (commit .env.production) or Option C (Netlify env vars)
- If using Netlify CLI: File is automatically included in deployment
- Check function logs for "Loaded environment variables from .env.production" message
