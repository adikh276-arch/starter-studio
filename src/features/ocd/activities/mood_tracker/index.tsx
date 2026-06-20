import { I18nextProvider } from "react-i18next";
import MoodTracker from "./MoodTracker";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";

// Eagerly arm i18n namespace + fetch shim at module load so the first render
// already sees translations and the legacy `fetch('/ocd/api/logs')` POST works.
ensureOcdI18n(["mood_tracker"]);
ensureFetchPatch();

export default function MoodTrackerPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <MoodTracker />
    </I18nextProvider>
  );
}