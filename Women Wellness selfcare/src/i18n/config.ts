"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const supportedLanguages = [
  "en", "es", "fr", "de", "pt", "ru",
  "zh-Hans", "zh-Hant", "ja", "ko",
  "ar", "hi", "bn", "id", "tr", "vi",
  "it", "pl", "th", "tl", "nl", "sv",
  "no", "da", "fi", "cs", "el", "ro",
  "hu", "uk", "he", "ms", "ta", "te", "ur"
];

// Custom detector for ?lang= parameter
const urlParamDetector = {
  name: 'urlParam',
  lookup(options: any) {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return params.get('lang');
  },
  cacheUserLanguage(lng: string, options: any) {
    // Optional: could save to localStorage
  }
};

const detector = new LanguageDetector();
detector.addDetector(urlParamDetector);

import { resources, namespaces } from "./resources";

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    ns: namespaces,
    defaultNS: "core",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["urlParam", "querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],
      lookupQuerystring: "lang",
      caches: ["localStorage", "cookie"],
    },
    react: {
      useSuspense: true,
    },
  });


// We will dynamically load resources using a custom backend or direct imports
// For now, let's setup a placeholder for the resources
// We'll use i18n.addResourceBundle to load them dynamically in components or globally

export default i18n;
