const serviceCards = [
  {
    title: "Study in Turkey",
    desc: "Top universities, language courses, visa help",
    img: "/src/assets/Turkey.png", // use real images later
  },
  {
    title: "Study in South Korea",
    desc: "Scholarships & short-term & long-term programs",
    img: "/src/assets/korea.jpg",
  },
  {
    title: "Study in China",
    desc: "Scholarships & short-term & long-term programs",
    img: "/src/assets/china.jpg",
  },
  // add more
];

export default function ServicesCards() {
  return (
    <section id="services" className="py-16 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Наши направления</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceCards.map((c, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
          >
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-semibold mb-2">{c.title}</h3>
              <p className="text-gray-700">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
