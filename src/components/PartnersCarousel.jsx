import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partners = [
  "/src/assets/partners/anyang.webp",
  "/src/assets/partners/gunjang.svg",
  "/src/assets/partners/chungbuk.png",
  "/src/assets/partners/chongam.svg",
  "/src/assets/partners/dongwon.jpg",
  "/src/assets/partners/fareast.jpg",
  "/src/assets/partners/Hansong.png",
  "/src/assets/partners/induk.png",
  "/src/assets/partners/Kalvin.svg",
  "/src/assets/partners/Sahmyok.png",
  "/src/assets/partners/woosuk.png",
  "/src/assets/partners/Youngsan.gif",
];

export default function PartnersCarousel() {
  return (
    <section id="partners" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">
        Our partners
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700 px-4">
        We cooperate with the best and most reliable organizations to ensure
        top-notch services for our clients.
      </p>
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
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
