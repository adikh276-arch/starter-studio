import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

interface Props {
  open: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
}

/**
 * Small confirmation dialog used by the legacy exercise components
 * after a successful save. Self-contained so individual exercises
 * stay drop-in portable.
 */
export function SuccessDialog({ open, title = "Saved", description, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-card border border-border rounded-2xl p-6 max-w-xs text-center shadow-xl"
            initial={{ scale: 0.9, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/15 flex items-center justify-center">
              <Check size={22} className="text-primary" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SuccessDialog;