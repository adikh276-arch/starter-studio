import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Sidebar } from "@/features/financial/components/Sidebar";
import { MobileNav } from "@/features/financial/components/MobileNav";
import { PageHeader } from "@/shared/components";

/**
 * Shared frame used by every financial calculator / planner page so they all
 * inherit the same sidebar, header, and content rhythm. Pages only own their
 * inputs and result blocks.
 */
export function CalcShell({
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
        <PageHeader title={title} subtitle={subtitle} icon={icon} backTo="/financial-wellbeing" />
        <div className="flex flex-col gap-6 pb-12">{children}</div>
      </main>
    </div>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
      {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

export function NumberInput({
  value,
  onChange,
  min = 0,
  step = 1,
  prefix,
  suffix,
  placeholder,
}: {
  value: number | "";
  onChange: (v: number) => void;
  min?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex items-center rounded-lg border border-border bg-card focus-within:border-primary/60">
      {prefix && <span className="pl-3 text-sm text-muted-foreground">{prefix}</span>}
      <input
        type="number"
        inputMode="decimal"
        min={min}
        step={step}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
        className="w-full bg-transparent px-3 py-2 text-sm text-foreground outline-none"
      />
      {suffix && <span className="pr-3 text-sm text-muted-foreground">{suffix}</span>}
    </div>
  );
}

export function ResultCard({
  title,
  rows,
  highlight,
}: {
  title: string;
  rows: { label: string; value: string }[];
  highlight?: { label: string; value: string };
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</p>
      {highlight && (
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-3xl font-semibold tracking-tight text-foreground">
            {highlight.value}
          </span>
          <span className="text-sm text-muted-foreground">{highlight.label}</span>
        </div>
      )}
      <dl className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between gap-3 border-b border-border/60 py-1.5 last:border-0">
            <dt className="text-muted-foreground">{r.label}</dt>
            <dd className="font-medium text-foreground">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export const fmt = (n: number, currency = "₹") =>
  `${currency}${n.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;