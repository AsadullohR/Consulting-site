import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import uz from "./locales/uz.json";

const SUPPORTED = ["uz", "ru", "en"];
const STORAGE_KEY = "oneconsulting_lang";
const stored = (() => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
})();

// Audience is primarily Uzbek-speaking, so Uzbek is the default language
// (not English) whenever there's no saved preference yet.
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: SUPPORTED.includes(stored) ? stored : "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // localStorage unavailable (private mode, etc.) — language just won't persist
  }
});

export default i18n;
