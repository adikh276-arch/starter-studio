/**
 * Frontend-only persistence layer for the coaching vertical.
 *
 * Every legacy server action that wrote to Neon / Supabase is replaced by
 * a localStorage-backed key here. Each tracker / assessment / goal store
 * has a stable string key and a typed entry shape.
 *
 * When real auth + DB come back, swap the body of each function for a
 * fetch call — public signatures stay the same.
 */

const NAMESPACE = "mantracare.coaching";

function ns(key: string): string {
  return `${NAMESPACE}.${key}`;
}

function readArray<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ns(key));
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function writeArray<T>(key: string, value: T[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ns(key), JSON.stringify(value));
  } catch {
    // quota exceeded – ignore in frontend-only mode
  }
}

function newId(): string {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 8)
  );
}

/* ------------------------------------------------------------------ */
/*  Generic tracker entries                                             */
/* ------------------------------------------------------------------ */

export interface TrackerEntryBase {
  id: string;
  createdAt: string; // ISO
}

export type TrackerKind =
  | "daily-focus"
  | "emotional-regulation"
  | "confidence-identity"
  | "coaching-integration";

export function listTrackerEntries<T extends TrackerEntryBase>(kind: TrackerKind): T[] {
  return readArray<T>(`tracker.${kind}`).sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function saveTrackerEntry<T extends Omit<TrackerEntryBase, "id" | "createdAt">>(
  kind: TrackerKind,
  data: T,
): TrackerEntryBase & T {
  const entry = { id: newId(), createdAt: new Date().toISOString(), ...data };
  const all = readArray<TrackerEntryBase & T>(`tracker.${kind}`);
  all.unshift(entry);
  writeArray(`tracker.${kind}`, all);
  return entry;
}

export function deleteTrackerEntry(kind: TrackerKind, id: string): void {
  writeArray(
    `tracker.${kind}`,
    readArray<TrackerEntryBase>(`tracker.${kind}`).filter((e) => e.id !== id),
  );
}

/* ------------------------------------------------------------------ */
/*  Goal momentum – goals + per-goal daily entries                      */
/* ------------------------------------------------------------------ */

export interface Goal {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
}

export interface GoalEntry extends TrackerEntryBase {
  goalId: string;
  drive: number;
  energy: number;
  focus: number;
  clarity: number;
  tookAction: boolean;
  impactLevel?: number;
  actionNote?: string;
  blocker?: string;
}

export const goalsStore = {
  list(): Goal[] {
    return readArray<Goal>("goals");
  },
  create(title: string, description?: string): Goal {
    const goal: Goal = { id: newId(), title, description, createdAt: new Date().toISOString() };
    const all = readArray<Goal>("goals");
    all.push(goal);
    writeArray("goals", all);
    return goal;
  },
  update(id: string, patch: Partial<Goal>): void {
    writeArray(
      "goals",
      readArray<Goal>("goals").map((g) => (g.id === id ? { ...g, ...patch } : g)),
    );
  },
  remove(id: string): void {
    writeArray("goals", readArray<Goal>("goals").filter((g) => g.id !== id));
    writeArray(
      "goal-entries",
      readArray<GoalEntry>("goal-entries").filter((e) => e.goalId !== id),
    );
  },
};

export const goalEntriesStore = {
  listByGoal(goalId: string): GoalEntry[] {
    return readArray<GoalEntry>("goal-entries")
      .filter((e) => e.goalId === goalId)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  },
  save(data: Omit<GoalEntry, "id" | "createdAt">): GoalEntry {
    const entry: GoalEntry = { id: newId(), createdAt: new Date().toISOString(), ...data };
    const all = readArray<GoalEntry>("goal-entries");
    all.unshift(entry);
    writeArray("goal-entries", all);
    return entry;
  },
};

/* ------------------------------------------------------------------ */
/*  Assessment results                                                  */
/* ------------------------------------------------------------------ */

export interface AssessmentResult {
  id: string;
  assessmentId: string;
  completedAt: string;
  answers: Record<string, string>;
  focusAreaScores: Record<string, number>;
}

export const assessmentsStore = {
  list(): AssessmentResult[] {
    return readArray<AssessmentResult>("assessments").sort((a, b) =>
      a.completedAt < b.completedAt ? 1 : -1,
    );
  },
  latestFor(assessmentId: string): AssessmentResult | undefined {
    return assessmentsStore.list().find((r) => r.assessmentId === assessmentId);
  },
  save(data: Omit<AssessmentResult, "id" | "completedAt">): AssessmentResult {
    const result: AssessmentResult = {
      id: newId(),
      completedAt: new Date().toISOString(),
      ...data,
    };
    const all = readArray<AssessmentResult>("assessments");
    all.unshift(result);
    writeArray("assessments", all);
    return result;
  },
};

/* ------------------------------------------------------------------ */
/*  Exercise history (used by the 12 special exercise components)       */
/* ------------------------------------------------------------------ */

/**
 * Legacy exercise components write directly to `localStorage` keys like
 * `exercise-history-smart-goals`. Those keys are preserved as-is so we
 * can drop ported components in without rewriting their internals.
 * Helpers below let new code list/clear that history in a typed way.
 */
export function legacyExerciseHistoryKey(slug: string): string {
  return `exercise-history-${slug}`;
}

export interface LegacyExerciseEntry {
  id: string;
  date: string;
  data?: Record<string, unknown>;
  [k: string]: unknown;
}

export function listExerciseHistory(slug: string): LegacyExerciseEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(legacyExerciseHistoryKey(slug));
    return raw ? (JSON.parse(raw) as LegacyExerciseEntry[]) : [];
  } catch {
    return [];
  }
}