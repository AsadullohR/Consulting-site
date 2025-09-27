export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-cyan-500 to-blue-600 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Study Abroad with Confidence{" "}
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Scholarships up to 100% • Universities worldwide • Full visa and
          admission support
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full md:w-auto flex-1 px-4 py-3  bg-white text-black rounded-lg border border-transparent focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full md:w-auto flex-1 px-4 py-3  bg-white text-black rounded-lg border border-transparent focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100"
          >
            Get a consultation
          </button>
        </form>
      </div>
    </section>
  );
}
