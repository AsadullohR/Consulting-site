import { useState } from "react";

const team = [
  { name: "Ali Karimov", role: "CEO", img: "/team/ali.jpg" },
  {
    name: "Dilnoza Rashidova",
    role: "Admissions Manager",
    img: "/team/dilnoza.jpg",
  },
  { name: "Javlon Bek", role: "Visa Specialist", img: "/team/javlon.jpg" },
];

export default function AboutUs() {
  const [tab, setTab] = useState("about");

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">О нас</h2>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setTab("about")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              tab === "about"
                ? "bg-orange-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setTab("team")}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              tab === "team"
                ? "bg-orange-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Our Team
          </button>
        </div>

        {/* Content */}
        {tab === "about" && (
          <div className="text-lg text-gray-700 max-w-3xl mx-auto transition">
            <p className="mb-4">
              Мы — образовательная консалтинговая компания, помогающая студентам
              из Узбекистана поступать в университеты по всему миру.
            </p>
            <p>
              Наша миссия — сделать обучение за границей доступным: от поиска
              стипендий до визовой поддержки и адаптации студентов.
            </p>
          </div>
        )}

        {tab === "team" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
