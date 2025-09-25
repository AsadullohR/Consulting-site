const testimonials = [
  { name: "Ali", text: "Thanks to this firm, I got admission in Prague!" },
  {
    name: "Madina",
    text: "They helped me secure a job in Dubai within 3 months.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white shadow-md rounded-lg">
            <p className="italic">“{t.text}”</p>
            <p className="mt-2 font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
