import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const visas = [
  "../assets/korea.jpg",
  "../assets/china.jpg",
  "../assets/Turkey.png",
];

export default function VisaResults() {
  return (
    <section id="visas" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Наши результаты</h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="rounded-xl shadow-lg"
        >
          {visas.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Visa result ${i + 1}`}
                className="w-full h-[500px] object-contain rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
