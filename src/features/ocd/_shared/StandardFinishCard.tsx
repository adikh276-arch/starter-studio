import { useTranslation } from "react-i18next";
import { ShareActivity } from "./ShareActivity";

interface Props {
  title?: string;
  description?: string;
  onStartOver?: () => void;
  startOverText?: string;
  emoji?: string;
  onDone?: () => void;
  doneText?: string;
  className?: string;
  showShare?: boolean;
  showHome?: boolean;
}

export function StandardFinishCard({
  title, description, onStartOver, startOverText, emoji = "✨",
  onDone, doneText, className = "", showShare = false, showHome = true,
}: Props) {
  const { t } = useTranslation("common");
  return (
    <div className={`bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 px-8 py-12 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 mx-auto text-center gap-6 border border-slate-100 max-w-[400px] ${className}`}>
      <div className="space-y-4">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] opacity-80 mb-2">
          {t("activity_completed", "Activity Completed")}
        </p>
        <div className="text-5xl">{emoji}</div>
        <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight">
          {title || t("well_done", "Well done")}
        </h3>
        <p className="text-slate-600 leading-relaxed font-medium px-2">
          {description || t("finished_journey_share", "You finished this journey.")}
        </p>
      </div>

      {showShare && (
        <div className="w-full mt-2">
          <ShareActivity />
        </div>
      )}

      <div className="flex flex-col gap-3 w-full mt-2">
        {onStartOver && (
          <button
            onClick={onStartOver}
            className="w-full px-10 py-4 rounded-2xl bg-slate-900 text-white font-bold text-base shadow-sm hover:bg-slate-800 transition-all active:scale-[0.96]"
          >
            {startOverText || t("start_over", "Start over")}
          </button>
        )}
        {showHome && (
          <button
            onClick={() => { onDone ? onDone() : window.history.back(); }}
            className="w-full px-10 py-4 rounded-2xl bg-slate-100 text-slate-900 border border-slate-200 font-bold text-base shadow-sm hover:bg-slate-200 transition-all active:scale-[0.96]"
          >
            {doneText || t("back_to_home", "Back to home")}
          </button>
        )}
      </div>
    </div>
  );
}
