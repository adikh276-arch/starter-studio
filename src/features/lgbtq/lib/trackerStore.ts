/**
 * LocalStorage-backed replacement for the legacy `@/app/actions/trackers`
 * server actions. Keeps the same call signatures so the ported tracker
 * components work unchanged.
 *
 * Each entry is stored under `lgbtq:tracker:<tableName>` as a JSON array,
 * newest-first, with a generated `id`, `created_at`, and any payload the
 * caller passed in. No backend, no network, no third-party APIs.
 */

const PREFIX = "lgbtq:tracker:";

export interface TrackerEntry {
  id: string;
  created_at: string;
  [key: string]: unknown;
}

function readTable(tableName: string): TrackerEntry[] {
  try {
    const raw = localStorage.getItem(PREFIX + tableName);
    return raw ? (JSON.parse(raw) as TrackerEntry[]) : [];
  } catch {
    return [];
  }
}

function writeTable(tableName: string, rows: TrackerEntry[]) {
  try {
    localStorage.setItem(PREFIX + tableName, JSON.stringify(rows));
  } catch {
    /* quota — ignore */
  }
}

function insert(tableName: string, payload: Record<string, unknown>) {
  const entry: TrackerEntry = {
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    ...payload,
  };
  const rows = readTable(tableName);
  rows.unshift(entry);
  writeTable(tableName, rows.slice(0, 200)); // hard cap to avoid runaway storage
  return entry;
}

/* ---------- public API mirroring the legacy server actions ----------------*/

export async function saveMoodEntry(
  _userId: string,
  value: number,
  label: string,
  note: string,
) {
  return insert("mood_entries", { value, label, note });
}

export async function saveGenericTrackerEntry(
  tableName: string,
  _userId: string,
  payload: Record<string, unknown>,
) {
  return insert(tableName, payload);
}

export async function getTrackerHistory(
  tableName: string,
  _userId: string,
): Promise<{ success: true; data: TrackerEntry[] }> {
  return { success: true, data: readTable(tableName) };
}

/** No-op stand-in for the legacy webhook trigger (no external requests). */
export function triggerActivityWebhook() {
  /* intentionally empty */
}