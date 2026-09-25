import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import badge from "../assets/one-badge-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="flex justify-between items-center gap-3 p-3 px-2 sm:px-10 shadow-md bg-white sticky top-0 z-50">
      <a href="/" className="flex items-center gap-2 shrink-0">
        <img src={badge} alt="One Academy & Consulting" className="h-10 w-10 object-contain" />
        <span className="font-display font-bold text-blue-950 leading-tight text-sm sm:text-base">
          Academy & Consulting
        </span>
      </a>
      <nav className="space-x-5 font-semibold hidden lg:block whitespace-nowrap">
        <a href="#partners" className="hover:text-blue-600">
          {t("header.partners")}
        </a>
        <a href="#about" className="hover:text-blue-600">
          {t("header.about")}
        </a>
        <a href="#services" className="hover:text-blue-600">
          {t("header.services")}
        </a>
        <a href="#countries" className="hover:text-blue-600">
          {t("header.countries")}
        </a>
        <a href="#results" className="hover:text-blue-600">
          {t("header.results")}
        </a>
        <a href="#contact" className="hover:text-blue-600">
          {t("header.contact")}
        </a>
        <Link to="/contract" className="hover:text-blue-600">
          {t("header.signContract")}
        </Link>
      </nav>
      <div className="flex items-center gap-3 shrink-0">
        <LanguageSwitcher className="hidden sm:inline-flex" />
        <a
          href="#contact"
          className="bg-blue-600 text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap"
        >
          {t("header.freeConsultation")}
        </a>
      </div>
    </header>
  );
}
