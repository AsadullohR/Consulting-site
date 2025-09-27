import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import visa1 from "../assets/visas/8. MAKHMUDOV ZIKRULLOKH_page-0001.jpg";
import visa2 from "../assets/visas/9. MUYDINOV BEKZODBEK_page-0001.jpg";
import visa3 from "../assets/visas/10. SODIKJONOV MUKHAMMADSOBIR_page-0001.jpg";
import visa4 from "../assets/visas/1. AZIMOV JASURBEK-1.jpg";
import visa5 from "../assets/visas/2. FOZILJONOV ASADBEK-1.jpg";
import visa6 from "../assets/visas/3. HOJIKURBONOV MIRONSHOH-1.jpg";
import visa7 from "../assets/visas/4. NIZOMUDDINOV ABRORBEK-1.jpg";
import visa8 from "../assets/visas/5. SAMINJONOV BOBOYOR-1.jpg";
import visa9 from "../assets/visas/6. ORIBJONOV MUHAMMADALI   MOKPO-1.jpg";
import visa10 from "../assets/visas/7. ISOMIDDINOV RASHIDBEK-1.jpg";

const visas = [
  visa1,
  visa2,
  visa3,
  visa4,
  visa5,
  visa6,
  visa7,
  visa8,
  visa9,
  visa10,
];

export default function VisaResults() {
  return (
    <section id="results" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-2 text-blue-600">
        Our results
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-8 sm:mb-32 text-gray-700 px-4">
        Our customers got accepted into best universities and programs, below
        are some of them.
      </p>

      <div className="max-w-none sm:max-w-6xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, EffectFade]}
          className="rounded-xl"
        >
          {visas.map((img, i) => (
            <SwiperSlide key={i}>
              <div>
                <img
                  src={img}
                  alt={`Visa result ${i + 1}`}
                  className="object-contain rounded-xl result-card"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
