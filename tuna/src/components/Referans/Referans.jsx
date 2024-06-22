import "./Referans.css";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { referanslar } from "../../Data.js";
const Referans = () => {
  return (
    <motion.div
      className="referans"
      initial={{ opacity: 0, y: 100 }}
      transition={{ type: "tween", duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="ref-swiper"
        breakpoints={{
          480: {
            slidesPerView: 3,
          },
        }}
      >
        {referanslar.map((referans) => (
          <SwiperSlide key={referans.id}>
            <img src={referans.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Referans;
