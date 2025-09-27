export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Contact us
      </h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="max-w-2xl mx-auto space-y-4 bg-white shadow-md p-8 rounded-lg"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          className="w-full p-3 border rounded"
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full p-3 border rounded"
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="w-full p-3 border rounded"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
