## Goal
Take every legacy repo I imported under `legacy/` and port their tools, activities, trackers and content into this single structured app. Every interactive button must route via internal React routes — no `window.open`, no `mantracare.com` / `forms.mantracare.org` redirects, no “is being ported” placeholders. UI and backend stay as they are.

## Verticals in scope (legacy → app feature)
1. LGBTQ+ Selfcare → `src/features/lgbtq`
2. OCD Selfcare → `src/features/ocd`
3. Financial Wellbeing Selfcare → `src/features/financial`
4. Fitness Selfcare → `src/features/fitness` (new)
5. Women Wellness Selfcare → `src/features/women`
6. Emotional Wellbeing Selfcare → `src/features/emotional`
7. Substance Use Selfcare → `src/features/substance`
8. Coaching Areas → `src/features/coaching`

## Shared structure (applied to every vertical)
```text
src/features/<vertical>/
  index.tsx              registers routes with the feature registry
  data/subApps.ts        list of all sub-apps (id, label, category, icon)
  pages/                 hub + simple routed pages
  activities/            ported legacy interactive tools (one folder per tool)
  components/            vertical-shared UI
  lib/                   local persistence + nav shims
  styles/                ported legacy CSS
```

Every legacy tool becomes one folder under `activities/<tool-id>/` with its own `index.tsx` exporting a default component. The vertical's `index.tsx` adds a direct route `"/<vertical>/<tool-id>"` before the generic `:subAppId` fallback so the placeholder is never reached for ported tools.

## Cross-cutting rules
- **No third-party URLs.** Remove every `window.open(...)` and `https://web.mantracare.com`, `https://platform.mantracare.com`, `https://app.mantracare.com`, `https://forms.mantracare.org` link in `src/pages/*` and replace with `navigate("/<vertical>/<tool-id>")`.
- **No UI redesign.** Keep existing hub layouts, cards, colors, gradients.
- **No backend changes.** All ported tools use `localStorage` shims in `src/features/<vertical>/lib/` for history/persistence. No Supabase tables, no auth changes.
- **Faithful port.** Copy legacy component code as-is, only rewire: router (`next/router` and `react-router-dom` MemoryRouter → our `react-router` `useNavigate`), i18n hook to our `useTranslation`, persistence to local shim, and remove `AuthGuard` wrappers.
- **Generic `GenericSubAppPage` stays as a safety net only.** A vertical is "done" when no card from its hub lands on it.
- **One vertical at a time, in order below.** Each delivered as: port → wire routes → remove third-party links in matching hub page → smoke test routes.

## Per-vertical work

