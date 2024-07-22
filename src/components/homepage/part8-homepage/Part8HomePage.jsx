import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.scss";

const Part8HomePage = () => {
  return (
    <div className="part8-homepage">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwipper"
        loop={true}
      >
        <SwiperSlide>
          <img
            src="/background-image/company-coperated.svg"
            alt="company-coperated"
            width="927"
            height="291"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/background-image/company-coperated.svg"
            alt="company-coperated"
            width="927"
            height="291"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/background-image/company-coperated.svg"
            alt="company-coperated"
            width="927"
            height="291"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Part8HomePage;
