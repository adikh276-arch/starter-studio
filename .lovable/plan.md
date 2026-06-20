## What this project actually is right now

This isn't a Lovable project yet — it's a **Figma Make export** with ~150 page components, a 500-line `App.tsx` that imports every page by hand, MUI mixed in with shadcn, Tailwind v4 (Lovable uses v3), and emojis sprinkled through the UI. The dev server is also currently throwing a 500 because a stale TanStack-Start virtual entry is being requested. So "make it Lovable-quality" means a real migration, not a polish pass.

I won't try to do all of this in one shot — that would produce a broken app. Here is the staged plan I'll work through, committing after each stage so you can preview.

---

## Stage 1 — Unbreak the preview & normalize the foundation

1. Kill the stale TanStack-Start state, restart Vite, confirm the app renders.
2. Move to the Lovable-native layout:
   - `src/main.tsx`, `src/App.tsx`, `src/pages/`, `src/components/`, `src/components/ui/`, `src/lib/utils.ts`, `src/hooks/`
   - Delete `src/app/` after moves, delete `src/imports/` Figma cruft we don't need.
3. Downgrade Tailwind v4 → v3 with proper `tailwind.config.ts` + `postcss.config.js`, port the theme tokens from `src/styles/theme.css` into `src/index.css` using HSL semantic tokens (so dark mode and shadcn variants work).
4. Remove unused heavy deps (`@mui/*`, `@emotion/*`, `react-slick`, `slick-carousel`, `react-icons`, `react-dnd*`, `@popperjs/core`, `react-popper`, `react-responsive-masonry`) — none of these are Lovable-standard and most are unused.
5. Replace the hand-rolled `figma-asset-resolver` with normal `@/assets/...` imports.

After this stage: app boots, looks the same, but on a Lovable-standard foundation.

## Stage 2 — Router & page organization

1. Replace the 500-line `App.tsx` route wall with a single `routes.tsx` config array (path + lazy component), so `App.tsx` becomes ~20 lines.
2. Lazy-load every page via `React.lazy` + `Suspense` — current bundle eagerly imports 150 components.
3. Reorganize `src/pages/` by domain (`ocd/`, `lgbtq/`, `selfcare/`, `care-team/`, `billing/`, `records/`, `academy/`, etc.) instead of one flat folder.
4. Add a proper `NotFound` page and a single `AppShell` layout (sidebar + mobile nav) so each page stops re-mounting the chrome.

## Stage 3 — Emoji → Lucide sweep + shared primitives

1. Project-wide find of emoji characters in JSX; replace each with the semantic Lucide icon (e.g. ✅ → `<CheckCircle2 />`, ❤️ → `<Heart />`, 🔒 → `<Lock />`, 📄 → `<FileText />`, etc.).
2. Extract repeated patterns I can see across pages into shared components: `PageHeader`, `SectionHeader`, `IconTile`, `ResourceRow`, `GradientCTA`, `BackButton`. Most pages currently re-implement these inline.
3. Replace hardcoded hex colors (`#043570`, `#00c0ff`, `#F8FAFC`, etc.) with semantic tokens (`text-primary`, `bg-background`, `border-border`). This is the single biggest source of "AI slop" feel.

## Stage 4 — Design system uplift (the "surprise me" part)

A calm, premium clinical direction — Apple Health × Linear, tuned for healthcare:

- **Palette**: deep navy primary `#0B2545`, teal accent `#13B5B1`, soft surface `#F7F8FA`, ink `#0F172A`, muted `#64748B`. Single accent gradient reserved for hero CTAs only.
- **Typography**: Instrument Serif for display headlines (editorial, trustworthy), Inter Tight for UI — loaded via `@fontsource`.
- **Radius**: 14px cards, 10px buttons, 999px pills. Consistent, no mix of 8/12/16/24 like today.
- **Shadows**: two-layer soft shadow token, no harsh drop-shadows.
- **Motion**: keep `motion/react`, standardize on one easing + 0.4s duration token, remove the per-component `whileHover={{ y: -4, scale: 1.02 }}` repetition.
- Apply the new tokens via `index.css` so every page inherits without per-page edits.

## Stage 5 — Cleanup & verification

1. Delete orphaned components, dead imports, unused assets in `src/imports/`.
2. Run the build, fix any type/import fallout.
3. Walk the main routes in headless Chromium and screenshot to verify nothing regressed visually.

---

## What I will NOT do without asking

- Touch business logic, localStorage shape (`mantraUser`), or routing URLs — your existing flows keep working.
- Rewrite the content of long-form article pages (OCD/LGBTQ/Trich articles). They get the new shell, header, and typography — the words stay.
- Add backend / Lovable Cloud — you didn't ask for it.

## Estimated work

This is realistically **5 sequential responses** from me, one per stage. Each stage leaves the app running. If at any point you want to stop, change direction, or skip a stage (e.g. skip the design uplift), just say so.

Shall I start with Stage 1?
