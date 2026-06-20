import { useState } from "react";
import { Activity, RefreshCcw } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";

/**
 * Compact, in-app screening assessments tuned for LGBTQ+ wellbeing. Each set
 * of questions is scored on a simple Likert scale (0–3) and bucketed into a
 * gentle band. These are reflective tools, not diagnostic instruments.
 */
interface Quiz {
  id: string;
  title: string;
  blurb: string;
  questions: string[];
  bands: { max: number; label: string; advice: string }[];
}

const QUIZZES: Quiz[] = [
  {
    id: "minority-stress",
    title: "Minority Stress Check-in",
    blurb: "A short check-in on identity-related stress over the past two weeks.",
    questions: [
      "I've felt I had to hide part of who I am.",
      "I've worried about being judged for my identity.",
      "I've avoided spaces where I didn't feel safe.",
      "I've felt drained after social interactions about my identity.",
      "I've felt isolated from people who get me.",
    ],
    bands: [
      { max: 5,  label: "Light", advice: "Things sound steady. Keep the practices that are working for you." },
      { max: 10, label: "Moderate", advice: "There's some weight here. A reset, a trusted conversation, or community time could help." },
      { max: 15, label: "Heavy", advice: "This is a lot to carry. Consider reaching out to an affirming therapist or peer support." },
    ],
  },
  {
    id: "self-acceptance",
    title: "Self-Acceptance Reflection",
    blurb: "Five quick prompts on how you're relating to yourself right now.",
    questions: [
      "I feel at ease with who I am.",
      "I speak to myself the way I'd speak to a friend.",
      "I let myself feel pride about my identity.",
      "I make space for the parts of me that are still becoming.",
      "I trust my own sense of self.",
    ],
    bands: [
      { max: 5,  label: "Tender", advice: "Be gentle. Small daily affirmations and identity work can soften the edges." },
      { max: 10, label: "Growing", advice: "You're building real ground here. Keep tending it." },
      { max: 15, label: "Rooted", advice: "Beautiful. Notice what's working and lean into more of it." },
    ],
  },
];

const SCALE = ["Not at all", "Sometimes", "Often", "Very often"];

function QuizRunner({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<number[]>(() => quiz.questions.map(() => -1));
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce((a, b) => a + Math.max(0, b), 0);
  const band = quiz.bands.find((b) => score <= b.max) ?? quiz.bands[quiz.bands.length - 1];
  const complete = answers.every((a) => a >= 0);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{quiz.title}</p>
        <p className="mt-2 text-2xl font-semibold text-foreground">{band.label}</p>
        <p className="mt-2 text-sm text-muted-foreground">{band.advice}</p>
        <button
          onClick={() => {
            setAnswers(quiz.questions.map(() => -1));
            setSubmitted(false);
          }}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          <RefreshCcw size={12} /> Retake
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-sm font-semibold text-foreground">{quiz.title}</p>
      <p className="mt-1 text-xs text-muted-foreground">{quiz.blurb}</p>
      <ol className="mt-4 space-y-4">
        {quiz.questions.map((q, i) => (
          <li key={i}>
            <p className="text-sm text-foreground">{i + 1}. {q}</p>
            <div className="mt-2 grid grid-cols-4 gap-1.5">
              {SCALE.map((s, n) => {
                const active = answers[i] === n;
                return (
                  <button
                    key={s}
                    onClick={() => setAnswers((a) => a.map((v, j) => (j === i ? n : v)))}
                    className={`rounded-md border px-2 py-1.5 text-xs transition-colors ${
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
          </li>
        ))}
      </ol>
      <button
        onClick={() => setSubmitted(true)}
        disabled={!complete}
        className="mt-5 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-40"
      >
        See result
      </button>
    </div>
  );
}

export function AssessmentsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title="LGBTQ+ Assessments"
          subtitle="Short, gentle reflections — not diagnostic tools."
          icon={Activity}
          backTo="/lgbtq"
        />
        <div className="flex flex-col gap-6 pb-12">
          {QUIZZES.map((q) => (
            <QuizRunner key={q.id} quiz={q} />
          ))}
        </div>
      </main>
    </div>
  );
}