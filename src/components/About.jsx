import { useState } from "react";

const team = [
  {
    name: "Sarvar Kasimov",
    role: "CEO",
    img: "src/assets/team/Sarvar-Kasimov.png",
  },
  {
    name: "Khasanboy Makhmudov",
    role: "Manager",
    img: "/src/assets/team/Khasanboy1.png",
  },
  {
    name: "Asadulloh Rakhimov",
    role: "Visa Specialist",
    img: "src/assets/team/Asadulloh-Rakhimov.png",
  },
];

export default function About() {
  const [tab, setTab] = useState("about");

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">
          Meet the Minds Behind Your Journey
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Our team of passionate experts is here to guide, support, and inspire
          you every step of the way.
        </p>

        {/* Toggle buttons */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => setTab("about")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              tab === "about"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white border text-gray-700 hover:bg-gray-100"
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setTab("team")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              tab === "team"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white border text-gray-700 hover:bg-gray-100"
            }`}
          >
            Our Team
          </button>
        </div>

        {/* Content */}
        {tab === "about" && (
          <div className="text-lg text-gray-700 max-w-3xl mx-auto transition">
            <p className="mb-4">
              One Academy & Consulting was founded in 2018! And so far, it has
              helped more than 1,000 young people study in Korea!
            </p>
            <p>
              Our mission is to make studying abroad accessible: from finding
              scholarships to visa support and student adaptation.
            </p>
          </div>
        )}

        {tab === "team" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="h-140 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Bigger image on top */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-120 object-cover"
                />

                {/* Info section */}
                <div className="p-4 text-left">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
