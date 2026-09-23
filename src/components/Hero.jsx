import { motion as Motion, useReducedMotion } from "motion/react";

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
    <section className="relative  text-white py-20 px-6 md:px-20">
      {/* bg-linear-to-r from-cyan-500 to-blue-600 */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="max-w-4xl mx-auto text-center">
        <Motion.h1
          {...fadeUp(0)}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Study Abroad with Confidence{" "}
        </Motion.h1>
        <Motion.p {...fadeUp(0.12)} className="text-lg md:text-xl mb-8">
          Scholarships up to 100% • Universities worldwide • Full visa and
          admission support
        </Motion.p>
        <Motion.form
          {...fadeUp(0.24)}
          name="hero-lead"
          method="POST"
          data-netlify="true"
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input type="hidden" name="form-name" value="hero-lead" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full md:w-auto flex-1 px-4 py-3  bg-white text-black rounded-lg border border-transparent focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full md:w-auto flex-1 px-4 py-3  bg-white text-black rounded-lg border border-transparent focus:outline-none"
          />
          <Motion.button
            whileHover={reduceMotion ? {} : { scale: 1.03 }}
            whileTap={reduceMotion ? {} : { scale: 0.97 }}
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Get a consultation
          </Motion.button>
        </Motion.form>
      </div>
    </section>
  );
}
