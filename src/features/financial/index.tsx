import type { FeatureModule } from "../registry";
import { FinancialHub } from "./pages/FinancialHub";
import { FinancialSubAppPage } from "./pages/FinancialSubAppPage";
import { BudgetPlannerPage } from "./pages/BudgetPlannerPage";
import { SavingsGoalPage } from "./pages/SavingsGoalPage";
import { EmergencyFundPage } from "./pages/EmergencyFundPage";
import { LoanEmiPlannerPage } from "./pages/LoanEmiPlannerPage";
import { InvestmentPlannerPage } from "./pages/InvestmentPlannerPage";
import { FinancialHealthScorePage } from "./pages/FinancialHealthScorePage";
import { GoalPlannerPage } from "./pages/GoalPlannerPage";

export { financialSubApps } from "./data/subApps";

export const financialFeature: FeatureModule = {
  id: "financial",
  label: "Financial Wellbeing",
  description: "Money tools, planners and check-ins",
  entryPath: "/financial-wellbeing",
  routes: [
    { path: "/financial-wellbeing", element: <FinancialHub />, entry: true },
    // Deep-ported sub-apps. Order matters: specific routes must come BEFORE
    // the polymorphic `/financial/:subAppId` fallback below.
    { path: "/financial/budget-planner", element: <BudgetPlannerPage /> },
    { path: "/financial/savings-goal", element: <SavingsGoalPage /> },
    { path: "/financial/emergency-fund", element: <EmergencyFundPage /> },
    { path: "/financial/loan-emi-planner", element: <LoanEmiPlannerPage /> },
    { path: "/financial/investment-planner", element: <InvestmentPlannerPage /> },
    { path: "/financial/financial-health-score", element: <FinancialHealthScorePage /> },
    { path: "/financial/goal-planner", element: <GoalPlannerPage /> },
    { path: "/financial/:subAppId", element: <FinancialSubAppPage /> },
  ],
};
