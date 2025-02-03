import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const clients = [
  "Times of India",
  "India Today",
  "New York Times",
  "India Gate",
  "Gateway India"
];

const OurClients = () => {
  return (
    <div className="bg-black py-10">
      <h2 className="text-center text-green-400 text-lg mb-6">As Featured In</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="w-full max-w-5xl mx-auto"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="text-white text-center text-sm">
            {client}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurClients;
