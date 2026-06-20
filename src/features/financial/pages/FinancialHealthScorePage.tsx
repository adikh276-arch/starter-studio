import { useEffect, useMemo, useState } from "react";
import { Activity } from "lucide-react";
import { CalcShell, Field, NumberInput, ResultCard, fmt } from "../components/CalcShell";
import { load, save } from "../lib/storage";

interface State {
  income: number;
  expenses: number;
  savings: number;
  debt: number;
  emergency: number;
}

const DEFAULTS: State = { income: 50000, expenses: 35000, savings: 100000, debt: 200000, emergency: 60000 };

/**
 * Composite score derived from four simple, well-known ratios:
 * - savings rate (target 20%+)
 * - debt-to-income (lower is better)
 * - emergency cover (months of expenses)
 * - liquid net (savings vs expenses)
 * Each ratio contributes up to 25 points, capped at 100.
 */
export function FinancialHealthScorePage() {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => setState(load("health-score", DEFAULTS)), []);
  useEffect(() => save("health-score", state), [state]);

  const { score, breakdown, band } = useMemo(() => {
    const savingsRate = state.income > 0 ? (state.income - state.expenses) / state.income : 0;
    const dti = state.income > 0 ? state.debt / (state.income * 12) : 1;
    const cover = state.expenses > 0 ? state.emergency / state.expenses : 0;
    const liquid = state.expenses > 0 ? state.savings / state.expenses : 0;

    const sr = Math.max(0, Math.min(25, savingsRate * 125));            // 20% rate → 25
    const dt = Math.max(0, Math.min(25, 25 - dti * 25));                // dti=0 → 25, dti≥1 → 0
    const cv = Math.max(0, Math.min(25, (cover / 6) * 25));             // 6 months → 25
    const lq = Math.max(0, Math.min(25, (liquid / 6) * 25));            // 6× expenses → 25

    const total = Math.round(sr + dt + cv + lq);
    const b =
      total >= 80 ? "Excellent" : total >= 60 ? "Healthy" : total >= 40 ? "Fair" : "Needs work";
    return {
      score: total,
      band: b,
      breakdown: [
        { label: "Savings rate", value: `${Math.round(savingsRate * 100)}%` },
        { label: "Debt / yearly income", value: `${Math.round(dti * 100)}%` },
        { label: "Emergency cover", value: `${cover.toFixed(1)} mo` },
        { label: "Liquid / expenses", value: `${liquid.toFixed(1)}×` },
      ],
    };
  }, [state]);

  return (
    <CalcShell
      title="Financial Health Score"
      subtitle="Score your overall financial health."
      icon={Activity}
    >
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2">
        <Field label="Monthly income">
          <NumberInput value={state.income} onChange={(v) => setState((s) => ({ ...s, income: v }))} prefix="₹" />
        </Field>
        <Field label="Monthly expenses">
          <NumberInput value={state.expenses} onChange={(v) => setState((s) => ({ ...s, expenses: v }))} prefix="₹" />
        </Field>
        <Field label="Total savings & investments">
          <NumberInput value={state.savings} onChange={(v) => setState((s) => ({ ...s, savings: v }))} prefix="₹" />
        </Field>
        <Field label="Total debt">
          <NumberInput value={state.debt} onChange={(v) => setState((s) => ({ ...s, debt: v }))} prefix="₹" />
        </Field>
        <Field label="Emergency fund">
          <NumberInput value={state.emergency} onChange={(v) => setState((s) => ({ ...s, emergency: v }))} prefix="₹" />
        </Field>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Your score</p>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-foreground">{score}<span className="text-2xl text-muted-foreground">/100</span></p>
        <p className="mt-1 text-sm text-primary">{band}</p>
      </div>

      <ResultCard title="Ratios" rows={breakdown} />
      <p className="text-xs text-muted-foreground">
        Net worth approx {fmt(state.savings - state.debt)}. Educational estimate only — not financial advice.
      </p>
    </CalcShell>
  );
}