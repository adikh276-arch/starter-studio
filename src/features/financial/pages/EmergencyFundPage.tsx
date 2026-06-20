import { useEffect, useMemo, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { CalcShell, Field, NumberInput, ResultCard, fmt } from "../components/CalcShell";
import { load, save } from "../lib/storage";

interface State {
  monthlyExpenses: number;
  monthsCover: number;
  currentFund: number;
}

const DEFAULTS: State = { monthlyExpenses: 30000, monthsCover: 6, currentFund: 50000 };

export function EmergencyFundPage() {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => setState(load("emergency-fund", DEFAULTS)), []);
  useEffect(() => save("emergency-fund", state), [state]);

  const { target, gap, progress, coveredMonths } = useMemo(() => {
    const t = state.monthlyExpenses * state.monthsCover;
    const g = Math.max(0, t - state.currentFund);
    const p = t > 0 ? Math.min(100, (state.currentFund / t) * 100) : 0;
    const cm = state.monthlyExpenses > 0 ? state.currentFund / state.monthlyExpenses : 0;
    return { target: t, gap: g, progress: p, coveredMonths: cm };
  }, [state]);

  return (
    <CalcShell
      title="Emergency Fund"
      subtitle="Build a cushion for the unexpected."
      icon={ShieldCheck}
    >
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-3">
        <Field label="Monthly expenses">
          <NumberInput value={state.monthlyExpenses} onChange={(v) => setState((s) => ({ ...s, monthlyExpenses: v }))} prefix="₹" />
        </Field>
        <Field label="Months to cover" hint="3–6 is a common target">
          <NumberInput value={state.monthsCover} onChange={(v) => setState((s) => ({ ...s, monthsCover: v }))} min={1} />
        </Field>
        <Field label="Current fund">
          <NumberInput value={state.currentFund} onChange={(v) => setState((s) => ({ ...s, currentFund: v }))} prefix="₹" />
        </Field>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">Progress to target</span>
          <span className="text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <ResultCard
        title="Status"
        highlight={{ label: "months currently covered", value: coveredMonths.toFixed(1) }}
        rows={[
          { label: "Target", value: fmt(target) },
          { label: "Current", value: fmt(state.currentFund) },
          { label: "Gap", value: fmt(gap) },
          { label: "Recommended months", value: String(state.monthsCover) },
        ]}
      />
    </CalcShell>
  );
}