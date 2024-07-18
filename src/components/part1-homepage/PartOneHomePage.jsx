import { Carousel } from "antd";
import React from "react";
import "./styles.scss";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#575757",
        position: "absolute",
        right: "-88px",
        width: "40px",
        height: "40px",
        border: "1px solid #575757",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#575757",
        position: "absolute",
        left: "-88px",
        width: "40px",
        height: "40px",
        border: "1px solid #575757",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const carouselStyle = {
  width: "995px",
  position: "absolute",
  top: "10%",
  left: "17%",
};

const PartOneHomePage = () => {
  return (
    <div className="part1-homepage">
      <img
        className="background-image-1"
        src="/background-image/bg-image-1.png"
        alt="first-image"
      />

      <Carousel autoplay arrows dots {...settings} style={carouselStyle}>
        <div>
          <img
            className="carousel-image-1"
            src="/background-image/carousel-1.svg"
            alt="first-image"
          />
        </div>
        <div>
          <img
            className="carousel-image-2"
            src="/background-image/carousel-2.svg"
            alt="second-image"
          />
        </div>
        <div>
          <img
            className="carousel-image-3"
            src="/background-image/carousel-3.svg"
            alt="third-image"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default PartOneHomePage;
