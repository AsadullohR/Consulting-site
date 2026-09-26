import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ className = "" }) {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage || i18n.language;

  return (
    <div
      className={`inline-flex items-center rounded-full border border-gray-300 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language"
    >
      {["uz", "ru", "en"].map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={current === lng}
          className={`px-2.5 py-1 rounded-full transition ${
            current === lng
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
