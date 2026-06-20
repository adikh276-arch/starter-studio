import type { ReactNode } from "react";

interface Props {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeader({ title, description, action, className = "" }: Props) {
  return (
    <div className={`flex items-end justify-between mb-4 ${className}`}>
      <div>
        <h2 className="text-xl font-semibold text-primary tracking-tight">{title}</h2>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      {action}
    </div>
  );
}
