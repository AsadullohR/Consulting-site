export default function ShortsSection() {
  const shorts = [
    "https://www.youtube.com/embed/aqz-KE-bpKQ",
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">
          Our YouTube Shorts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shorts.map((link, i) => (
            <div key={i} className="w-full h-80">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src={link}
                title={`YouTube Short ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
