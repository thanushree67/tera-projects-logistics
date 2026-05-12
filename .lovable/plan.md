# Tera Projects — Warehouse Division Website

High-end industrial site styled "Industrial Navy" — deep navy `#002147`, white, teal accents. Uses **your own Supabase project** (not Lovable Cloud).

## Routes

- `/` — Home: Hero, Warehouse, Distribution, Footer
- `/contact` — Contact page with form + company info

Each route gets unique `head()` (title, description, og tags). JSON-LD `Organization` schema in root.

## Assets

Copy uploads to `src/assets/`:
- `tera-logo.png`
- `warehouse-1.jpg` … `warehouse-4.jpg`

Used as: hero background, Warehouse section image, Distribution image, bento accent.

## Design System (`src/styles.css`)

Tokens (oklch):
- `--background` deep navy (#002147)
- `--foreground` white
- `--primary` teal accent
- `--card`, `--muted`, `--border` tuned for navy surfaces
- `--gradient-hero`, `--gradient-accent`, `--shadow-elegant`

Fonts: Space Grotesk (display) + Inter (body) via Google Fonts in `__root.tsx`.

## Sections

1. **Hero** — full-viewport background image, navy gradient overlay, TERA logo, headline "Strategic Warehousing & Global Distribution", sub, "Get a Quote" CTA (opens lead modal).
2. **Advanced Warehouse Facilities** — bento grid: large image card + purpose copy + 4 function cards with lucide icons (PackageCheck, ShieldCheck, ClipboardList, Boxes).
3. **Seamless Distribution** — mirrored bento: 4 cards (FileCheck, Truck, CalendarClock, MapPin) + image + purpose copy.
4. **Footer** — company name, two phone numbers, two emails, copyright.

## Lead Capture — Your Supabase

**You'll provide:**
- `VITE_SUPABASE_URL` — your project URL
- `VITE_SUPABASE_ANON_KEY` — your anon/publishable key

I'll request these via the Lovable secrets prompt once you confirm. They'll be stored as project env vars and read in code via `import.meta.env`.

**Setup steps you do once in your Supabase dashboard:**
1. Create table `leads`:
   ```sql
   create table public.leads (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     email text not null,
     phone text not null,
     source text default 'popup',
     created_at timestamptz default now()
   );
   alter table public.leads enable row level security;
   create policy "anon can insert leads"
     on public.leads for insert
     to anon with check (true);
   ```
2. (Optional) Add a SELECT policy restricted to authenticated admin role so anon can't read leads.

I'll provide this SQL in the chat once we wire it up.

**On the app side:**
- Install `@supabase/supabase-js` (`bun add`).
- Create `src/lib/supabase.ts` exporting a browser client built from the two env vars.
- `LeadCaptureDialog.tsx` (shadcn Dialog): triggers via `setTimeout(5000)` on mount, also opened by every "Get a Quote" button. Sets `sessionStorage.leadDismissed` so it doesn't re-trigger.
- Form fields: Name, Email, Phone, validated with zod.
- On submit → `supabase.from('leads').insert({...})` → toast success → close.
- Contact page form posts to same table with `source: 'contact_page'`.

## Animations (Framer Motion)

`bun add framer-motion`. `whileInView` fade/slide on section headers and cards. Hero gets staggered word reveal + subtle parallax via `useScroll`/`useTransform`.

## Technical

- Tailwind responsive (sm/md/lg); bento collapses to single column on mobile.
- `html { scroll-behavior: smooth }`.
- Lazy-load section images.
- SEO: per-route `head()`, semantic HTML, single `<h1>` per page, alt on every image, JSON-LD Organization schema.

## Files to create / modify

- `src/styles.css` — extend tokens
- `src/routes/__root.tsx` — fonts, JSON-LD, default meta
- `src/routes/index.tsx` — home composition
- `src/routes/contact.tsx` — contact page
- `src/components/Hero.tsx`
- `src/components/WarehouseSection.tsx`
- `src/components/DistributionSection.tsx`
- `src/components/SiteFooter.tsx`
- `src/components/LeadCaptureDialog.tsx`
- `src/lib/supabase.ts`
- 5 assets in `src/assets/`

## Out of scope

- Lovable Cloud (explicitly skipped — using your Supabase)
- Auth / user accounts
- Admin dashboard for viewing leads (view in your Supabase dashboard)

After you approve, I'll start building and request your Supabase URL + anon key via the secure secrets prompt.
