import { I18nextProvider } from "react-i18next";
import TriggerMap from "./TriggerMap";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";
ensureOcdI18n(["trigger_map"]);
ensureFetchPatch();
export default function TriggerMapPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <TriggerMap />
    </I18nextProvider>
  );
}