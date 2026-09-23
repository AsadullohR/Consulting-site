// Small hand-drawn line-icon set (stroke-based, currentColor) used in place
// of emoji for service markers — emoji-as-icon is a generic AI-template
// tell and doesn't scale/color/align consistently with the rest of the UI.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function ScholarshipIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 2 8l10 5 10-5-10-5Z" />
      <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
      <path d="M22 8v6" />
    </svg>
  );
}

export function AdmissionIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21h18" />
      <path d="M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-8h6v8" />
    </svg>
  );
}

export function VisaIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 2.5 15.5 0 18" />
      <path d="M12 3c-2.5 2.5-2.5 15.5 0 18" />
    </svg>
  );
}

export function CoursesIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 6.5C10 5 7 4.5 4 5v13c3-.5 6 0 8 1.5V6.5Z" />
      <path d="M12 6.5C14 5 17 4.5 20 5v13c-3-.5-6 0-8 1.5V6.5Z" />
    </svg>
  );
}
