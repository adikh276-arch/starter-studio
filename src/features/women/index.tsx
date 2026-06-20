import { lazy, Suspense } from "react";
import type { FeatureModule } from "../registry";

const Module = lazy(() => import("./views/Module"));
const Understanding = lazy(() => import("./views/Understanding"));
const Resource = lazy(() => import("./views/Resource"));
const ArticleStory = lazy(() => import("./views/ArticleStory"));
const Tip = lazy(() => import("./views/Tip"));

export const womenFeature: FeatureModule = {
  id: "women",
  label: "Women's Wellness",
  description: "Reproductive health, PCOS, and more",
  entryPath: "/women-wellness-self-care",
  routes: [
    { path: "/women/module/:slug", element: <Suspense fallback={null}><Module /></Suspense> },
    { path: "/women/module/:slug/understanding/:index", element: <Suspense fallback={null}><Understanding /></Suspense> },
    { path: "/women/module/:slug/:kind/:index", element: <Suspense fallback={null}><ArticleStory /></Suspense> },
    { path: "/women/module/:slug/:resource", element: <Suspense fallback={null}><Resource /></Suspense> },
    { path: "/women/tips/:slug", element: <Suspense fallback={null}><Tip /></Suspense> },
  ],
};
