import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OCDMoments from "./OCDMoments";
import { i18n, ensureOcdI18n } from "../../_shared/i18n";
import { ensureFetchPatch } from "../../_shared/storage";
ensureOcdI18n(["ocd_moments"]);
ensureFetchPatch();
const queryClient = new QueryClient();
export default function OCDMomentsPage() {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <OCDMoments />
      </QueryClientProvider>
    </I18nextProvider>
  );
}