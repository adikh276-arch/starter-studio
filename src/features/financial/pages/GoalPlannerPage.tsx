import { useEffect, useMemo, useState } from "react";
import { Target, Plus, Trash2 } from "lucide-react";
import { CalcShell, Field, NumberInput, fmt } from "../components/CalcShell";
import { load, save } from "../lib/storage";

interface Goal {
  id: string;
  name: string;
  target: number;
  saved: number;
  monthly: number;
}

const DEFAULTS: Goal[] = [
  { id: "1", name: "Vacation", target: 60000, saved: 10000, monthly: 5000 },
  { id: "2", name: "New laptop", target: 80000, saved: 20000, monthly: 4000 },
];

export function GoalPlannerPage() {
  const [goals, setGoals] = useState<Goal[]>(DEFAULTS);

  useEffect(() => setGoals(load("goals", DEFAULTS)), []);
  useEffect(() => save("goals", goals), [goals]);

  const total = useMemo(
    () => ({
      target: goals.reduce((a, g) => a + g.target, 0),
      saved: goals.reduce((a, g) => a + g.saved, 0),
      monthly: goals.reduce((a, g) => a + g.monthly, 0),
    }),
    [goals],
  );

  const upd = (id: string, patch: Partial<Goal>) =>
    setGoals((gs) => gs.map((g) => (g.id === id ? { ...g, ...patch } : g)));
  const add = () =>
    setGoals((gs) => [...gs, { id: crypto.randomUUID(), name: "New goal", target: 0, saved: 0, monthly: 0 }]);
  const remove = (id: string) => setGoals((gs) => gs.filter((g) => g.id !== id));

  return (
    <CalcShell
      title="Goal Planner"
      subtitle="Define and pace your money goals."
      icon={Target}
    >
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold text-foreground">Your goals</p>
          <button
            onClick={add}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10"
          >
            <Plus size={14} /> Add goal
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {goals.map((g) => {
            const rem = Math.max(0, g.target - g.saved);
            const months = g.monthly > 0 ? Math.ceil(rem / g.monthly) : Infinity;
            const pct = g.target > 0 ? Math.min(100, (g.saved / g.target) * 100) : 0;
            return (
              <div key={g.id} className="rounded-xl border border-border p-4">
                <div className="flex items-center gap-2">
                  <input
                    value={g.name}
                    onChange={(e) => upd(g.id, { name: e.target.value })}
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium outline-none focus:border-primary/60"
                  />
                  <button
                    onClick={() => remove(g.id)}
                    className="rounded-md p-2 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    aria-label="Remove"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <Field label="Target"><NumberInput value={g.target} onChange={(v) => upd(g.id, { target: v })} prefix="₹" /></Field>
                  <Field label="Saved"><NumberInput value={g.saved} onChange={(v) => upd(g.id, { saved: v })} prefix="₹" /></Field>
                  <Field label="Per month"><NumberInput value={g.monthly} onChange={(v) => upd(g.id, { monthly: v })} prefix="₹" /></Field>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{Math.round(pct)}% funded</span>
                  <span>
                    {months === Infinity ? "Set a contribution" : `${months} month${months === 1 ? "" : "s"} to go`}
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { l: "Total target", v: fmt(total.target) },
          { l: "Total saved", v: fmt(total.saved) },
          { l: "Monthly need", v: fmt(total.monthly) },
        ].map((c) => (
          <div key={c.l} className="rounded-2xl border border-border bg-card p-4 text-center">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.l}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{c.v}</p>
          </div>
        ))}
      </div>
    </CalcShell>
  );
}