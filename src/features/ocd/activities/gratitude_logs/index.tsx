import { I18nextProvider } from "react-i18next";
import GratitudeCheckIn from "./GratitudeCheckIn";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";

ensureOcdI18n(["gratitude_logs"]);
ensureFetchPatch();

export default function GratitudeLogsPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <GratitudeCheckIn />
    </I18nextProvider>
  );
}