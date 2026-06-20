import { I18nextProvider } from "react-i18next";
import RitualCost from "./RitualCost";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";
ensureOcdI18n(["ritual_cost"]);
ensureFetchPatch();
export default function RitualCostPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <RitualCost />
    </I18nextProvider>
  );
}