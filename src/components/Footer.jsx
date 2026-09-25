import { useTranslation } from "react-i18next";
import badge from "../assets/one-badge-logo.png";

export default function Footer() {
  const { t } = useTranslation();
  const destinations = t("hero.destinations", { returnObjects: true });
  const quickLinks = [
    { href: "#countries", label: t("footer.quickLinks.destinations") },
    { href: "#services", label: t("footer.quickLinks.services") },
    { href: "#results", label: t("footer.quickLinks.results") },
    { href: "#contact", label: t("footer.quickLinks.contact") },
  ];

  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <img
            src={badge}
            alt="One Consulting"
            className="h-14 w-14 object-contain mb-4"
          />
          <p className="text-sm text-blue-200 max-w-xs">{t("footer.blurb")}</p>
        </div>

        <div>
          <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4">
            {t("footer.destinationsKicker")}
          </p>
          <ul className="space-y-2 text-sm">
            {Object.values(destinations).map((d) => (
              <li key={d}>
                <a href="#countries" className="hover:text-white transition">
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4">
            {t("footer.quickLinksKicker")}
          </p>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} One Academy & Consulting.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/oneconsulting.uz"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.instagram")}
            </a>
            <a
              href="https://t.me/one_consultinguz"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("footer.telegram")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
