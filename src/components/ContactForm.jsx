export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Contact Us
        </h2>

        {/* Grid Layout: 2 columns on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-4 bg-white shadow-md p-8 rounded-lg"
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

          {/* Contact Information */}
          <div className="bg-white shadow-md p-8 rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              Have questions about studying or working abroad? Reach out to us.
            </p>

            <div className="space-y-3">
              <p>
                <span className="font-semibold">📍 Address: </span>
                Amir Temur Avenue 1B, Andijan, Uzbekistan
              </p>
              <p>
                <span className="font-semibold">📞 Phone: </span>
                +998 (91) 609 33 77
              </p>
              <p>
                <span className="font-semibold">✉️ Email: </span>
                info@oneconsulting.uz
              </p>
            </div>

            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d755.4831514643977!2d72.35317126963132!3d40.763506998211646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ1JzQ4LjYiTiA3MsKwMjEnMTMuNyJF!5e0!3m2!1sen!2s!4v1758980218874!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
