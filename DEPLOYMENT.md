# Deployment Guide

This project is configured for deployment on Vercel.

## Quick Deploy to Vercel

### 1. Push your code to GitHub

Make sure all changes are committed and pushed to your main branch.

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `RaiconY/aiLanding`
4. Vercel will auto-detect the Vite configuration

### 3. Configure Environment Variables

In Vercel project settings, add these environment variables:

```
OPENAI_API_KEY=your_openai_api_key_here

OPENAI_WORKFLOW_ID=your_workflow_id_here
```

**Note**: Use the API key and Workflow ID from your OpenAI account.

### 4. Deploy

Click "Deploy" and Vercel will build and deploy your application.

## Architecture

- **Frontend**: Vite + React + TypeScript (deployed as static files)
- **Backend**: Serverless function at `/api/chatkit/session` (Node.js runtime)
- **ChatKit**: Official OpenAI ChatKit React component

## File Structure

```
/api/chatkit/session.js  - Vercel serverless function for ChatKit sessions
/src                     - React frontend source
/server                  - Local development server (not used in production)
vercel.json              - Vercel deployment configuration
```

## Local Development

```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run dev
```

## Production URL

After deployment, your app will be available at:
`https://your-project-name.vercel.app`
