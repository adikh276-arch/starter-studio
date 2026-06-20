import { lazy, Suspense } from "react";
import { Brain } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { ocdSubApps } from "./data/subApps";

/**
 * Activities ported verbatim from `legacy/ocd selfcare/src/app/<tool>/_src/`.
 * Each lazy-loaded module renders the original interactive UI against shared
 * shims under `src/features/ocd/_shared/` (i18n, history drawer, completion
 * modal, localStorage-backed log storage). Add a new entry here when porting
 * another tool — its route `/ocd/<id>` will then win over the generic shell.
 */
const pageMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  mood_tracker: () => import("./activities/mood_tracker"),
};

const overrideRoutes = Object.entries(pageMap).map(([id, loader]) => {
  const C = lazy(loader);
  return {
    path: `/ocd/${id}`,
    element: (
      <Suspense fallback={null}>
        <C />
      </Suspense>
    ),
  };
});

const base = createVerticalFeature({
  id: "ocd",
  label: "OCD Self-Care",
  description: "Trackers, exposure exercises and learning for OCD",
  hubPath: "/ocd-selfcare",
  routePrefix: "/ocd",
  icon: Brain,
  categoryOrder: ["types", "trackers", "exercises", "learn"],
  categoryTitles: {
    types: "OCD types",
    trackers: "Trackers",
    exercises: "Exercises & practices",
    learn: "Learn",
  },
  subApps: ocdSubApps,
});

// Insert ported activity routes BEFORE the polymorphic fallback so they win.
const fallbackIdx = base.routes.findIndex((r) => r.path.includes(":subAppId"));
const routes = fallbackIdx >= 0
  ? [...base.routes.slice(0, fallbackIdx), ...overrideRoutes, ...base.routes.slice(fallbackIdx)]
  : [...base.routes, ...overrideRoutes];

export const ocdFeature = { ...base, routes };
