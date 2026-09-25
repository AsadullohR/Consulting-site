import { motion as Motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  ScholarshipIcon,
  AdmissionIcon,
  VisaIcon,
  CoursesIcon,
} from "./icons";
import { staggerContainer, staggerItem } from "../lib/motionVariants";

const features = [
  { key: "scholarships", Icon: ScholarshipIcon },
  { key: "admission", Icon: AdmissionIcon },
  { key: "visa", Icon: VisaIcon },
  { key: "courses", Icon: CoursesIcon },
];

export default function Services() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-20 bg-gray-50 px-6 md:px-20">
      <p className="text-center uppercase tracking-[0.2em] text-blue-600 text-xs font-semibold mb-3">
        {t("services.kicker")}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-blue-950">
        {t("services.title")}
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600 px-4">
        {t("services.subtitle")}
      </p>
      <Motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={reduceMotion ? undefined : staggerContainer}
        initial={reduceMotion ? undefined : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((f) => (
          <Motion.div
            key={f.key}
            variants={reduceMotion ? undefined : staggerItem}
            whileHover={reduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-blue-200"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <f.Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">
              {t(`services.items.${f.key}`)}
            </h3>
          </Motion.div>
        ))}
      </Motion.div>
    </section>
  );
}
