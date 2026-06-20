import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";

/**
 * Shared page frame for every Women's Wellness sub-app so each one inherits
 * the same sidebar, header rhythm and back-to-hub navigation.
 */
export function Shell({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader title={title} subtitle={subtitle} icon={icon} backTo="/women" />
        <div className="flex flex-col gap-6 pb-12">{children}</div>
      </main>
    </div>
  );
}

export function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      {title && (
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

const NS = "women:";
export function load<T>(k: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(NS + k);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
export function save<T>(k: string, v: T) {
  try {
    localStorage.setItem(NS + k, JSON.stringify(v));
  } catch {
    /* ignore */
  }
}