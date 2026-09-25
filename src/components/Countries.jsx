import { motion as Motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import europe from "./../assets/countries/photos/europe.jpg";
import southKorea from "./../assets/countries/photos/south-korea.jpg";
import turkey from "./../assets/countries/photos/turkey.jpg";
import china from "./../assets/countries/photos/china.jpg";
import { staggerContainer, staggerItem } from "../lib/motionVariants";

const cardKeys = [
  { key: "europe", img: europe },
  { key: "southKorea", img: southKorea },
  { key: "turkey", img: turkey },
  { key: "china", img: china },
];

export default function Countries() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section id="countries" className="py-20 bg-white px-6 md:px-20">
      <p className="text-center uppercase tracking-[0.2em] text-blue-600 text-xs font-semibold mb-3">
        {t("countries.kicker")}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-blue-950">
        {t("countries.title")}
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 px-4">
        {t("countries.subtitle")}
      </p>
      <Motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {cardKeys.map((c) => (
          <Motion.div
            key={c.key}
            variants={reduceMotion ? undefined : staggerItem}
            whileHover={reduceMotion ? {} : { y: -6 }}
            className="group relative overflow-hidden rounded-xl shadow-lg h-80"
          >
            <img
              src={c.img}
              alt={t(`countries.cards.${c.key}.title`)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <h3 className="text-xl font-display font-bold">
                {t(`countries.cards.${c.key}.title`)}
              </h3>
              <p className="text-xs uppercase tracking-wide text-sky-300 mb-2">
                {t(`countries.cards.${c.key}.city`)}
              </p>
              <p className="text-sm text-blue-100">
                {t(`countries.cards.${c.key}.desc`)}
              </p>
            </div>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
