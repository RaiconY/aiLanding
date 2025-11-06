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

In Netlify site settings → Environment variables, add:

```
OPENAI_API_KEY=your_openai_api_key_here

OPENAI_WORKFLOW_ID=your_workflow_id_here
```

**Note**: Use the API key and Workflow ID from your OpenAI account.

### 4. Deploy

Click "Deploy site" and Netlify will build and deploy your application.

## Architecture

- **Frontend**: Vite + React + TypeScript (deployed as static files)
- **Backend**: Netlify serverless function at `/.netlify/functions/chatkit-session`
- **ChatKit**: Official OpenAI ChatKit React component

## File Structure

```
/netlify/functions/chatkit-session.js  - Netlify serverless function for ChatKit sessions
/src                                   - React frontend source
/server                                - Local development server (not used in production)
netlify.toml                           - Netlify deployment configuration
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
1. Check environment variables are set in Netlify dashboard
2. Check function logs in Netlify dashboard → Functions
3. Verify API key has ChatKit access in OpenAI dashboard

### Local development issues?
1. Make sure both backend and frontend servers are running
2. Check `.env` file exists with correct credentials
3. Check browser console for errors
