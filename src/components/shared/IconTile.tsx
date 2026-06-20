import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "w-10 h-10 rounded-lg", icon: 18 },
  md: { box: "w-14 h-14 rounded-xl", icon: 24 },
  lg: { box: "w-16 h-16 md:w-20 md:h-20 rounded-2xl", icon: 28 },
} as const;

export function IconTile({ icon: Icon, className, iconClassName, size = "md" }: Props) {
  const s = sizeMap[size];
  return (
    <div className={cn("flex items-center justify-center flex-shrink-0 bg-muted", s.box, className)}>
      <Icon size={s.icon} className={cn("text-foreground", iconClassName)} strokeWidth={2} />
    </div>
  );
}
