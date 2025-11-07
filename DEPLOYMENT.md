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
- **Backend**: Lightweight FastAPI service under `server/` that issues ChatKit client secrets

## File Structure

```
/src                                   - React frontend source
netlify.toml                           - Netlify deployment configuration
```

## Local Development

```bash
npm install
npm install @openai/chatkit-react
npm run dev
```

Visit `http://localhost:5173`

> [!NOTE]
> Пакет `@openai/chatkit-react` доступен только из приватного реестра OpenAI. Если
> локальная установка завершается ошибкой `403 Forbidden`, убедитесь, что
> аутентификация в реестре настроена и повторите команду `npm install
> @openai/chatkit-react`.

### ChatKit session service

The ChatKit widget expects an authenticated endpoint that exchanges your
OpenAI API key for a short-lived client secret. A reference
implementation lives in `server/server.py`.

```bash
cd server
python -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
export OPENAI_API_KEY="sk-..."
export CHATKIT_WORKFLOW_ID="wf_..."
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

Point the frontend to `http://localhost:8000/api/chatkit/session` (the
default in `index.html`).

## Production URL

After deployment, your app will be available at:
`https://your-site-name.netlify.app`
