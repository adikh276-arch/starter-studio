/**
 * Minimal in-app replacement for the legacy `@/components/pride/ShareModal`.
 * The original opened external social-share popups – we keep the UI affordance
 * (Share button + modal) but use the platform's Web Share API when available
 * and fall back to copying the URL. No third-party APIs.
 */
import { useEffect, useState } from "react";
import { Copy, Check, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function ShareModal({ isOpen, onClose, title = "Share" }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const url = typeof window !== "undefined" ? window.location.href : "";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        onClose();
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          <button onClick={onClose} className="rounded-md p-1 text-gray-500 hover:bg-gray-100">
            <X size={16} />
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Share this activity with someone who could use it.
        </p>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
          <span className="flex-1 truncate text-xs text-gray-700">{url}</span>
        </div>
        <button
          onClick={handleShare}
          className="btn-primary mt-4 flex w-full items-center justify-center gap-2"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied" : "Share / Copy link"}
        </button>
      </div>
    </div>
  );
}