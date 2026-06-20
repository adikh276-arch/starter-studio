import { useEffect, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { ensureOcdI18n } from "./i18n";
import { ensureFetchPatch } from "./storage";
import { ActivityHistoryDrawer } from "./ActivityHistoryDrawer";

interface Props {
  /** i18n namespace for this activity (matches the locale json filename). */
  namespace: string;
  /** Slug used for log storage and the history drawer. */
  slug: string;
  /** Optional title shown in the history drawer trigger. */
  historyTitle?: string;
  /** Theme className from the legacy css (e.g. `theme-mood_tracker`). */
  themeClass?: string;
  children: ReactNode;
}

/**
 * Wraps every ported OCD activity: initialises shared i18n + fetch shim,
 * renders an internal back-button (no `window.location.href` to mantracare),
 * and exposes the same activity history drawer the legacy code expects.
 */
export function ActivityShell({ namespace, slug, historyTitle, themeClass, children }: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    ensureOcdI18n([namespace]);
    ensureFetchPatch();
  }, [namespace]);
  return (
    <div className={`isolate min-h-[100dvh] bg-background text-foreground ${themeClass ?? ""}`}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/ocd-selfcare")}
          className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-500"
          aria-label="Back to OCD self-care hub"
        >
          <ArrowLeft size={20} />
        </button>
        <ActivityHistoryDrawer slug={slug} title={historyTitle} />
      </div>
      {children}
    </div>
  );
}
