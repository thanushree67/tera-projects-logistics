# Tera Warehousing

A marketing website for Tera Projects' Warehouse Division — showcasing strategic warehousing and global distribution services for heavy-lift and general cargo.

## Run & Operate

- Workflow `artifacts/tera-warehousing: web` — runs the Vite dev server for the frontend
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- Optional env: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` — Supabase credentials for lead capture form persistence (app works without these, falls back gracefully)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (Tailwind CSS v4, Framer Motion, React Router DOM, Sonner)
- UI: shadcn/ui component library, Radix UI primitives
- Lead capture: Supabase (optional — graceful fallback if not configured)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/tera-warehousing/src/` — main frontend source
  - `pages/` — HomePage, ContactPage, NotFoundPage
  - `components/` — Hero, SiteHeader, SiteFooter, WarehouseSection, DistributionSection, LeadProvider, LeadCaptureDialog
  - `assets/` — images (hero-bg.jpeg, warehouse-facility.jpeg, distribution-hub.jpeg, tera-logo.png, etc.)
  - `lib/supabase.ts` — Supabase client (optional)
  - `styles.css` — Tailwind v4 theme with custom navy/teal/cream palette and font tokens

## Architecture decisions

- Migrated from Vercel (was already Vite + React, no Next.js conversion needed)
- Supabase is optional — `isSupabaseConfigured` flag gates all DB writes; form still works without credentials
- Lead capture dialog auto-triggers after 5s on first session visit (sessionStorage-gated)
- Custom Tailwind v4 theme uses oklch color tokens: `--ink-deep`, `--cream`, `--teal`, `--brass`
- Fonts: Playfair Display (display/headings), Inter (body), JetBrains Mono (eyebrows)

## Product

- Homepage with animated hero, warehousing capabilities section, distribution section, and footer CTA
- Contact page with phone/email info and an enquiry form
- Lead capture dialog that appears on CTA button clicks and auto-triggers after 5s
- All lead submissions go to a Supabase `leads` table (when configured)

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Supabase env vars (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) are optional; set them as Replit secrets to enable lead persistence
- Tailwind v4 uses `@import "tailwindcss"` + `@theme inline` blocks instead of a `tailwind.config.js`
- The `vite-tsconfig-paths` plugin from the original project was dropped (not compatible with this scaffold); `@` alias is configured via `vite.config.ts` resolve.alias instead

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
