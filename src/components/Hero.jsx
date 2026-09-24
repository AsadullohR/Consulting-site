import { motion as Motion, useReducedMotion } from "motion/react";
import { PinIcon } from "./icons";

const destinations = ["Europe", "South Korea", "Turkey", "China"];

const stats = [
  { value: "1,100+", label: "Students placed abroad" },
  { value: "200+", label: "Partner universities" },
  { value: "4", label: "Study destinations" },
  { value: "97%", label: "Visa success rate" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Above-the-fold content animates in on load (not on scroll), staggered
  // slightly so heading -> subtext -> form arrive in reading order.
  const fadeUp = (delay) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: "easeOut" },
        };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white py-24 px-6 md:px-20">
      {/* Subtle dot-grid texture, standing in for the "world map" motif
          without needing real geographic artwork. */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <Motion.p
          {...fadeUp(0)}
          className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-4"
        >
          Study Abroad Consultancy · Andijon
        </Motion.p>
        <Motion.h1
          {...fadeUp(0.08)}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Study Abroad
          <br />
          <span className="text-sky-300">with Confidence.</span>
        </Motion.h1>
        <Motion.p
          {...fadeUp(0.16)}
          className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl mx-auto"
        >
          We connect students across Uzbekistan with top universities in
          Europe, South Korea, Turkey, and China — from first consultation to
          arrival.
        </Motion.p>
        <Motion.div
          {...fadeUp(0.22)}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {destinations.map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-sm font-medium text-blue-100"
            >
              <PinIcon className="h-3.5 w-3.5 text-sky-300" aria-hidden="true" />
              {label}
            </span>
          ))}
        </Motion.div>

        <Motion.form
          {...fadeUp(0.3)}
          name="hero-lead"
          method="POST"
          data-netlify="true"
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16"
        >
          <input type="hidden" name="form-name" value="hero-lead" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full md:w-auto flex-1 px-4 py-3 bg-white/95 text-blue-950 placeholder-blue-900/50 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full md:w-auto flex-1 px-4 py-3 bg-white/95 text-blue-950 placeholder-blue-900/50 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
          <Motion.button
            whileHover={reduceMotion ? {} : { scale: 1.03 }}
            whileTap={reduceMotion ? {} : { scale: 0.97 }}
            type="submit"
            className="px-6 py-3 bg-sky-400 text-blue-950 font-semibold rounded-lg hover:bg-sky-300 transition whitespace-nowrap"
          >
            Get a consultation
          </Motion.button>
        </Motion.form>

        <Motion.div
          {...fadeUp(0.38)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-5"
            >
              <div className="text-2xl md:text-3xl font-bold text-sky-300 font-display">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-blue-100 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
