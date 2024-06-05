import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import yuksek2 from "../../assets/yuksek2.jpg";
import yangin2 from "../../assets/yangin2.jpeg";
import yuksek from "../../assets/yuksek.jpeg";
import hijyen3 from "../../assets/hijyen3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={yuksek} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yuksek2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={yangin2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hijyen3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider