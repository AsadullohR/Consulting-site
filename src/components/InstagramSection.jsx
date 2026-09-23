import { useEffect } from "react";

export default function InstagramSection() {
  useEffect(() => {
    // A <script> tag written in JSX is inserted via the DOM, not parsed by
    // the browser, so it never actually loads — this appends it for real so
    // LightWidget's grid/resize JS runs.
    if (document.querySelector('script[src*="lightwidget.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">
          Our Latest Updates
        </h2>
        <p className="text-lg mb-10 text-gray-600">
          Follow us on Instagram to see our latest student results, visas, and
          events.
        </p>

        {/* LightWidget iframe */}
        <div className="w-full h-[13rem] md:h-[42.5rem] overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://cdn.lightwidget.com/widgets/1b589885410d5cc29a4bc177a786ca45.html"
            scrolling="no"
            allowtransparency="true"
            className="lightwidget-widget w-full h-full border-0"
          ></iframe>
        </div>

        <div className="mt-8">
          <a
            href="https://instagram.com/oneconsulting.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Visit our Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
