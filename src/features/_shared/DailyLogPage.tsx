import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Plus, Trash2 } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";

/**
 * Generic "log it, see it" tracker page shared across verticals (LGBTQ+,
 * Women's, Substance Use, OCD, etc.). One page handles:
 *   - date picker
 *   - 1-5 intensity / rating slider (configurable label)
 *   - toggleable tag chips (configurable vocabulary)
 *   - free-text notes
 *   - persistent local history with delete
 *
 * Instances differ only in `title`, `subtitle`, `icon`, `storageKey`, tags
 * and back-link, so each tracker is a 10-line file.
 */

export interface DailyLogEntry {
  id: string;
  date: string;
  rating: number;
  tags: string[];
  notes: string;
}

function load<T>(k: string, fb: T): T {
  try {
    const r = localStorage.getItem(k);
    return r ? (JSON.parse(r) as T) : fb;
  } catch {
    return fb;
  }
}
function save<T>(k: string, v: T) {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {
    /* ignore */
  }
}

export interface DailyLogProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  /** Fully qualified localStorage key, e.g. "lgbtq:mood-log". */
  storageKey: string;
  /** Where the back arrow returns to. */
  backTo: string;
  /** Label for the 1-5 slider. */
  ratingLabel?: string;
  /** Optional preset chip vocabulary. */
  tagOptions?: string[];
  /** Optional placeholder for the notes field. */
  notesPlaceholder?: string;
}

export function DailyLogPage({
  title,
  subtitle,
  icon,
  storageKey,
  backTo,
  ratingLabel = "Rating",
  tagOptions = [],
  notesPlaceholder = "What you noticed, what helped…",
}: DailyLogProps) {
  const today = () => new Date().toISOString().slice(0, 10);
  const empty = (): DailyLogEntry => ({
    id: crypto.randomUUID(),
    date: today(),
    rating: 3,
    tags: [],
    notes: "",
  });

  const [draft, setDraft] = useState<DailyLogEntry>(empty);
  const [entries, setEntries] = useState<DailyLogEntry[]>([]);

  useEffect(() => setEntries(load<DailyLogEntry[]>(storageKey, [])), [storageKey]);
  useEffect(() => save(storageKey, entries), [entries, storageKey]);

  const toggleTag = (t: string) =>
    setDraft((d) => ({
      ...d,
      tags: d.tags.includes(t) ? d.tags.filter((x) => x !== t) : [...d.tags, t],
    }));

  const log = () => {
    if (!draft.notes && draft.tags.length === 0 && draft.rating === 3) return;
    setEntries((es) => [draft, ...es]);
    setDraft(empty());
  };
  const remove = (id: string) => setEntries((es) => es.filter((e) => e.id !== id));

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader title={title} subtitle={subtitle} icon={icon} backTo={backTo} />
        <div className="flex flex-col gap-6 pb-12">
          <section className="rounded-2xl border border-border bg-card p-5">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Log today
            </h2>
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
                <span className="text-sm font-medium">{ratingLabel} ({draft.rating}/5)</span>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={draft.rating}
                  onChange={(e) => setDraft({ ...draft, rating: Number(e.target.value) })}
                  className="mt-2"
                />
              </label>
            </div>

            {tagOptions.length > 0 && (
              <>
                <p className="mt-5 text-sm font-medium">Tag what stands out</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tagOptions.map((s) => {
                    const active = draft.tags.includes(s);
                    return (
                      <button
                        key={s}
                        onClick={() => toggleTag(s)}
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
              </>
            )}

            <label className="mt-5 flex flex-col gap-1.5">
              <span className="text-sm font-medium">Notes</span>
              <textarea
                value={draft.notes}
                onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
                rows={3}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
                placeholder={notesPlaceholder}
              />
            </label>

            <button
              onClick={log}
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              <Plus size={14} /> Save entry
            </button>
          </section>

          <section className="rounded-2xl border border-border bg-card p-5">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              History ({entries.length})
            </h2>
            {entries.length === 0 ? (
              <p className="text-sm text-muted-foreground">No entries yet. Your log will appear here.</p>
            ) : (
              <ul className="divide-y divide-border">
                {entries.map((e) => (
                  <li key={e.id} className="flex items-start justify-between gap-3 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {new Date(e.date).toLocaleDateString()} · {e.rating}/5
                      </p>
                      {e.tags.length > 0 && (
                        <p className="mt-0.5 text-xs text-muted-foreground">{e.tags.join(" · ")}</p>
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
          </section>
        </div>
      </main>
    </div>
  );
}