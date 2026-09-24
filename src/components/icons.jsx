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

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5c0 8.837 7.163 16 16 16h1a1 1 0 0 0 1-1v-2.764a1 1 0 0 0-.553-.894l-3.523-1.762a1 1 0 0 0-1.213.263l-1.088 1.36a1 1 0 0 1-1.276.264 12.06 12.06 0 0 1-4.814-4.814 1 1 0 0 1 .264-1.276l1.36-1.088a1 1 0 0 0 .263-1.213L8.658 4.553A1 1 0 0 0 7.764 4H5a1 1 0 0 0-1 1Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
