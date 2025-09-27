import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img1 from "/src/assets/partners/anyang.webp";
import img2 from "/src/assets/partners/gunjang.svg";
import img3 from "/src/assets/partners/chungbuk.png";
import img4 from "/src/assets/partners/chongam.svg";
import img5 from "/src/assets/partners/dongwon.jpg";
import img6 from "/src/assets/partners/fareast.jpg";
import img7 from "/src/assets/partners/Hansong.png";
import img8 from "/src/assets/partners/induk.png";
import img9 from "/src/assets/partners/Kalvin.svg";
import img10 from "/src/assets/partners/Sahmyok.png";
import img11 from "/src/assets/partners/woosuk.png";
import img12 from "/src/assets/partners/Youngsan.gif";
import "swiper/css";
import "swiper/css/autoplay";

const partners = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
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
