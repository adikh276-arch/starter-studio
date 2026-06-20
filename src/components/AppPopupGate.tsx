/**
 * Disabled in the frontend-only phase – no auth, no auto popup.
 * Kept as a no-op so App.tsx doesn't need to change.
 */
export function AppPopupGate() {
  return null;
}
