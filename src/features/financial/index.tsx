import type { FeatureModule } from "../registry";
import { FinancialHub } from "./pages/FinancialHub";
import { FinancialSubAppPage } from "./pages/FinancialSubAppPage";

export { financialSubApps } from "./data/subApps";

export const financialFeature: FeatureModule = {
  id: "financial",
  label: "Financial Wellbeing",
  description: "Money tools, planners and check-ins",
  entryPath: "/financial-wellbeing",
  routes: [
    { path: "/financial-wellbeing", element: <FinancialHub />, entry: true },
    { path: "/financial/:subAppId", element: <FinancialSubAppPage /> },
  ],
};
