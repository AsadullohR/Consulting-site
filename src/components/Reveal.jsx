import { motion as Motion, useReducedMotion } from "motion/react";

// Fades + slides a section in once as it scrolls into view. Respects
// prefers-reduced-motion (skips the motion, keeps the content visible)
// and only ever animates once per element (viewport once: true) so
// scrolling back up doesn't replay it.
export default function Reveal({ children, delay = 0, y = 24, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}
