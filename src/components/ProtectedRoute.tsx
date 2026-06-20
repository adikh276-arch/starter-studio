import type { ReactNode } from "react";

/**
 * Auth has been removed for the frontend-only phase.
 * Kept as a passthrough so route definitions don't need to change.
 * When real auth is reintroduced, gate logic goes here.
 */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
