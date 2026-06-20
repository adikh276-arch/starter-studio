import { useState } from "react";
import { Share2, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

/**
 * Minimal, fully-internal Share button. Avoids the legacy external app-store
 * links / cross-window postMessage hooks. Copies a friendly message to the
 * clipboard so users can share however they like.
 */
export function ShareActivity({ className = "" }: { className?: string }) {
  const { t } = useTranslation("common");
  const [copied, setCopied] = useState(false);

  const message = `${t("check_out_app", "Check out this self-care tool")} – ${window.location.href}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      toast.success(t("message_copied", "Message copied to clipboard"));
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(t("failed_to_copy", "Failed to copy message"));
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm font-medium hover:bg-slate-100 transition ${className}`}
    >
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      <span>{copied ? t("copied", "Copied!") : t("share_this_activity", "Share this activity")}</span>
      <Copy size={14} className="opacity-60" />
    </button>
  );
}
