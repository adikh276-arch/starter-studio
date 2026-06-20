import MoodTracker from "./MoodTracker";
import { ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";

// Eagerly arm i18n namespace + fetch shim at module load so the first render
// already sees translations and the legacy `fetch('/ocd/api/logs')` POST works.
ensureOcdI18n(["mood_tracker"]);
ensureFetchPatch();

export default function MoodTrackerPage() {
  return <MoodTracker />;
}