# Shared

Cross-vertical primitives only. Anything specific to one self-care domain
belongs under `src/features/<vertical>/` instead.

- `components/` – generic UI used by 2+ verticals (PageHeader, BackButton, IconTile, …)
- `ui/` – shadcn-style design-system primitives (re-exported from `src/components/ui`)
- `hooks/` – generic hooks
- `lib/` – generic helpers (cn, formatters, emoji-icon, …)

During Phase B the existing files in `src/components/shared/`, `src/components/ui/`,
`src/hooks/`, and `src/lib/` will be moved here. Until then `src/shared/` re-exports
from those locations so new code can already import from the canonical path.