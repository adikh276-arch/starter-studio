import { useEffect, useMemo, useState } from "react";
import { Calculator, Plus, Trash2 } from "lucide-react";
import { CalcShell, Field, NumberInput, ResultCard, fmt } from "../components/CalcShell";
import { load, save } from "../lib/storage";

interface Category {
  id: string;
  name: string;
  amount: number;
}

interface State {
  income: number;
  categories: Category[];
}

const DEFAULTS: State = {
  income: 50000,
  categories: [
    { id: "rent", name: "Rent / Housing", amount: 15000 },
    { id: "food", name: "Food & Groceries", amount: 8000 },
    { id: "transport", name: "Transport", amount: 4000 },
    { id: "utilities", name: "Utilities & Bills", amount: 3000 },
    { id: "savings", name: "Savings", amount: 10000 },
  ],
};

export function BudgetPlannerPage() {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => setState(load("budget-planner", DEFAULTS)), []);
  useEffect(() => save("budget-planner", state), [state]);

  const totalSpent = useMemo(
    () => state.categories.reduce((acc, c) => acc + (c.amount || 0), 0),
    [state.categories],
  );
  const remaining = state.income - totalSpent;

  const updateCat = (id: string, patch: Partial<Category>) =>
    setState((s) => ({ ...s, categories: s.categories.map((c) => (c.id === id ? { ...c, ...patch } : c)) }));
  const addCat = () =>
    setState((s) => ({
      ...s,
      categories: [...s.categories, { id: crypto.randomUUID(), name: "New category", amount: 0 }],
    }));
  const removeCat = (id: string) =>
    setState((s) => ({ ...s, categories: s.categories.filter((c) => c.id !== id) }));

  return (
    <CalcShell
      title="Budget Planner"
      subtitle="Plan monthly income, fixed costs, savings and goals."
      icon={Calculator}
    >
      <div className="rounded-2xl border border-border bg-card p-5">
        <Field label="Monthly income">
          <NumberInput
            value={state.income}
            onChange={(v) => setState((s) => ({ ...s, income: v }))}
            prefix="₹"
          />
        </Field>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Categories</p>
          <button
            onClick={addCat}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10"
          >
            <Plus size={14} /> Add
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {state.categories.map((c) => (
            <div key={c.id} className="flex items-center gap-2">
              <input
                value={c.name}
                onChange={(e) => updateCat(c.id, { name: e.target.value })}
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
              />
              <div className="w-40">
                <NumberInput value={c.amount} onChange={(v) => updateCat(c.id, { amount: v })} prefix="₹" />
              </div>
              <button
                onClick={() => removeCat(c.id)}
                className="rounded-md p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                aria-label="Remove"
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ResultCard
        title="Summary"
        highlight={{
          label: remaining >= 0 ? "left to allocate" : "over budget",
          value: fmt(Math.abs(remaining)),
        }}
        rows={[
          { label: "Income", value: fmt(state.income) },
          { label: "Total allocated", value: fmt(totalSpent) },
          {
            label: "Allocated %",
            value: state.income > 0 ? `${Math.round((totalSpent / state.income) * 100)}%` : "—",
          },
          { label: "Categories", value: String(state.categories.length) },
        ]}
      />
    </CalcShell>
  );
}