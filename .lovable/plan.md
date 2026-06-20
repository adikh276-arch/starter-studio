## Reality check

You've dropped 8 standalone apps into this repo:

| Folder | Framework | Approx pages |
|---|---|---|
| `emotional wellbeing selfcare` | Next.js App Router | ~80+ skills/exercises |
| `coaching areas` | Next.js | ~40 |
| `ocd selfcare` | Next.js | ~60 |
| `Financial Wellbeing selfcare` | Next.js | ~30 |
| `Fitness selfcare` | Next.js | ~50 (with CSV data) |
| `LGBTQ+ Selfcare` | Next.js | ~40 |
| `Women Wellness selfcare` | Next.js | ~50 |
| `substances in substance use` | Vite + Next-app dual | ~60 |

The main app is **React + Vite + React Router**. The added apps use **Next.js App Router, `app/` directories, server actions, server-side DB calls (`lib/db.ts`), `"use server"`, `next/link`, `next/navigation`, `next/image`, i18n with `next-intl`/`i18next`, and Server Components**. None of that runs in Vite. **This is not a copy-paste job — it is a port of ~400 pages.**

Doing all of this + a full repo restructure + tracker rewiring in one turn will break the preview and produce code worse than what's there. We need to phase it.

---

## Proposed phased plan

### Phase A — Repo hygiene (this turn, safe, ~30 min)
1. Move all 8 sub-apps out of the build path into `legacy/` so Vite stops trying to index them and the preview stays healthy.
2. Strip auth/DB/backend from the **main** app:
   - Remove `ProtectedRoute`, `mantraUser` localStorage gating, `hasSubscription` redirects.
   - SignUp/SignIn become no-op → straight to `/dashboard`.
   - Delete any Supabase/cloud client code if present.
3. Establish the target structure in `src/`:
   ```text
   src/
     app/                  # routing only (App.tsx + route tree)
     features/             # one folder per self-care vertical
       mindfulness/
       ocd/
       fitness/
       financial/
       lgbtq/
       women/
       emotional/
       coaching/
       substance/
     shared/
       components/   ui/   hooks/   lib/   styles/
     pages/                # only top-level pages that aren't a feature
   ```
4. Create a single **feature registry** (`src/features/registry.ts`) that every vertical plugs into — gives one source of truth for routes, trackers, cards, and nav.

Deliverable: green preview, clean foundation, zero auth/DB, nothing from the 8 folders broken because they're parked in `legacy/`.

### Phase B — Port verticals one at a time (one turn each)
For each vertical, in this order (smallest first):
1. Coaching areas
2. Financial wellbeing
3. LGBTQ+
4. Women wellness
5. Fitness (has CSV data — bigger)
6. OCD
7. Emotional wellbeing (biggest — 80+ skills)
8. Substance use

Per vertical I will:
- Convert Next.js pages → Vite/React Router pages under `src/features/<vertical>/pages/`.
- Replace `next/link` → `react-router` `Link`, `next/image` → `<img>`, `next/navigation` → `useNavigate`/`useParams`.
- Strip server actions, replace DB persistence with `localStorage` (or remove if it's a static read).
- Lift shared UI primitives once (don't duplicate shadcn across folders — there's already a copy in `src/components/ui`).
- Register routes + tracker entries in the registry so they hook into existing nav and tracker links.
- Verify the vertical renders with Playwright before moving on.

### Phase C — Tracker wiring
Once all verticals exist, do one focused pass that fixes every tracker/quick-action link across the dashboard, mobile nav, and self-care cards to point at the right feature route. Verified with Playwright screenshots.

### Phase D — Design polish
Only after structure + nav are correct, as you said.

---

## What I need from you before starting

1. **Confirm "park in `legacy/`"** is OK. The 8 folders stay in the repo (preserved, untouched) but moved under `legacy/` so the Vite dev server stops trying to type-check / index them. Without this the preview will keep getting slower and start failing.
2. **Confirm priority order** for Phase B (or reorder).
3. **i18n**: most sub-apps ship 30+ locale files. For Phase B, ship **English only** and drop the locale folders? (Strongly recommended — adding i18n back later is mechanical.)
4. **Strip backend from sub-apps too?** Confirm: any place a sub-app reads/writes DB becomes `localStorage` (or in-memory), no Supabase, no API routes, no server actions.

If you say "yes go" to all four, I start Phase A this turn and then we knock out Phase B one vertical per turn. Trying to do it all in one shot will produce exactly the "ugly, unmaintainable" output you're trying to get away from.