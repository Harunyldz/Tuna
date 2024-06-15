import "./Referans.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { referanslar } from "../../Data.js";
console.log(referanslar)
const Referans = () => {
  return (
    <div className="referans">
      <h3>Referanslarımız</h3>
      <Swiper
        slidesPerView={5}
        // slidesPerGroup={5}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {referanslar.map((referans) => (
          <SwiperSlide key={referans.id}>
            <img src={referans.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Referans;
