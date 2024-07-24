import React from "react";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import SpecialServiceCardComponent from "../special-service-card/SpecialServiceCardComponent";
import "./styles.scss";

const specialServiceData = [
  {
    id: 1,
    name: "Doanh nghiệp và đầu tư",
  },
  {
    id: 2,
    name: "Pháp lý bất động sản",
  },
  {
    id: 3,
    name: "Thuế - Bảo hiểm",
  },
  {
    id: 4,
    name: "Sở hữu trí tuệ",
  },
  {
    id: 5,
    name: "Pháp lý chứng khoán",
  },
  {
    id: 6,
    name: "Tư vấn giấy phép",
  },
];

const ServiceDetailComponent = () => {
  return (
    <div className="service-detail-component-wrapper">
      <div className="detail-leftside-wrapper">
        <h1>Giấy Phép Kinh Doanh Lữ Hành Quốc Tế</h1>
        <p>18/05/2022</p>
        <img src="/background-image/travel-img.svg" />
        <p>
          Sau khi được cấp Giấy chứng nhận đăng ký kinh doanh, doanh nghiệp muốn
          hoạt động kinh doanh lữ hành cần phải thực hiện thủ tục cấp giấy phép
          kinh doanh lữ hành quốc tế.
        </p>
        <p>
          Để cấp giấy phép kinh doanh lữ hành quốc tế, doanh nghiệp cần phải đáp
          ứng một số điều kiện nhất định.
        </p>
        <h2>THỦ TỤC CẤP PHÉP</h2>
        <h3>1. ĐIỀU KIỆN CẤP PHÉP</h3>
        <ul>
          <li>
            Doanh nghiệp phải thành lập theo quy định của pháp luật về doanh
            nghiệp.
          </li>
          <li>
            Người phụ trách điều hành lữ hành phải có chứng chỉ nghiệp vụ lữ
            hành.
          </li>
          <li>Địa điểm kinh doanh phải đáp ứng các quy định của pháp luật.</li>
        </ul>

        <h3>2. THỦ TỤC CẤP PHÉP</h3>
        <ul>
          <li>Đơn xin cấp giấy phép.</li>
          <li>Giấy chứng nhận đăng ký kinh doanh.</li>
          <li>Chứng chỉ nghiệp vụ lữ hành.</li>
        </ul>
      </div>
      <div className="detail-rightside-wrapper">
        <div className="newest-services">
          <SectionHeadingComponent
            content="Dịch vụ mới nhất"
            styleProp={{ top: "0", left: "0" }}
          />
          <ul>
            <li>7 Trường hợp không được cấp giấy phép</li>
            <li>Điểm mới của luật bảo vệ thu nhập</li>
            <li>Đăng ký kinh doanh như thế nào?</li>
            <li>Thuế và thủ tục khai thuế</li>
            <li>Quy định về người đại diện</li>
          </ul>
        </div>
        <div className="special-services">
          <SectionHeadingComponent
            content="Các dịch vụ tiêu biểu"
            styleProp={{ top: "0", left: "0" }}
          />
          <div className="special-services-outline">
            {specialServiceData.map((item) => (
              <SpecialServiceCardComponent data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailComponent;
