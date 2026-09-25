import { motion as Motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { staggerContainer, staggerItem } from "../lib/motionVariants";

const stepKeys = [
  { n: "01", key: "consultation" },
  { n: "02", key: "selection" },
  { n: "03", key: "documents" },
  { n: "04", key: "visa" },
  { n: "05", key: "departure" },
];

export default function HowItWorks() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-blue-950 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.2em] text-sky-300 text-xs font-semibold mb-3">
          {t("howItWorks.kicker")}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {t("howItWorks.title")}
        </h2>
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={reduceMotion ? undefined : staggerContainer}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          {stepKeys.map((s) => (
            <Motion.div key={s.n} variants={reduceMotion ? undefined : staggerItem}>
              <div className="text-4xl font-display font-bold text-white/15 mb-3">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t(`howItWorks.steps.${s.key}.title`)}
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {t(`howItWorks.steps.${s.key}.desc`)}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
