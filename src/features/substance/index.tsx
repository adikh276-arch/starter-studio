import { Wine } from "lucide-react";
import type { FeatureModule } from "../registry";
import Landing from "./pages/Landing";
import SubstancePage from "./pages/SubstancePage";

export const substanceFeature: FeatureModule = {
  id: "substance",
  label: "Substance Use Self-Care",
  description: "Substance-specific recovery support and tracking",
  entryPath: "/substance",
  routes: [
    { path: "/substance", element: <Landing />, entry: true },
    { path: "/substance/:slug", element: <SubstancePage /> },
    { path: "/substance/:slug/tracker/:trackerId", element: <SubstancePage /> },
    { path: "/substance/:slug/tool/:toolId", element: <SubstancePage /> },
    { path: "/substance/:slug/tool/:toolId/:contentId", element: <SubstancePage /> },
    { path: "/substance/:slug/tool/:toolId/:contentId/:substep", element: <SubstancePage /> },
    { path: "/substance/:slug/onboarding/:step", element: <SubstancePage /> },
  ],
};
