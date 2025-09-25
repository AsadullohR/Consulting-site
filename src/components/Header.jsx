export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">Consulting Firm</h1>
      <nav className="space-x-6 hidden md:block">
        <a href="#services" className="hover:text-blue-600">
          Services
        </a>
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
        <a href="#testimonials" className="hover:text-blue-600">
          Success
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </nav>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Free Consultation
      </a>
    </header>
  );
}
