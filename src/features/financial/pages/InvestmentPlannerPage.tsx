import { useEffect, useMemo, useState } from "react";
import { LineChart } from "lucide-react";
import { CalcShell, Field, NumberInput, ResultCard, fmt } from "../components/CalcShell";
import { load, save } from "../lib/storage";

interface State {
  monthly: number;
  years: number;
  rate: number;
  initial: number;
}

const DEFAULTS: State = { monthly: 5000, years: 10, rate: 12, initial: 0 };

export function InvestmentPlannerPage() {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => setState(load("investment", DEFAULTS)), []);
  useEffect(() => save("investment", state), [state]);

  const { future, invested, gain } = useMemo(() => {
    const n = state.years * 12;
    const r = state.rate / 12 / 100;
    const sipFV = r > 0 ? state.monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r) : state.monthly * n;
    const lumpFV = state.initial * Math.pow(1 + r, n);
    const fv = sipFV + lumpFV;
    const inv = state.monthly * n + state.initial;
    return { future: fv, invested: inv, gain: fv - inv };
  }, [state]);

  return (
    <CalcShell
      title="Investment Planner"
      subtitle="Project simple investment growth."
      icon={LineChart}
    >
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-2">
        <Field label="Monthly investment">
          <NumberInput value={state.monthly} onChange={(v) => setState((s) => ({ ...s, monthly: v }))} prefix="₹" />
        </Field>
        <Field label="One-time amount">
          <NumberInput value={state.initial} onChange={(v) => setState((s) => ({ ...s, initial: v }))} prefix="₹" />
        </Field>
        <Field label="Years">
          <NumberInput value={state.years} onChange={(v) => setState((s) => ({ ...s, years: v }))} />
        </Field>
        <Field label="Expected annual return" hint="Historical equity ~12%">
          <NumberInput value={state.rate} onChange={(v) => setState((s) => ({ ...s, rate: v }))} step={0.1} suffix="%" />
        </Field>
      </div>

      <ResultCard
        title="Projection"
        highlight={{ label: "future value", value: fmt(Math.round(future)) }}
        rows={[
          { label: "Total invested", value: fmt(Math.round(invested)) },
          { label: "Estimated gain", value: fmt(Math.round(gain)) },
          { label: "Horizon", value: `${state.years} years` },
          { label: "Return", value: `${state.rate}% p.a.` },
        ]}
      />
    </CalcShell>
  );
}