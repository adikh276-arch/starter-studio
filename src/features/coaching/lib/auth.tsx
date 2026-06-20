import type { ReactNode } from "react";

/**
 * Auth has been stripped for the frontend-only phase. The legacy
 * `AuthGate` redirected to a token portal; here it's a passthrough
 * so any ported component that wraps content in `<AuthGate>` still
 * compiles and renders.
 */
export function AuthGate({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

/** Stable demo user id consumed wherever the legacy code expected `user_id`. */
export const DEMO_USER_ID = "local-user";

export function useCoachUser() {
  return { userId: DEMO_USER_ID, loading: false };
}