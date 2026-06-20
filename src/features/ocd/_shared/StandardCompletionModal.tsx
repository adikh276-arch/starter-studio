import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import { StandardFinishCard } from "./StandardFinishCard";

interface Props {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  onStartOver?: () => void;
  startOverText?: string;
  onDone?: () => void;
  doneText?: string;
  showHome?: boolean;
  emoji?: string;
}

export function StandardCompletionModal({
  isOpen, onOpenChange, title, description, onStartOver, startOverText,
  onDone, doneText, showHome = true, emoji,
}: Props) {
  const { t } = useTranslation("common");
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[400px] p-0 border-none bg-white rounded-[2rem] shadow-2xl overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{title || t("activity_completed", "Activity Completed")}</DialogTitle>
          <DialogDescription>{description || t("finished_journey_share", "You finished this journey.")}</DialogDescription>
        </DialogHeader>
        <StandardFinishCard
          title={title}
          description={description}
          emoji={emoji}
          onStartOver={onStartOver ? () => { onOpenChange(false); onStartOver(); } : undefined}
          startOverText={startOverText}
          onDone={() => { onOpenChange(false); onDone ? onDone() : window.history.back(); }}
          doneText={doneText}
          className="shadow-none border-none animate-none"
          showShare
          showHome={showHome}
        />
      </DialogContent>
    </Dialog>
  );
}