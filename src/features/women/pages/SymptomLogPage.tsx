import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Plus, Trash2 } from "lucide-react";
import { Shell, Card, load, save } from "../components/Shell";

interface Entry {
  id: string;
  date: string;
  severity: number; // 1-5
  symptoms: string[];
  notes: string;
}

/**
 * Reusable daily symptom log used by Menopause, PCOS and Reproductive Health
 * sub-apps. Each instance is namespaced by `storageKey` so logs don't bleed
 * between contexts. Symptom chips are configurable per sub-app.
 */
export function SymptomLogPage({
  title,
  subtitle,
  icon,
  storageKey,
  symptomOptions,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  storageKey: string;
  symptomOptions: string[];
}) {
  const today = () => new Date().toISOString().slice(0, 10);
  const empty = (): Entry => ({
    id: crypto.randomUUID(),
    date: today(),
    severity: 3,
    symptoms: [],
    notes: "",
  });

  const [draft, setDraft] = useState<Entry>(empty);
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => setEntries(load(storageKey, [])), [storageKey]);
  useEffect(() => save(storageKey, entries), [entries, storageKey]);

  const toggle = (s: string) =>
    setDraft((d) => ({
      ...d,
      symptoms: d.symptoms.includes(s) ? d.symptoms.filter((x) => x !== s) : [...d.symptoms, s],
    }));

  const log = () => {
    setEntries((es) => [draft, ...es]);
    setDraft(empty());
  };
  const remove = (id: string) => setEntries((es) => es.filter((e) => e.id !== id));

  return (
    <Shell title={title} subtitle={subtitle} icon={icon}>
      <Card title="Log today">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Date</span>
            <input
              type="date"
              value={draft.date}
              onChange={(e) => setDraft({ ...draft, date: e.target.value })}
              className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium">Severity ({draft.severity}/5)</span>
            <input
              type="range"
              min={1}
              max={5}
              value={draft.severity}
              onChange={(e) => setDraft({ ...draft, severity: Number(e.target.value) })}
              className="mt-2"
            />
          </label>
        </div>

        <p className="mt-5 text-sm font-medium">Symptoms</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {symptomOptions.map((s) => {
            const active = draft.symptoms.includes(s);
            return (
              <button
                key={s}
                onClick={() => toggle(s)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  active
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        <label className="mt-5 flex flex-col gap-1.5">
          <span className="text-sm font-medium">Notes</span>
          <textarea
            value={draft.notes}
            onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
            rows={3}
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            placeholder="What you noticed, triggers, what helped…"
          />
        </label>

        <button
          onClick={log}
          className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          <Plus size={14} /> Save entry
        </button>
      </Card>

      <Card title={`History (${entries.length})`}>
        {entries.length === 0 ? (
          <p className="text-sm text-muted-foreground">No entries yet. Your log will appear here.</p>
        ) : (
          <ul className="divide-y divide-border">
            {entries.map((e) => (
              <li key={e.id} className="flex items-start justify-between gap-3 py-3">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {new Date(e.date).toLocaleDateString()} · {e.severity}/5
                  </p>
                  {e.symptoms.length > 0 && (
                    <p className="mt-0.5 text-xs text-muted-foreground">{e.symptoms.join(" · ")}</p>
                  )}
                  {e.notes && <p className="mt-1 text-sm text-foreground">{e.notes}</p>}
                </div>
                <button
                  onClick={() => remove(e.id)}
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  aria-label="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </Shell>
  );
}