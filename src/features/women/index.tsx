import { Flower2 } from "lucide-react";
import { createVerticalFeature } from "../_shared/createFeature";
import { womenSubApps } from "./data/subApps";
import { FertilityPage } from "./pages/FertilityPage";
import { MenopausePage, PcosPage, ReproductiveHealthPage } from "./pages/instances";

const overrides = [
  { path: "/women/fertility",            element: <FertilityPage /> },
  { path: "/women/menopause",            element: <MenopausePage /> },
  { path: "/women/pcos",                 element: <PcosPage /> },
  { path: "/women/reproductive-health",  element: <ReproductiveHealthPage /> },
];

const base = createVerticalFeature({
  id: "women",
  label: "Women's Wellness",
  description: "Cycle, fertility, menopause, mental health and more",
  hubPath: "/women",
  routePrefix: "/women",
  icon: Flower2,
  categoryOrder: ["core", "wellbeing", "conditions", "learn"],
  categoryTitles: { core: "Core care", wellbeing: "Wellbeing", conditions: "Conditions", learn: "Learn" },
  subApps: womenSubApps,
});

/** Insert overrides before the polymorphic `/women/:subAppId` fallback. */
const fbIdx = base.routes.findIndex((r) => r.path.includes(":subAppId"));
const routes =
  fbIdx >= 0
    ? [...base.routes.slice(0, fbIdx), ...overrides, ...base.routes.slice(fbIdx)]
    : [...base.routes, ...overrides];

export const womenFeature = { ...base, routes };
