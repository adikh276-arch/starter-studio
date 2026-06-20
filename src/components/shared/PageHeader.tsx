import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { BackButton } from "./BackButton";

interface Props {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  back?: boolean;
  backTo?: string;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({ title, subtitle, icon: Icon, back = true, backTo, actions, className = "" }: Props) {
  return (
    <header className={`mb-6 flex items-start gap-3 ${className}`}>
      {back && <BackButton to={backTo} className="mt-1" />}
      {Icon && (
        <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon size={20} className="text-foreground" strokeWidth={2} />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-medium text-foreground tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}
