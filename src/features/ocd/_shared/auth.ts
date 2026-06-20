/**
 * Minimal auth shim for ported OCD activities. The legacy code relies on
 * sessionStorage("user_id"); we just return a stable per-browser id so
 * activity logs stay grouped without requiring a real backend.
 */
const KEY = "ocd.local-user-id";

export function getStoredUserId(): string {
  if (typeof window === "undefined") return "anonymous";
  let id = window.localStorage.getItem(KEY);
  if (!id) {
    id = `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    try { window.localStorage.setItem(KEY, id); } catch { /* quota */ }
  }
  return id;
}