### 1. LGBTQ+ (`src/features/lgbtq`)
Already partly done (trackers + static HTML viewer). Remaining ports from `legacy/LGBTQ+ Selfcare/src/features/pride/`:
- **dynamic/**: `pride-mirror-moments`, `pride-spectrum`, `pride-journal`, `identity-exploration`, `identity-journey`, `identity-reflection`, `gentle-check-in`, `find-your-right-time`
- **static React modules**: `bi-coming-out`, `trans-coming-out`, `bi-family-friends-convo`, `bi-identity-affirmations`, `bi-mental-health`, `trans-and-mental-health`, `dealing-with-dysphoria`, `medical-transition`, `joy-pride-trans`, `bisexual-stories`, `lgbtq-stories`
- Rewire `LGBTQAssessments.tsx`, `GayGuide.tsx`, `LesbianGuide.tsx`, `BisexualGuide.tsx`, `TransGuide.tsx` so every tool button uses internal `navigate()`.

### 2. OCD (`src/features/ocd`)
Port each `legacy/ocd selfcare/src/app/<tool>/` whose `_src/` contains a React activity:
- Trackers: `mood_tracker`, `vibe_tracker`, `gratitude_logs`, `progress_tracker`, `mirror_moments`
- Activities: `urge_surfing`, `thought_diffusion`, `thought_truth`, `thought_surfing`, `reframe_thoughts`, `reassurance_resistance`, `ritual_cost`, `trigger_map`, `discard_it`, `clutter_journal`, `letter_to_ocd`, `self_compassion`, `one_thing_out`, `brave_steps`, `daily_life`, `did_you_know`, `fear_ladder`, `feelings_fact`, `grounded_techniques`, `guided_imagery`, `metta_heart_guide`, `mindfulness`, `ocd_moments`, `quiet-focus-tool`, `response_guide`, `truth_seeker_quiz`, `uncertainity_acceptance`, `uncertainity_tolerance`, `ocd_tips`, `ocd_success_stories`, `cognitive_distortions`, `anxiety_cycle`, `ocd_cycle`
- Type pages: `contamination_ocd`, `health-ocd`, `hoarding_ocd`, `pure-o-ocd`, `tricho_ocd` → bind to existing `src/pages/<Type>OCDPage.tsx` and replace each tile's `window.open(...)` with `navigate("/ocd/<tool-id>")`.
- Rewire `src/pages/OCDPage.tsx`, `OCDSelfCare.tsx`, `ContaminationOCDPage.tsx`, `HealthOCDPage.tsx`, `HoardingOCDPage.tsx`, `PureOOCDPage.tsx`, `TrichotillomaniaPage.tsx`.

### 3. Financial (`src/features/financial`)
Port `legacy/Financial Wellbeing selfcare/src/app/` activities:
- `budget-planner`, `budget-buddy`, `savings-goal`, `goal-planner`, `loan-emi-planner`, `investment-planner`, `emergency-fund`, `financial-health-score`, `debt-management-guide`
- `check-ins/spending-style-quiz`, `learn/*`, `explore/*`, `history/*`, `dashboard/*`
- Replace external links in `src/pages/FinancialWellnessSelfCare.tsx`.

### 4. Fitness (new `src/features/fitness`)
Create the vertical, register in `src/features/registry.ts`, port `legacy/Fitness selfcare/src/app/pages/*` and any `data/` + `components/`. Wire any existing `src/pages/Yoga*`, exercise pages to internal routes only (remove unsplash redirects only if used as nav; image URLs themselves can stay).

### 5. Women (`src/features/women`)
Port `legacy/Women Wellness selfcare/src/modules/*` and `views/*`. Replace any third-party tool links in women-related pages with internal routes.

### 6. Emotional (`src/features/emotional`)
Port tools from `legacy/emotional wellbeing selfcare/app/*` and `components/*` (Next.js → React Router conversion). Rewire `src/pages/DepressionPage.tsx` so every exercise/todo/resource tile navigates to an internal `/emotional/<tool-id>` route instead of `mantracare.com`.

### 7. Substance (`src/features/substance`)
Port `legacy/substances in substance use/src/modules/*` and `pages/*`. Rewire `src/pages/SubstanceUseSelfCare.tsx` and `src/pages/DeaddictionPage.tsx` so each tracker/tool tile navigates to `/substance/<tool-id>`.

### 8. Coaching (`src/features/coaching`)
Port `legacy/coaching areas/src/app/coach_journey`, `coaching_areas`, `coaching_integration`, `confidence_identity`, `daily_focus`, `emotional_regulation`, `goal_momentum`. Rewire `src/pages/CoachingAreas.tsx`, `ServicePage.tsx`, `SupportPage.tsx`, `SelfCareResources.tsx`, and clean `src/features/coaching/data/resourcesContent.ts` (79 third-party links) — keep label/description, swap `url` for internal route.

## Per-tool porting recipe
For each legacy `<tool>/`:
1. Copy needed source files into `src/features/<vertical>/activities/<tool-id>/` (skip duplicated shadcn `components/ui/*` — reuse our `@/components/ui`).
2. Replace imports:
   - `next/router`, `next/navigation`, `react-router-dom` MemoryRouter → `react-router` `useNavigate`, `useParams`.
   - Legacy `@/` aliases that point to the legacy repo → relative imports inside the tool folder, or our shared `@/` for `ui` + `lib/utils`.
   - `useTranslation` → our `src/features/coaching/lib/i18n.ts` `useTranslation`.
   - Server actions / DB calls → `src/features/<vertical>/lib/<tool>Store.ts` with the same function names but backed by `localStorage`.
3. Strip `AuthGuard`, analytics, share modals tied to external services.
4. Export a single default `Index` component from `index.tsx`.
5. Add an entry in `src/features/<vertical>/index.tsx` `pageMap` so `/<vertical>/<tool-id>` resolves to that component.
6. Confirm the matching sub-app id exists in `data/subApps.ts` so the hub card already routes there.

## Verification per vertical
- Visit every hub card and confirm no “is being ported” placeholder.
- Grep the vertical for `window.open`, `mantracare`, `forms.mantracare`, `https://web.`, `https://app.`, `https://platform.` — must return zero hits inside `src/features/<vertical>` and matching `src/pages/*` hubs.
- Click 5 random tools per vertical and confirm they render with no runtime errors and persist data via localStorage.

## Out of scope
- Visual redesign of hubs or tools.
- Auth, Supabase, Lovable Cloud setup.
- Adding new tools that don't exist in legacy.
- Internationalisation completeness beyond English (legacy `i18n/locales/*` files are copied but only `en` wired).
