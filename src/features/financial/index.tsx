import { lazy, Suspense } from "react";
import type { FeatureModule } from "../registry";
import { FinancialHub } from "./pages/FinancialHub";
import { FinancialSubAppPage } from "./pages/FinancialSubAppPage";
export { financialSubApps } from "./data/subApps";

const pageMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  "budget-buddy": () => import("./activities/budget-buddy/index"),
  "budget-planner": () => import("./activities/budget-planner/index"),
  "check-ins/investment-readiness": () => import("./activities/check-ins/investment-readiness/index"),
  "check-ins/money-stress-quiz": () => import("./activities/check-ins/money-stress-quiz/index"),
  "check-ins/savings-check-up": () => import("./activities/check-ins/savings-check-up/index"),
  "check-ins/spending-style-quiz": () => import("./activities/check-ins/spending-style-quiz/index"),

  "debt-management-guide": () => import("./activities/debt-management-guide/index"),
  "emergency-fund": () => import("./activities/emergency-fund/index"),
  "explore/financial-articles": () => import("./activities/explore/financial-articles/index"),
  "explore/financial-faqs": () => import("./activities/explore/financial-faqs/index"),
  "explore/financial-myths": () => import("./activities/explore/financial-myths/index"),
  "explore/financial-stories": () => import("./activities/explore/financial-stories/index"),
  "explore/financial-tips": () => import("./activities/explore/financial-tips/index"),
  "financial-health-score": () => import("./activities/financial-health-score/index"),
  "goal-planner": () => import("./activities/goal-planner/index"),
  "history": () => import("./activities/history/index"),
  "investment-planner": () => import("./activities/investment-planner/index"),
  "learn/50-30-20-rule": () => import("./activities/learn/50-30-20-rule/index"),
  "learn/avoid-common-money-mistakes": () => import("./activities/learn/avoid-common-money-mistakes/index"),
  "learn/budgeting-basics": () => import("./activities/learn/budgeting-basics/index"),
  "learn/debt-management": () => import("./activities/learn/debt-management/index"),
  "learn/emergency-fund": () => import("./activities/learn/emergency-fund/index"),
  "learn/financial-goals": () => import("./activities/learn/financial-goals/index"),
  "learn/investing-basics": () => import("./activities/learn/investing-basics/index"),
  "learn/mindful-spending": () => import("./activities/learn/mindful-spending/index"),
  "learn/plan-for-your-future": () => import("./activities/learn/plan-for-your-future/index"),
  "learn/saving-habits": () => import("./activities/learn/saving-habits/index"),
  "learn/understand-your-income-expenses": () => import("./activities/learn/understand-your-income-expenses/index"),
  "learn/your-money-priorities": () => import("./activities/learn/your-money-priorities/index"),
  "loan-emi-planner": () => import("./activities/loan-emi-planner/index"),
  "savings-goal": () => import("./activities/savings-goal/index"),
};

const overrideRoutes = Object.entries(pageMap).map(([id, loader]) => {
  const C = lazy(loader);
  return {
    path: `/financial/${id}`,
    element: (
      <Suspense fallback={null}>
        <C />
      </Suspense>
    ),
  };
});

export const financialFeature: FeatureModule = {
  id: "financial",
  label: "Financial Wellbeing",
  description: "Money tools, planners and check-ins",
  entryPath: "/financial-wellbeing",
  routes: [
    { path: "/financial-wellbeing", element: <FinancialHub />, entry: true },
    ...overrideRoutes,
    { path: "/financial/:subAppId", element: <FinancialSubAppPage /> },
  ],
};
