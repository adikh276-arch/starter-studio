/**
 * Minimal `useTranslation` shim.
 *
 * The legacy coaching mini-apps used four different i18n systems
 * (react-i18next + 3 hand-rolled context providers) with 35 locale files
 * each. In the frontend-only phase we ship English only – `t(key)` falls
 * back to the key humanised, unless a dictionary entry exists.
 *
 * Components written against the legacy API keep working unchanged:
 *
 *   const { t } = useTranslation();
 *   t("submit_button");          // -> "Submit Button"
 *   t("submit_button", "Save");  // -> "Save" (the explicit fallback wins)
 *
 * When proper i18n is reintroduced, replace the body of this file with a
 * real react-i18next setup – no consumer changes needed.
 */

const DEFAULT_DICT: Record<string, string> = {
  data_private: "Your data is stored privately on this device.",
  save: "Save",
  cancel: "Cancel",
  back: "Back",
  delete: "Delete",
  history: "History",
  insights: "Insights",
};

function humanise(key: string): string {
  return key
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function useTranslation() {
  return {
    t: (key: string, fallback?: string): string =>
      fallback ?? DEFAULT_DICT[key] ?? humanise(key),
    i18n: { language: "en", changeLanguage: async (_lang: string) => {} },
  };
}

/** Compatibility re-export – some legacy modules import the hook directly. */
export const useT = useTranslation;

/**
 * Passthrough for the legacy `useTranslatedContent` hook. The original returned
 * translator functions that re-shaped content for the active locale; in our
 * English-only frontend phase we hand back what's passed in.
 */
export function useTranslatedContent() {
  const identity = <T,>(value: T): T => value;
  return {
    getTranslatedArea: identity,
    getTranslatedExercise: <T,>(_id: string, value: T): T => value,
    getTranslatedLearn: <T,>(_areaId: string, _index: number, value: T): T => value,
    getTranslatedResource: <T,>(_areaId: string, value: T): T => value,
    getTranslatedQuiz: identity,
    getTranslatedCheckin: identity,
  };
}