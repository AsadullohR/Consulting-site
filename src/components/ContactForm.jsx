import { useTranslation } from "react-i18next";
import { PinIcon, PhoneIcon, MailIcon } from "./icons";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center uppercase tracking-[0.2em] text-blue-600 text-xs font-semibold mb-3">
          {t("contact.kicker")}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-950">
          {t("contact.title")}
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
              placeholder={t("contact.namePlaceholder")}
              required
            />
            <input
              className="w-full p-3 border rounded"
              type="email"
              name="email"
              placeholder={t("contact.emailPlaceholder")}
              required
            />
            <textarea
              className="w-full p-3 border rounded"
              name="message"
              rows="5"
              placeholder={t("contact.messagePlaceholder")}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
              {t("contact.submit")}
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-white shadow-md p-8 rounded-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              {t("contact.getInTouch")}
            </h3>
            <p className="text-gray-600 mb-4">{t("contact.getInTouchDesc")}</p>

            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <PinIcon className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <span>
                  <span className="font-semibold">{t("contact.address")} </span>
                  {t("contact.addressValue")}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-blue-600 shrink-0" />
                <span>
                  <span className="font-semibold">{t("contact.phone")} </span>
                  +998 (91) 609 33 77
                </span>
              </p>
              <p className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 text-blue-600 shrink-0" />
                <span>
                  <span className="font-semibold">{t("contact.email")} </span>
                  info@oneconsulting.uz
                </span>
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
