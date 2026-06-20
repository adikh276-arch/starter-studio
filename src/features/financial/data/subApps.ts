import {
  Calculator,
  PiggyBank,
  CreditCard,
  TrendingUp,
  ClipboardList,
  ShieldCheck,
  Activity,
  Target,
  History,
  LineChart,
  BookOpen,
  Receipt,
  Wallet,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for every financial-wellbeing sub-app.
 *
 * Each entry produces:
 *   - one route at `/financial/<id>`
 *   - one tile that can appear on the financial hub or trackers list
 *
 * To port a sub-app: keep the entry here, write a real page component, and
 * swap its `placeholder: true` for `element: <YourPage />` in `index.tsx`.
 */
export interface FinancialSubApp {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  category: "calculator" | "check-in" | "explore" | "tracker";
}

export const financialSubApps: FinancialSubApp[] = [
  { id: "budget-buddy",        label: "Budget Buddy",       description: "Track day-to-day spending against a friendly budget.",      icon: Wallet,        category: "tracker" },
  { id: "budget-planner",      label: "Budget Planner",     description: "Plan monthly income, fixed costs, savings and goals.",      icon: Calculator,    category: "calculator" },
  { id: "check-ins",           label: "Financial Check-ins",description: "Short quizzes to assess money stress and readiness.",       icon: ClipboardList, category: "check-in" },
  { id: "dashboard",           label: "Financial Dashboard",description: "An at-a-glance view of your money habits.",                  icon: Activity,      category: "tracker" },
  { id: "debt-management-guide", label: "Debt Management",  description: "Step-by-step guide to paying down debt.",                   icon: CreditCard,    category: "calculator" },
  { id: "emergency-fund",      label: "Emergency Fund",     description: "Build a cushion for the unexpected.",                       icon: ShieldCheck,   category: "calculator" },
  { id: "explore",             label: "Explore",            description: "Articles, tips, myths and stories.",                        icon: BookOpen,      category: "explore" },
  { id: "financial-health-score", label: "Health Score",    description: "Score your overall financial health.",                      icon: Activity,      category: "check-in" },
  { id: "goal-planner",        label: "Goal Planner",       description: "Define and pace your money goals.",                         icon: Target,        category: "calculator" },
  { id: "history",             label: "History",            description: "Review past entries and check-ins.",                        icon: History,       category: "tracker" },
  { id: "investment-planner",  label: "Investment Planner", description: "Project simple investment growth.",                         icon: LineChart,     category: "calculator" },
  { id: "learn",               label: "Learn",              description: "Lessons on budgeting, debt, saving and investing.",         icon: BookOpen,      category: "explore" },
  { id: "loan-emi-planner",    label: "Loan / EMI Planner", description: "Estimate loan repayments and amortisation.",                icon: Receipt,       category: "calculator" },
  { id: "savings-goal",        label: "Savings Goal",       description: "Set, fund and track a savings goal.",                       icon: PiggyBank,     category: "tracker" },
];

export const financialIcon = TrendingUp;
