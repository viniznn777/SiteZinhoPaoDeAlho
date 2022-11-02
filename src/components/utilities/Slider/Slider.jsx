import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Slider.module.css";

import IMG1 from "../../../Imgs/slider/img1.jpg";
import IMG2 from "../../../Imgs/slider/img2.jpg";
import IMG3 from "../../../Imgs/slider/img3.jpg";
import IMG4 from "../../../Imgs/slider/img4.jpg";

const Slider = () => {
  return (
    <section className={styles.section}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={true}
        navigation={true}
        loop="true"
        className={styles.swiper_wrapper}
      >
        <SwiperSlide className={styles.Slider}>
          <img src={IMG1} alt="" draggable="false" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className={styles.Slider}>
          <img src={IMG2} alt="" draggable="false" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className={styles.Slider}>
          <img src={IMG3} alt="" draggable="false" className="img-fluid" />
        </SwiperSlide>
        <SwiperSlide className={styles.Slider}>
          <img src={IMG4} alt="" draggable="false" className="img-fluid" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
