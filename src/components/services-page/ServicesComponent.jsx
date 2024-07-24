import React from "react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ActivityListComponent from "../field-of-activities/ActivityListComponent";
import PartFourHomePage from "../homepage/part4-homepage/PartFourHomePage";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import "./styles.scss";

const otherServicesData = [
  {
    title: "Tư Vấn Giấy Phép",
    servicesList: [
      "Giấy Phép Kinh Doanh Lữ Hành Quốc Tế",
      "Visa Doanh Nghiệp Cho Người Nước Ngoài",
      "Cấp Giấy Phép Cho Nhà Thầu Nước Ngoài",
      "Công Bố Lưu Hành Mỹ Phẩm",
    ],
  },
  {
    title: "Doanh Nghiệp - Đầu Tư",
    servicesList: [
      "Thành Lập Công Ty TNHH Một Thành Viên",
      "Thủ Tục Đăng Ký Tạm Ngừng Hoạt Động",
      "Thay Đổi Trụ Sở Công Ty Hợp Danh",
      "Thành Lập Công Ty TNHH Hai Thành Viên",
    ],
  },
  {
    title: "Thủ Tục Hành Chính",
    servicesList: [
      "Thủ Tục Người Nước Ngoài Nhận Con Nuôi",
      "Thủ Tục Xin Cấp Phép Triển Lãm Tác Phẩm",
      "Thủ Tục Cấp Phiếu Lý Lịch Tư Pháp",
      "Thủ Tục Công Chứng Hợp Đồng Chuyển Nhượng",
    ],
  },
];

const OtherServicesCard = (props) => {
  const navigate = useNavigate();

  const navigateOnClick = (e) => {
    navigate("/services-02");
  };

  const { data } = props;
  return (
    <div className="other-services-card">
      <img src="https://placehold.co/400x200" alt="Consultation" />
      <div className="card-content">
        <h3 style={{ marginBlockEnd: "0" }}>{data?.title}</h3>
        <ul style={{ fontSize: "15px", textAlign: "left" }}>
          {data?.servicesList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <div className="view-more-btn">
          <a onClick={navigateOnClick}>XEM THÊM &gt;</a>
        </div>
      </div>
    </div>
  );
};
const ServicesComponent = () => {
  return (
    <div className="service-component">
      <div className="service-component-wrapper">
        <SectionHeadingComponent content={"Lĩnh Vực Hoạt Động"} />
        <div className="activities-list-wrapper">
          <ActivityListComponent />
        </div>
        <div className="top-services-wrapper">
          <SectionHeadingComponent
            content={"Dịch Vụ Tiêu Biểu"}
            styleProp={{ top: "482px" }}
          />
          <PartFourHomePage />
        </div>
        <div className="other-services">
          <SectionHeadingComponent
            content={"Các Dịch Vụ Khác"}
            styleProp={{ top: "1350px" }}
          />
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwipper"
            loop={true}
          >
            <SwiperSlide>
              <div className="other-services-wrapper">
                {otherServicesData.map((item) => (
                  <OtherServicesCard data={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="other-services-wrapper">
                {otherServicesData.map((item) => (
                  <OtherServicesCard data={item} />
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="other-services-wrapper">
                {otherServicesData.map((item) => (
                  <OtherServicesCard data={item} />
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
