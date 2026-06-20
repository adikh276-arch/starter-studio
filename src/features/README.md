# Features

Each vertical (self-care domain) lives in its own folder here and is fully
self-contained:

```
features/
  <vertical>/
    pages/         # route components for this vertical
    components/    # vertical-specific UI (cards, headers, trackers)
    data/          # static content (skills, articles, exercises)
    hooks/         # vertical-specific hooks
    lib/           # pure helpers, formulas, types
    routes.ts      # exported route definitions for this vertical
    index.ts       # public surface – everything the rest of the app may import
```

Cross-vertical imports go through `index.ts` only. Anything not exported there
is private to the vertical. Shared primitives live under `src/shared/`.

Verticals being ported (Phase B order):

1. coaching          – from `legacy/coaching areas`
2. financial         – from `legacy/Financial Wellbeing selfcare`
3. lgbtq             – from `legacy/LGBTQ+ Selfcare`
4. women             – from `legacy/Women Wellness selfcare`
5. fitness           – from `legacy/Fitness selfcare`
6. ocd               – from `legacy/ocd selfcare` (merged with existing OCD pages)
7. emotional         – from `legacy/emotional wellbeing selfcare`
8. substance         – from `legacy/substances in substance use`

All routes contributed by a vertical must be registered via
`src/features/registry.ts` so the dashboard, nav, and trackers have a single
source of truth.