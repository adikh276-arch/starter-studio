import { I18nextProvider } from "react-i18next";
import DailyLife from "./DailyLife";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";
ensureOcdI18n(["daily_life"]);
ensureFetchPatch();
export default function DailyLifePage() {
  return (
    <I18nextProvider i18n={i18n}>
      <DailyLife />
    </I18nextProvider>
  );
}