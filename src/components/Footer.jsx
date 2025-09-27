export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Consulting Firm. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="https://www.instagram.com/oneconsulting.uz"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://t.me/one_consultinguz"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </div>
    </footer>
  );
}
