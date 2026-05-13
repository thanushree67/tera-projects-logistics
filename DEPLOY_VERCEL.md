# Deploying to Vercel

This project is configured for Vercel hosting (TanStack Start + SSR + server functions).

## One-time setup

1. Push the repo to GitHub/GitLab.
2. Import the project on https://vercel.com/new.
3. **Framework preset**: leave as **Other** (Vercel will use `vercel.json`).
4. **Build command**: `vite build` (already in `vercel.json`).
5. **Output directory**: `dist/client` (already in `vercel.json`).
6. Add environment variables in **Project Settings → Environment Variables**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY` (and `VITE_SUPABASE_PUBLISHABLE_KEY` if used)
   - Any server-only secrets (`SUPABASE_SERVICE_ROLE_KEY`, etc.) — **without** the `VITE_` prefix.
7. Deploy.

## How it works

- `vite build` produces `dist/client/` (static assets) and an SSR bundle.
- `api/index.ts` is a Vercel Node Function that wraps the TanStack Start SSR
  fetch handler.
- `vercel.json` rewrites every request to `/api`, so SSR + server functions
  + page routes all flow through that one function. Static assets in
  `dist/client/` are served directly by Vercel's CDN.

## Caveats

- The Lovable in-editor Publish button (which deploys to `*.lovable.app` on
  Cloudflare Workers) **no longer works** for this project — Cloudflare-specific
  config has been removed.
- If the first Vercel deploy fails, check the Function logs in the Vercel
  dashboard. The most common issues are missing env vars or a server-only
  module being imported from client code.
