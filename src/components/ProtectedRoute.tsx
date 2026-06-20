import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const userString = typeof window !== "undefined" ? localStorage.getItem("mantraUser") : null;
  if (!userString) return <Navigate to="/" replace />;
  return <>{children}</>;
}
