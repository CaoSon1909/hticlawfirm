import React from "react";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import "./styles.scss";

const ContactInfoComponent = () => {
  return (
    <>
      <SectionHeadingComponent
        content={"Thông tin liên hệ"}
        styleProp={{ top: "15px" }}
      />
      <div className="contact-info-wrapper">
        <div className="contact-info-img">
          <img
            src="/background-image/contact-info-img.svg"
            alt="contact-info-img"
          />
        </div>
        <div className="contact-info-data">
          <p>
            <strong>CÔNG TY LUẬT TNHH HTIC</strong>  
          </p>
          <p>
            <strong>Địa chỉ:</strong> 44M Hoàng Quốc Việt, Phú Mỹ, Quận 7, Thành
            phố Hồ Chí Minh
          </p>
          <p>
            <strong>Hotline:</strong> 0968 993 220
          </p>
          <p>
            <strong>Điện thoại:</strong> (028) 6277 8226
          </p>
          <p>
            <strong>Email:</strong> luatsu@hticlaw.vn{" "}
          </p>
          <p>
            <strong>Website:</strong> wwww.hticlaw.vn
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactInfoComponent;
