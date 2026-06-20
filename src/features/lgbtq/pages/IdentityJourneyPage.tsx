import { useEffect, useState } from "react";
import { Target, Plus, Trash2, Check } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";

interface Milestone {
  id: string;
  text: string;
  date: string;
  done: boolean;
}

const KEY = "lgbtq:identity-journey";
const SUGGESTIONS = [
  "Found a word for who I am",
  "Told one trusted person",
  "Found a community",
  "Started therapy or journaling",
  "Set a boundary that protected me",
  "Celebrated a Pride moment",
];

/**
 * Personal milestone tracker for identity journeys. Users can pick from
 * suggested milestones or add their own; each one gets a date and a
 * completion checkbox. Stored locally, no account required.
 */
export function IdentityJourneyPage() {
  const today = () => new Date().toISOString().slice(0, 10);
  const [items, setItems] = useState<Milestone[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    try {
      const r = localStorage.getItem(KEY);
      setItems(r ? JSON.parse(r) : []);
    } catch {
      /* ignore */
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setItems((xs) => [{ id: crypto.randomUUID(), text: t, date: today(), done: false }, ...xs]);
    setDraft("");
  };
  const toggle = (id: string) =>
    setItems((xs) => xs.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));
  const remove = (id: string) => setItems((xs) => xs.filter((x) => x.id !== id));

  const done = items.filter((i) => i.done).length;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title="Identity Journey"
          subtitle="Mark milestones at your own pace. There's no finish line."
          icon={Target}
          backTo="/lgbtq"
        />
        <div className="flex flex-col gap-6 pb-12">
          <section className="rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">
              {done} of {items.length || 0} marked so far
            </p>
            <div className="mt-3 flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && add(draft)}
                placeholder="Add a milestone of your own…"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
              />
              <button
                onClick={() => add(draft)}
                className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                <Plus size={14} /> Add
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => add(s)}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground"
                >
                  + {s}
                </button>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-5">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Your milestones
            </h2>
            {items.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nothing here yet. Pick a suggestion above or add your own.</p>
            ) : (
              <ul className="divide-y divide-border">
                {items.map((m) => (
                  <li key={m.id} className="flex items-center gap-3 py-3">
                    <button
                      onClick={() => toggle(m.id)}
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                        m.done
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-transparent"
                      }`}
                      aria-label={m.done ? "Mark incomplete" : "Mark complete"}
                    >
                      <Check size={14} />
                    </button>
                    <div className="min-w-0 flex-1">
                      <p className={`text-sm ${m.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                        {m.text}
                      </p>
                      <p className="text-xs text-muted-foreground">{new Date(m.date).toLocaleDateString()}</p>
                    </div>
                    <button
                      onClick={() => remove(m.id)}
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