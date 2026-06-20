import { I18nextProvider } from "react-i18next";
import OCDMoments from "./OCDMoments";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";
ensureOcdI18n(["ocd_moments"]);
ensureFetchPatch();
export default function OCDMomentsPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <OCDMoments />
    </I18nextProvider>
  );
}