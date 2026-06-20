import { useEffect } from "react";
import MoodTracker from "./MoodTracker";
import { ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";

export default function MoodTrackerPage() {
  useEffect(() => {
    ensureOcdI18n(["mood_tracker"]);
    ensureFetchPatch();
  }, []);
  return <MoodTracker />;
}