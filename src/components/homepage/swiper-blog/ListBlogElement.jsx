import React from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardBlogComponent from "../card-blog/CardBlogComponent";

import "./styles.scss";

const ListBlogElement = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <SwiperSlide>
            <CardBlogComponent />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListBlogElement;
