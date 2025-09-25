export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} Consulting Firm. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:underline">
          Instagram
        </a>
        <a href="#" className="hover:underline">
          Telegram
        </a>
      </div>
    </footer>
  );
}
