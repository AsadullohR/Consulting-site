import { motion as Motion, useReducedMotion } from "motion/react";
import turkey from "/src/assets/countries/turkey.png";
import korea from "/src/assets/countries/south-korea.png";
import china from "/src/assets/countries/china.png";
import { staggerContainer, staggerItem } from "../lib/motionVariants";

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
  const reduceMotion = useReducedMotion();

  return (
    <section id="countries" className="py-16 bg-gray-50 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-2 text-blue-600">
        Our directions
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700 px-4">
        Our customers get to study in the best parts of the world, below are
        some of them.
      </p>
      <Motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {serviceCards.map((c, i) => (
          <Motion.div
            key={i}
            variants={reduceMotion ? undefined : staggerItem}
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
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
