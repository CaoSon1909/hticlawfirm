import { Divider } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionHeadingComponent from "../../section-heading/SectionHeadingComponent";
import "./styles.scss";

const headingStyle = {
  color: "white",
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "23.44px",
  marginTop: "23px",
};

const headerStyle = {
  color: "white",
  fontFamily: "Montserrat",
  fontSize: "28px",
  fontWeight: "500",
  lineHeight: "49px",
};

const PartFourHomePage = ({ isDivider }) => {
  const navigate = useNavigate();
  const location = {
    pathname: "/services-02/",
    hash: "#service02-1",
  };
  return (
    <div className="part4-homepage">
      <img
        className="bg-image-part4"
        src="/background-image/bg-image-part4.svg"
        alt="part4-image"
      />
      <div className="part4-wrapper">
        {isDivider ? (
          <Divider>
            <div style={headerStyle}>Dịch Vụ Tiêu Biểu</div>
          </Divider>
        ) : (
          <div>
            <SectionHeadingComponent
              content={"Dịch Vụ Tiêu Biểu"}
              styleProp={{ marginTop: "-5rem" }}
              isWhite={true}
            />
          </div>
        )}

        <div className="services-wrapper">
          <div className="service">
            <img
              src="/icon/service-1.svg"
              alt="doanh-nghiep-dau-tu"
              width="230"
              height="230"
            />
            <div style={headingStyle}>Doanh Nghiệp Đầu Tư</div>
          </div>
          <div className="service">
            <img
              src="/icon/service-2.svg"
              alt="phap-ly-bds"
              width="230"
              height="230"
            />
            <div style={headingStyle}>Pháp Lý Bất Động Sản</div>
          </div>
          <div className="service">
            <img
              src="/icon/service-3.svg"
              alt="thue-bao-hiem"
              width="230"
              height="230"
            />
            <div style={headingStyle}>Thuế - Bảo Hiểm</div>
          </div>
          <div className="service">
            <img
              src="/icon/service-4.svg"
              alt="so-huu-tri-tue"
              width="230"
              height="230"
            />
            <div style={headingStyle}>Sở Hữu Trí Tuệ</div>
          </div>
          <div className="service">
            <img
              src="/icon/service-5.svg"
              alt="phap-ly-chung-khoan"
              width="230"
              height="230"
            />
            <div style={headingStyle}>Pháp Lý Chứng Khoán</div>
          </div>
          <div className="service">
            <img
              src="/icon/service-6.svg"
              alt="tu-van-giai-phap"
              width="230"
              height="230"
            />
            <div style={headingStyle}>Tư Vấn Giấy Phép</div>
          </div>
        </div>
        <div className="btn-wrapper">
          <Link to={location}>
            <button className="btn">
              <div className="btn-text">XEM THÊM</div>
              <div className="btn-next-icon">
                <img
                  src="/icon/next-icon.svg"
                  alt="next-icon"
                  width="7"
                  height="14"
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartFourHomePage;
