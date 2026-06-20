/**
 * localStorage-backed shim for the legacy `/ocd/api/logs` endpoint.
 * Every ported OCD activity reads/writes through these helpers (or via the
 * fetch interceptor below) so no backend is required.
 */
const KEY = "ocd.activity-logs.v1";

export interface ActivityLog {
  id: string;
  activity_slug: string;
  payload: unknown;
  created_at: string;
}

function readAll(): ActivityLog[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ActivityLog[]) : [];
  } catch {
    return [];
  }
}

function writeAll(rows: ActivityLog[]) {
  try { localStorage.setItem(KEY, JSON.stringify(rows)); } catch { /* quota */ }
}

export function appendLog(slug: string, payload: unknown): ActivityLog {
  const entry: ActivityLog = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    activity_slug: slug,
    payload,
    created_at: new Date().toISOString(),
  };
  const rows = readAll();
  rows.unshift(entry);
  writeAll(rows.slice(0, 500));
  return entry;
}

export function getLogs(slug: string): ActivityLog[] {
  return readAll().filter((r) => r.activity_slug === slug);
}

/**
 * Installs a one-time `fetch` patch so legacy activity code that does
 * `fetch('/ocd/api/logs', { method:'POST', body:JSON.stringify({...}) })`
 * keeps working against localStorage instead of a real server.
 */
let patched = false;
export function ensureFetchPatch() {
  if (patched || typeof window === "undefined") return;
  patched = true;
  const orig = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;
    if (url.includes("/ocd/api/logs")) {
      if (init?.method === "POST") {
        try {
          const body = JSON.parse((init.body as string) ?? "{}");
          appendLog(body.activity_slug ?? "unknown", body.payload ?? body);
        } catch { /* ignore */ }
        return new Response(JSON.stringify({ success: true }), {
          status: 200, headers: { "Content-Type": "application/json" },
        });
      }
      const slug = new URL(url, window.location.origin).searchParams.get("slug") ?? "";
      const data = getLogs(slug);
      return new Response(JSON.stringify({ success: true, data }), {
        status: 200, headers: { "Content-Type": "application/json" },
      });
    }
    return orig(input as Request, init);
  };
}
