// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import yangin3 from "../../assets/yangin3.jpeg";
import yangin4 from "../../assets/yangin4.jpeg";
import yuksek from "../../assets/yuksek.jpeg";
// import healthsafety from "../../assets/healthsafety.jpg";
import health from "../../assets/health.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={0}
        direction={"vertical"}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-overlay">
          <img src={yuksek} alt="Yuksek 1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay">
          <img src={yangin3} alt="Yangin 2" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay">
          <img src={yangin4} alt="Yangin 4" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-overlay">
          <img src={health} alt="İSG" />
        </SwiperSlide>
        {/* <SwiperSlide className="swiper-slide-overlay">
          <img src={health2} alt="İSG" />
        </SwiperSlide> */}
        {/* <SwiperSlide className="swiper-slide-overlay">
          <img src={healthsafety} alt="İSG" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
