/**
 * LocalStorage-backed persistence for the financial vertical. Every sub-app
 * stores its state under a stable key so reloads and cross-tool navigation
 * keep user input intact. No server, no auth – matches the rest of the app's
 * client-only contract.
 */

const NS = "fin:";

export function load<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(NS + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function save<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(NS + key, JSON.stringify(value));
  } catch {
    /* quota / serialisation issues are silently ignored */
  }
}

export function clear(key: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(NS + key);
}