import {
  ScholarshipIcon,
  AdmissionIcon,
  VisaIcon,
  CoursesIcon,
} from "./icons";

const features = [
  { title: "Scholarships & Funding", Icon: ScholarshipIcon },
  { title: "Admission Support", Icon: AdmissionIcon },
  { title: "Professional Support with Visas", Icon: VisaIcon },
  { title: "Courses and language training", Icon: CoursesIcon },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-blue-200 transition"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <f.Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
