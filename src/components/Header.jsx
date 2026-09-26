import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import badge from "../assets/one-badge-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuIcon, CloseIcon } from "./icons";

const NAV_LINKS = [
  { href: "#partners", key: "partners" },
  { href: "#about", key: "about" },
  { href: "#services", key: "services" },
  { href: "#countries", key: "countries" },
  { href: "#results", key: "results" },
  { href: "#contact", key: "contact" },
];

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between gap-2 p-3 px-4 sm:px-10">
        <a href="/" className="flex items-center gap-2 shrink-0 min-w-0">
          <img
            src={badge}
            alt="One Academy & Consulting"
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain shrink-0"
          />
          <span className="font-display font-bold text-blue-950 leading-tight text-sm sm:text-base truncate">
            Academy & Consulting
          </span>
        </a>

        <nav className="space-x-5 font-semibold hidden lg:block whitespace-nowrap">
          {NAV_LINKS.map(({ href, key }) => (
            <a key={key} href={href} className="hover:text-blue-600">
              {t(`header.${key}`)}
            </a>
          ))}
          <Link to="/contract" className="hover:text-blue-600">
            {t("header.signContract")}
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap"
          >
            {t("header.freeConsultation")}
          </a>
        </div>

        {/* Sandwich menu: below lg the full nav collapses into this panel,
            since there's no room to lay out six links plus both CTAs and
            the language switcher on a phone-width row without overflowing. */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={t("header.menu")}
          className="lg:hidden shrink-0 p-2 -mr-2 text-blue-950"
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Both primary actions stay visible on mobile without opening the
          menu — signing the contract is as important a call-to-action here
          as booking a consultation. */}
      <div className="lg:hidden flex items-center gap-2 px-4 pb-3 sm:px-10">
        <Link
          to="/contract"
          className="flex-1 text-center border border-blue-600 text-blue-600 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 whitespace-nowrap"
        >
          {t("header.signContract")}
        </Link>
        <a
          href="#contact"
          className="flex-1 text-center bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 whitespace-nowrap"
        >
          {t("header.freeConsultation")}
        </a>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white px-4 sm:px-10 py-4 space-y-1">
          {NAV_LINKS.map(({ href, key }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 font-semibold text-gray-700 hover:text-blue-600"
            >
              {t(`header.${key}`)}
            </a>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
