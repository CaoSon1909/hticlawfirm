import React from "react";
import "./styles.scss";

const ServiceCardComponent = () => {
  return (
    <div className="service-card-wrapper">
      <div className="service-card-img">
        <img src="/background-image/building-image.svg" alt="building-image" />
      </div>
      <div className="service-card-content">
        <div>
          <h3>THUÊ MUA NHÀ Ở XÃ HỘI THEO LUẬT NHÀ Ở 2023</h3>
        </div>
        <div>23/07/2024</div>
        <div className="service-card-paragraph">
          <p>
            Việc thuê mua nhà ở xã hội là một trong những chính sách hỗ trợ của
            Nhà nước dành cho các đối tượng có nhu cầu về nhà ở nhưng gặp khó
            khăn về tài chính. Hãy cùng tìm hiểu chi tiết về khái niệm này và
            những ai được thuê mua nhà ở xã hội theo quy định của pháp luật. 1.
            Nhà Ở Xã Hội Là Gì? Theo quy định tại Khoản 7 Điều 3 Luật Nhà ở số
            65/2014/QH13 và Luật Nhà ở số 27/2023/QH15, nhà ở xã hội là loại nhà
            ở có sự hỗ trợ từ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardComponent;
