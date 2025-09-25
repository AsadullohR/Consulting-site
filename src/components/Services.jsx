const features = [
  { title: "Стипендии & финансирование", icon: "🎓" },
  { title: "Поддержка поступлений", icon: "🏛️" },
  { title: "Визовая помощь", icon: "🛂" },
  { title: "Курсы и языковая подготовка", icon: "📘" },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold">{f.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
