import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    quote: "Perfect service for my automobile",
    description:
      "The kilowatt (kW) refers to the power rating of a home charge point and is the maximum amount of power that can be drawn.",
  },
  {
    quote: "Relux has a great service on me",
    description:
      "The kilowatt (kW) refers to the power rating of a home charge point and is the maximum amount of power that can be drawn.",
  },
  {
    quote: "Highly recommended for all users",
    description:
      "Great experience with their customer service and overall support. Would use again.",
  },
];

const Testimonial = () => {
  return (
    <div className="py-16 bg-white w-full">
      <h3 className="text-green-600 text-center text-sm uppercase font-semibold">
        Testimonials
      </h3>
      <h2 className="text-center text-3xl md:text-6xl leading-relaxed font-bold text-black mt-2">
        What our clients say <br /> about our company
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-9/12 h-96 mx-auto mt-10 px-5 "
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <span className="text-green-600 text-3xl">“</span>
            <div className="border border-green-600 flex flex-col gap-16  p-6 rounded-md text-center md:h-64 shadow-sm">
              <h4 className="text-black font-semibold text-3xl mt-2">{item.quote}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
  
export default Testimonial;
