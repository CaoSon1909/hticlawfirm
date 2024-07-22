import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialComponent from "../testimonials/TestimonialComponent";
import "./styles.scss";

const Part9HomePage = () => {
  return (
    <div className="part9-homepage">
      <img
        className="background-image-9"
        src="/background-image/bg-image-part9.svg"
        alt="nine-image"
      />
      <div className="swipper-wrapper">
        <Swiper
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{
            "--swiper-pagination-top": "260px",
          }}
        >
          <SwiperSlide>
            <TestimonialComponent />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Part9HomePage;
