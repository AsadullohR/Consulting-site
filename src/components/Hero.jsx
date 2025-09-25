export default function Hero() {
  return (
    <section className="relative bg-blue-600 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Учись за рубежом с уверенностью
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Стипендии до 100% • Университеты по всему миру • Полная поддержка визы
          и поступления
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            className="w-full md:w-auto flex-1 px-4 py-3 rounded-lg border border-transparent focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Телефон"
            className="w-full md:w-auto flex-1 px-4 py-3 rounded-lg border border-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100"
          >
            Получить консультацию
          </button>
        </form>
      </div>
    </section>
  );
}
