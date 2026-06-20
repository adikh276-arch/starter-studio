/**
 * Thin compatibility layer so legacy components written against the
 * shadcn `useToast()` hook (or a bare `toast(...)` import) keep working
 * by delegating to the project's installed Sonner toaster.
 */
import { toast as sonner } from "sonner";

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

function notify(opts: ToastOptions | string) {
  if (typeof opts === "string") {
    sonner(opts);
    return;
  }
  const { title, description, variant } = opts;
  const fn = variant === "destructive" ? sonner.error : sonner;
  fn(title ?? description ?? "", description && title ? { description } : undefined);
}

export const toast = notify;

export function useToast() {
  return { toast: notify };
}