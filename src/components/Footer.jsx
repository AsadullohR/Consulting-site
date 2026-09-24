import logo from "/public/One-Consulting-Nobg.png";

const destinations = ["Europe", "South Korea", "Turkey", "China"];
const quickLinks = [
  { href: "#countries", label: "Destinations" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="inline-block bg-white rounded-lg px-3 py-2 mb-4">
            <img
              src={logo}
              alt="One Consulting"
              className="h-10 object-contain"
            />
          </div>
          <p className="text-sm text-blue-200 max-w-xs">
            Andijon's trusted study abroad partner since 2018. We turn
            ambition into opportunity, one student at a time.
          </p>
        </div>

        <div>
          <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4">
            Destinations
          </p>
          <ul className="space-y-2 text-sm">
            {destinations.map((d) => (
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
            Quick Links
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
            &copy; {new Date().getFullYear()} One Academy & Consulting. All
            rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/oneconsulting.uz"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://t.me/one_consultinguz"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
