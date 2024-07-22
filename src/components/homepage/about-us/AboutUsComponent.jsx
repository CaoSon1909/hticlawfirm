import { Carousel, Typography } from "antd";
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
        right: "20px",
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
        left: "20px",
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
  width: "552px",
  position: "absolute",
  top: "19%",
  left: "615px",
};

const AboutUsComponent = () => {
  return (
    <div className="about-us">
      <div className="about-us-wrapper">
        <div className="about-us-left">
          <Typography.Title level={3} className="about-us-heading">
            Về Chúng Tôi
          </Typography.Title>
          <img
            className="left-image-about-us"
            src="/background-image/left-image-about-us.svg"
            alt="left-image-about-us"
            width="517"
            height="205"
          />
          <Typography.Paragraph className="left-paragraph">
            HTIC là công ty luật của Việt Nam chuyên cung cấp dịch vụ pháp lý và
            các giải pháp cho khách hàng với các mảng  kinh doanh trong và ngoài
            lãnh thổ Việt Nam. Chúng tôi có chuyên môn nhiều năm hoạt động trên
            cả hai lĩnh vực công và tư. Dịch vụ của chúng tôi đảm bảo những nhu
            cầu khác nhau của các nhà đầu tư, doanh nghiệp và các tổ chức công
            trong các lĩnh vực thương mại quốc tế, đầu tư, chi tiêu chính phủ
            hoặc giao dịch dân sự. HTIC là một lựa chọn của Khách Hàng cho dịch
            vụ chất lượng cao và cung cách làm việc hiệu quả.
          </Typography.Paragraph>
        </div>
        <div className="about-us-right">
          <Typography.Title level={3} className="about-us-heading-right">
            Tại Sao Nên Chọn Chúng Tôi
          </Typography.Title>
          <Carousel autoplay arrows dots {...settings} style={carouselStyle}>
            <div>
              <img
                className="aboutus-carousel-1"
                src="/background-image/right-image-aboutus-1.svg"
                alt="first-image"
              />
            </div>
            <div>
              <img
                className="aboutus-carousel-2"
                src="/background-image/right-image-aboutus-2.svg"
                alt="second-image"
              />
            </div>
            <div>
              <img
                className="aboutus-carousel-3"
                src="/background-image/right-image-aboutus-3.svg"
                alt="third-image"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
