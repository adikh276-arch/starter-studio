import { I18nextProvider } from "react-i18next";
import VibeTracker from "./VibeTracker";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";

ensureOcdI18n(["vibe_tracker"]);
ensureFetchPatch();

export default function VibeTrackerPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <VibeTracker />
    </I18nextProvider>
  );
}