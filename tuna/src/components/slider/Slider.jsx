// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";
import { slides } from "../../utils/Data.js";
import { useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex); 
    setSlideKey((prev) => prev + 1);
  };

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={0}
        direction={"vertical"}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={2000}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id} className="swiper-slide-overlay">
            <img src={slide.image} alt={`Yuksek ${slide.id}`} />
            {currentSlide === index && (
              <motion.div
                className="slide-content"
                key={`${slide.id}-${slideKey}`} //her slide değiştiğinde animasyon tetiklensin diye state değişimi yapıldı
                initial={{ opacity: 0, x: -500 }}
                exit={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 2 }}
              >
                <p className="slide-text">{slide.text}  <span className="slide-span">{slide.span}</span></p>
               
                <Link to="/teklifAl" className="slide-btn">Teklif Al</Link>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
