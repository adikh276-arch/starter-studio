import { useEffect, useState } from "react";
import { Compass, ChevronLeft, ChevronRight, Save } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";

const PROMPTS = [
  "What words feel most like home when describing your identity right now?",
  "When do you feel most yourself? What surrounds you in that moment?",
  "What's one part of your identity you're still figuring out — and what would make exploring it safer?",
  "Who has truly seen you? What did they do that mattered?",
  "Which assumption about you would you most love to retire?",
  "If your identity had a colour, a song and a season, what would they be?",
  "What does pride look like for you on an ordinary Tuesday?",
  "What's one thing your younger self would be relieved to know about who you are today?",
  "Where do you feel pressure to perform an identity that isn't quite yours?",
  "What boundary protects who you are? Is it as firm as it needs to be?",
];

const KEY = "lgbtq:identity-exploration";

/**
 * Guided reflection deck for identity exploration. Walks the user through a
 * curated set of prompts; answers persist per-prompt in localStorage so
 * progress is never lost between sessions.
 */
export function IdentityExplorationPage() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    try {
      const r = localStorage.getItem(KEY);
      setAnswers(r ? JSON.parse(r) : {});
    } catch {
      /* ignore */
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(answers));
    } catch {
      /* ignore */
    }
  }, [answers]);

  const setAnswer = (v: string) => setAnswers((a) => ({ ...a, [idx]: v }));
  const written = Object.values(answers).filter((v) => v.trim()).length;

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[760px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title="Identity Exploration"
          subtitle="Ten prompts to sit with at your own pace."
          icon={Compass}
          backTo="/lgbtq"
        />
        <div className="flex flex-col gap-6 pb-12">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Prompt {idx + 1} of {PROMPTS.length}</span>
            <span>{written} answered</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${((idx + 1) / PROMPTS.length) * 100}%` }}
            />
          </div>

          <section className="rounded-2xl border border-border bg-card p-6">
            <p className="text-lg font-medium leading-relaxed text-foreground">{PROMPTS[idx]}</p>
            <textarea
              value={answers[idx] ?? ""}
              onChange={(e) => setAnswer(e.target.value)}
              rows={6}
              placeholder="Take your time. There's no right answer."
              className="mt-4 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
            />
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                disabled={idx === 0}
                className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground disabled:opacity-40"
              >
                <ChevronLeft size={14} /> Previous
              </button>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Save size={12} /> Saved automatically
              </span>
              <button
                onClick={() => setIdx((i) => Math.min(PROMPTS.length - 1, i + 1))}
                disabled={idx === PROMPTS.length - 1}
                className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-40"
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}