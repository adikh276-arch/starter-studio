import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

interface Props {
  to?: string;
  className?: string;
  label?: string;
}

export function BackButton({ to, className = "", label }: Props) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className={`inline-flex items-center justify-center h-9 w-9 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ${className}`}
      aria-label={label ?? "Go back"}
    >
      <ChevronLeft size={20} />
    </button>
  );
}
