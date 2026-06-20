import { lazy, Suspense } from "react";
import { Rainbow } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { lgbtqSubApps } from "./data/subApps";

/**
 * The LGBTQ+ vertical reuses existing top-level page components for sub-apps
 * that were already built (guides, articles, etc.) while letting newer ones
 * fall through to the generic sub-app shell. Mapping lives here so adding a
 * new dedicated page is a one-line change.
 */
const pageMap: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "lesbian-guide":        () => import("@/pages/LesbianGuide").then((m) => ({ default: m.LesbianGuide })),
  "gay-guide":            () => import("@/pages/GayGuide").then((m) => ({ default: m.GayGuide })),
  "bisexual-guide":       () => import("@/pages/BisexualGuide").then((m) => ({ default: m.BisexualGuide })),
  "trans-guide":          () => import("@/pages/TransGuide").then((m) => ({ default: m.TransGuide })),
  "honor-your-identity":  () => import("@/pages/HonorYourIdentity").then((m) => ({ default: m.HonorYourIdentity })),
  "affirming-self-talk":  () => import("@/pages/AffirmingSelfTalk").then((m) => ({ default: m.AffirmingSelfTalk })),
  "create-safe-spaces":   () => import("@/pages/CreateSafeSpaces").then((m) => ({ default: m.CreateSafeSpaces })),
  "set-gentle-boundaries":() => import("@/pages/SetGentleBoundaries").then((m) => ({ default: m.SetGentleBoundaries })),
  "find-your-community":  () => import("@/pages/FindYourCommunity").then((m) => ({ default: m.FindYourCommunity })),
  "process-grief-loss":   () => import("@/pages/ProcessGriefLoss").then((m) => ({ default: m.ProcessGriefLoss })),
  "lgbtq-articles":       () => import("@/pages/LGBTQArticles").then((m) => ({ default: m.LGBTQArticles })),
  "lgbtq-myths-facts":    () => import("@/pages/LGBTQMythsFacts").then((m) => ({ default: m.LGBTQMythsFacts })),
  "lgbtq-tips":           () => import("@/pages/LGBTQTips").then((m) => ({ default: m.LGBTQTips })),
  // Pride trackers ported verbatim from `legacy/LGBTQ+ Selfcare/src/features/pride/trackers/`.
  // Same UI, exit/persistence rewired for our single-repo, no-backend setup.
  "mood-tracker":      () => import("./pages/MoodTracker"),
  "sleep-tracker":     () => import("./pages/SleepTracker"),
  "gratitude-tracker": () => import("./pages/GratitudeTracker"),
  "vibe-tracker":      () => import("./pages/VibeTracker"),
  "daily-care":        () => import("./pages/DailyCareTracker"),
};

const overrideRoutes = Object.entries(pageMap).map(([id, loader]) => {
  const C = lazy(loader);
  return {
    path: `/lgbtq/${id}`,
    element: (
      <Suspense fallback={null}>
        <C />
      </Suspense>
    ),
  };
});

overrideRoutes.push({
  path: "/lgbtq/content/:slug",
  element: (
    <Suspense fallback={null}>
      {(() => {
        const C = lazy(() => import("./pages/PrideStaticViewer"));
        return <C />;
      })()}
    </Suspense>
  ),
});

const base = createVerticalFeature({
  id: "lgbtq",
  label: "LGBTQ+ Self-Care",
  description: "Identity tools, guides, check-ins and community support",
  hubPath: "/lgbtq",
  routePrefix: "/lgbtq",
  icon: Rainbow,
  categoryOrder: ["guides", "identity", "checkins", "relationships", "wellbeing", "learn"],
  categoryTitles: {
    guides: "Identity guides",
    identity: "Identity & pride",
    checkins: "Check-ins & trackers",
    relationships: "Conversations & community",
    wellbeing: "Mental & physical wellbeing",
    learn: "Learn & stories",
  },
  subApps: lgbtqSubApps,
});

/**
 * Splice override routes BEFORE the polymorphic fallback so the deep-ported
 * pages win the match.
 */
const fallbackIdx = base.routes.findIndex((r) => r.path.includes(":subAppId"));
const routes =
  fallbackIdx >= 0
    ? [...base.routes.slice(0, fallbackIdx), ...overrideRoutes, ...base.routes.slice(fallbackIdx)]
    : [...base.routes, ...overrideRoutes];

export const lgbtqFeature = { ...base, routes };
