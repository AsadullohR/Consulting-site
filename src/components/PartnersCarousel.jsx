import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import turkey from "../assets/Turkey.png";
import china from "../assets/china.jpg";
import korea from "../assets/korea.jpg";

const partners = [turkey, china, korea];

export default function PartnersCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Наши партнёры</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {partners.map((logo, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-16 object-contain grayscale hover:grayscale-0 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
