import { useEffect, useMemo, useState } from "react";
import { Receipt } from "lucide-react";
import { CalcShell, Field, NumberInput, ResultCard, fmt } from "../components/CalcShell";
import { load, save } from "../lib/storage";

interface State {
  principal: number;
  rate: number; // annual %
  years: number;
}

const DEFAULTS: State = { principal: 500000, rate: 9, years: 5 };

export function LoanEmiPlannerPage() {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => setState(load("loan-emi", DEFAULTS)), []);
  useEffect(() => save("loan-emi", state), [state]);

  const { emi, totalPayable, totalInterest } = useMemo(() => {
    const P = state.principal;
    const n = state.years * 12;
    const r = state.rate / 12 / 100;
    if (P <= 0 || n <= 0 || r <= 0) return { emi: 0, totalPayable: P, totalInterest: 0 };
    const e = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return { emi: e, totalPayable: e * n, totalInterest: e * n - P };
  }, [state]);

  return (
    <CalcShell
      title="Loan / EMI Planner"
      subtitle="Estimate loan repayments and amortisation."
      icon={Receipt}
    >
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-5 sm:grid-cols-3">
        <Field label="Loan amount">
          <NumberInput value={state.principal} onChange={(v) => setState((s) => ({ ...s, principal: v }))} prefix="₹" />
        </Field>
        <Field label="Annual interest" hint="e.g. 9 for 9%">
          <NumberInput value={state.rate} onChange={(v) => setState((s) => ({ ...s, rate: v }))} step={0.1} suffix="%" />
        </Field>
        <Field label="Tenure">
          <NumberInput value={state.years} onChange={(v) => setState((s) => ({ ...s, years: v }))} suffix="yrs" />
        </Field>
      </div>

      <ResultCard
        title="Monthly payment"
        highlight={{ label: "EMI / month", value: fmt(Math.round(emi)) }}
        rows={[
          { label: "Principal", value: fmt(state.principal) },
          { label: "Total interest", value: fmt(Math.round(totalInterest)) },
          { label: "Total payable", value: fmt(Math.round(totalPayable)) },
          { label: "Tenure", value: `${state.years * 12} months` },
        ]}
      />
    </CalcShell>
  );
}