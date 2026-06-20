import { useEffect, useMemo, useState } from "react";
import { PiggyBank } from "lucide-react";
import { CalcShell, Field, NumberInput, ResultCard, fmt } from "../components/CalcShell";
import { load, save } from "../lib/storage";

interface State {
  goalName: string;
  target: number;
  saved: number;
  monthly: number;
}

const DEFAULTS: State = { goalName: "Emergency cushion", target: 100000, saved: 20000, monthly: 5000 };

export function SavingsGoalPage() {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => setState(load("savings-goal", DEFAULTS)), []);
  useEffect(() => save("savings-goal", state), [state]);

  const { remaining, monthsLeft, progress } = useMemo(() => {
    const rem = Math.max(0, state.target - state.saved);
    const months = state.monthly > 0 ? Math.ceil(rem / state.monthly) : Infinity;
    const pct = state.target > 0 ? Math.min(100, (state.saved / state.target) * 100) : 0;
    return { remaining: rem, monthsLeft: months, progress: pct };
  }, [state]);

  return (
    <CalcShell
      title="Savings Goal"
      subtitle="Set, fund and track a savings goal."
      icon={PiggyBank}
    >
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2">
        <Field label="Goal name">
          <input
            value={state.goalName}
            onChange={(e) => setState((s) => ({ ...s, goalName: e.target.value }))}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
          />
        </Field>
        <Field label="Target amount">
          <NumberInput value={state.target} onChange={(v) => setState((s) => ({ ...s, target: v }))} prefix="₹" />
        </Field>
        <Field label="Already saved">
          <NumberInput value={state.saved} onChange={(v) => setState((s) => ({ ...s, saved: v }))} prefix="₹" />
        </Field>
        <Field label="Monthly contribution">
          <NumberInput value={state.monthly} onChange={(v) => setState((s) => ({ ...s, monthly: v }))} prefix="₹" />
        </Field>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">{state.goalName}</span>
          <span className="text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <ResultCard
        title="Forecast"
        highlight={{
          label: monthsLeft === Infinity ? "set a contribution" : `month${monthsLeft === 1 ? "" : "s"} to go`,
          value: monthsLeft === Infinity ? "—" : String(monthsLeft),
        }}
        rows={[
          { label: "Target", value: fmt(state.target) },
          { label: "Saved", value: fmt(state.saved) },
          { label: "Remaining", value: fmt(remaining) },
          { label: "Monthly", value: fmt(state.monthly) },
        ]}
      />
    </CalcShell>
  );
}