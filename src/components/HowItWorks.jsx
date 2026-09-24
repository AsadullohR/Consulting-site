import { motion as Motion, useReducedMotion } from "motion/react";
import { staggerContainer, staggerItem } from "../lib/motionVariants";

const steps = [
  {
    n: "01",
    title: "Free Consultation",
    desc: "Tell us your goals, budget, and preferred destination. We listen before we advise.",
  },
  {
    n: "02",
    title: "University Selection",
    desc: "We match you with accredited programs that fit your academic profile and ambitions.",
  },
  {
    n: "03",
    title: "Document Preparation",
    desc: "We guide you through every form, translation, and notarization required.",
  },
  {
    n: "04",
    title: "Application & Visa",
    desc: "We submit your application and handle the visa process from start to approval.",
  },
  {
    n: "05",
    title: "Pre-Departure",
    desc: "Flight booking, airport pickup, and SIM card so you arrive ready (VIP tariff).",
  },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-blue-950 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-3">
          Process
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          From dream to departure
        </h2>
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((s) => (
            <Motion.div key={s.n} variants={reduceMotion ? undefined : staggerItem}>
              <div className="text-4xl font-display font-bold text-white/15 mb-3">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-blue-100 leading-relaxed">{s.desc}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
