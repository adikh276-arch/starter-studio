import { useEffect, useMemo, useState } from "react";
import { Flower2 } from "lucide-react";
import { Shell, Card, load, save } from "../components/Shell";

interface State {
  lastPeriod: string; // YYYY-MM-DD
  cycleLength: number;
  periodLength: number;
}

const today = () => new Date().toISOString().slice(0, 10);
const DEFAULTS: State = { lastPeriod: today(), cycleLength: 28, periodLength: 5 };

function addDays(d: string, n: number) {
  const date = new Date(d);
  date.setDate(date.getDate() + n);
  return date;
}
const human = (d: Date) =>
  d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });

/**
 * Lightweight, education-only cycle tracker. Predictions use the standard
 * "ovulation ~ next-period − 14 days" heuristic and a 6-day fertile window
 * ending the day after ovulation. Not a contraceptive or medical tool.
 */
export function FertilityPage() {
  const [state, setState] = useState<State>(DEFAULTS);

  useEffect(() => setState(load("fertility", DEFAULTS)), []);
  useEffect(() => save("fertility", state), [state]);

  const result = useMemo(() => {
    if (!state.lastPeriod) return null;
    const nextPeriod = addDays(state.lastPeriod, state.cycleLength);
    const ovulation = addDays(state.lastPeriod, state.cycleLength - 14);
    const fertileStart = addDays(state.lastPeriod, state.cycleLength - 19);
    const fertileEnd = addDays(state.lastPeriod, state.cycleLength - 13);
    const periodEnd = addDays(state.lastPeriod, state.periodLength - 1);
    const daysToNext = Math.round(
      (nextPeriod.getTime() - new Date(today()).getTime()) / 86400000,
    );
    return { nextPeriod, ovulation, fertileStart, fertileEnd, periodEnd, daysToNext };
  }, [state]);

  return (
    <Shell
      title="Fertility & Cycle"
      subtitle="Cycle tracking, ovulation insights and fertility tools."
      icon={Flower2}
    >
      <Card title="Your cycle">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">First day of last period</span>
            <input
              type="date"
              value={state.lastPeriod}
              onChange={(e) => setState((s) => ({ ...s, lastPeriod: e.target.value }))}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Cycle length (days)</span>
            <input
              type="number"
              min={20}
              max={40}
              value={state.cycleLength}
              onChange={(e) => setState((s) => ({ ...s, cycleLength: Number(e.target.value) || 28 }))}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Period length (days)</span>
            <input
              type="number"
              min={1}
              max={10}
              value={state.periodLength}
              onChange={(e) => setState((s) => ({ ...s, periodLength: Number(e.target.value) || 5 }))}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
          </label>
        </div>
      </Card>

      {result && (
        <>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Next period
            </p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              {human(result.nextPeriod)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {result.daysToNext >= 0
                ? `in ${result.daysToNext} day${result.daysToNext === 1 ? "" : "s"}`
                : `${Math.abs(result.daysToNext)} day(s) late`}
            </p>
          </Card>

          <Card title="This cycle">
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span className="text-muted-foreground">Period ends</span><span className="font-medium">{human(result.periodEnd)}</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Fertile window</span><span className="font-medium">{human(result.fertileStart)} – {human(result.fertileEnd)}</span></li>
              <li className="flex justify-between"><span className="text-muted-foreground">Predicted ovulation</span><span className="font-medium">{human(result.ovulation)}</span></li>
            </ul>
          </Card>
        </>
      )}

      <p className="text-xs text-muted-foreground">
        Predictions are estimates and should not be used as contraception or medical advice.
      </p>
    </Shell>
  );
}