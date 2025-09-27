export default function Header() {
  return (
    <header className="flex justify-between items-center p-3 px-2 sm:px-18 shadow-md bg-white sticky top-0 z-50">
      <img
        src="/public/One-Consulting-Nobg.png"
        alt="Logo"
        className="h-15 w-45 sm:w-60 object-contain"
      />
      <nav className="space-x-6 font-semibold hidden md:block">
        <a href="#partners" className="hover:text-blue-600">
          Partners
        </a>
        <a href="#about" className="hover:text-blue-600">
          About Us
        </a>
        <a href="#services" className="hover:text-blue-600">
          Services
        </a>
        <a href="#countries" className="hover:text-blue-600">
          Countries
        </a>
        <a href="#results" className="hover:text-blue-600">
          Results
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </nav>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-2 sm:px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Free Consultation
      </a>
    </header>
  );
}
