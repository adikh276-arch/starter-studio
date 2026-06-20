import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

/**
 * Single i18next instance shared across all ported OCD activities.
 * Locale files live in /public/locales/<lng>/<namespace>.json.
 * Each activity registers its own namespace (e.g. "mood_tracker") and the
 * shared "common" namespace is preloaded for the history drawer / share UI.
 */
// Eagerly initialise on module import so that `useTranslation` calls inside
// activity components find a registered i18n instance on first render.
if (!i18n.isInitialized) {
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      defaultNS: "common",
      ns: ["common"],
      load: "languageOnly",
      // Strip locale variants/POSIX suffixes that break Intl.* in some envs.
      supportedLngs: false,
      nonExplicitSupportedLngs: false,
      interpolation: { escapeValue: false },
      backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
      detection: {
        order: ["querystring", "localStorage", "navigator"],
        caches: ["localStorage"],
        convertDetectedLanguage: (lng: string) => (lng.split(/[-_@]/)[0] || "en").toLowerCase(),
      },
      react: { useSuspense: false },
      returnEmptyString: false,
    });
}

export function ensureOcdI18n(extraNamespaces: string[] = []) {
  if (extraNamespaces.length) void i18n.loadNamespaces(extraNamespaces);
}

export { i18n };
