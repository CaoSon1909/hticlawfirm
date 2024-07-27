import React from "react";
import GoogleMapComponent from "../google-map/GoogleMapComponent";
import RegisterFormComponent from "../register-form/RegisterFormComponent";
import "./styles.scss";
const FooterComponent = () => {
  return (
    <div className="footer-wrapper">
      <img
        className="bg-image-part4"
        src="/background-image/bg-image-part4.svg"
        alt="part4-image"
      />
      <div className="footer">
        <div className="leftside-footer">
          <div className="company-info">
            <img
              className="company-logo"
              src="/logo/logo-htic.svg"
              alt="logo-htic"
            />
            <div className="company-name">CÔNG TY LUẬT TNHH HTIC</div>
            <div className="company-contact-info">
              <p>
                <strong>Địa chỉ:</strong>  44M Hoàng Quốc Việt, Phú Mỹ, Quận 7,
                Thành phố Hồ Chí Minh
                <br />
                <strong>Điện thoại:</strong> (028) 62 778 226
                <br />
                <strong>Hotline/zalo:</strong> 0968 993 220
                <br />
                <strong>Email:</strong> contact@hticlaw.vn
              </p>
            </div>
          </div>
          <div className="first-footer-vl"></div>
          <div className="lien-ket">
            <div className="heading">LIÊN KẾT</div>
            <div className="links">
              <div>Giới Thiệu</div>
              <div>Tư Vấn Pháp Lý</div>
              <div>Dịch Vụ</div>
              <div>Liên Hệ</div>
              <div>Tin Tức</div>
            </div>
          </div>
        </div>
        <div className="rightside-footer">
          <RegisterFormComponent />
          <GoogleMapComponent width="263" height="165" isContactPage={true} />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
