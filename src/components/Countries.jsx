import turkey from "/src/assets/countries/turkey.png";
import korea from "/src/assets/countries/south-korea.png";
import china from "/src/assets/countries/china.png";
const serviceCards = [
  {
    title: "Study in Turkey",
    desc: "Top universities, language courses, visa help",
    img: turkey, // use real images later
  },
  {
    title: "Study in South Korea",
    desc: "Scholarships & short-term & long-term programs",
    img: korea,
  },
  {
    title: "Study in China",
    desc: "Scholarships & short-term & long-term programs",
    img: china,
  },
  // add more
];

export default function Countries() {
  return (
    <section id="countries" className="py-16 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">
        Our directions
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-32 text-gray-700 px-4">
        Our customers get to study in the best parts of the world, below are
        some of them.
      </p>
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
