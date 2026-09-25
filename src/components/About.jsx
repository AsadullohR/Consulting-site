import { useState } from "react";
import { useTranslation } from "react-i18next";
import imgSarvar from "/src/assets/team/Sarvar-Kasimov.png";
import imgKhasanboy from "/src/assets/team/Khasanboy1.png";
import imgAsadulloh from "/src/assets/team/Asadulloh-Rakhimov.png";

const team = [
  { name: "Sarvar Kasimov", roleKey: "ceo", img: imgSarvar },
  { name: "Khasanboy Makhmudov", roleKey: "manager", img: imgKhasanboy },
  { name: "Asadulloh Rakhimov", roleKey: "visaSpecialist", img: imgAsadulloh },
];

export default function About() {
  const { t } = useTranslation();
  const [tab, setTab] = useState("about");

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-[0.2em] text-blue-600 text-xs font-semibold mb-3">
          {t("about.kicker")}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950">
          {t("about.title")}
        </h2>
        <p className="text-lg mb-6 text-gray-700">{t("about.subtitle")}</p>

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
            {t("about.tabAbout")}
          </button>
          <button
            onClick={() => setTab("team")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              tab === "team"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white border text-gray-700 hover:bg-gray-100"
            }`}
          >
            {t("about.tabTeam")}
          </button>
        </div>

        {/* Content */}
        {tab === "about" && (
          <div className="text-lg text-gray-700 max-w-3xl mx-auto transition">
            <p className="mb-4">{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
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
                  <p className="text-blue-600 font-medium">
                    {t(`about.roles.${member.roleKey}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
