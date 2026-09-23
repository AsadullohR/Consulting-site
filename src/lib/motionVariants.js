// Shared variants for scroll-triggered staggered grids (Services, Countries,
// VisaResults): the grid container fades each child in slightly after the
// last, rather than every card popping in at once.
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
