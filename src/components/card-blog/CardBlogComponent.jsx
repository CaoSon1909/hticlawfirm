import React from "react";
import "./styles.scss";

const CardBlogComponent = () => {
  return (
    <div className="list-item-wrapper">
      <div className="image-wrapper">
        <img
          width={175}
          height={126}
          alt="list-item-image"
          src="/background-image/demo-image.svg"
        />
      </div>
      <div className="content-wrapper">
        <div className="content-date">18/05/2022</div>
        <div className="content-heading">Hoạt động Tư vấn đầu tư</div>
        <div className="content-paragraph">
          Lĩnh vực Tư vấn đầu tư luôn là thế mạnh của HTIC, cho đến nay chúng
          tôi đã tư vấn cho hàng chục dự án đầu tư bao gồm khách hàng ngoài
          nước...
        </div>
      </div>
    </div>
  );
};

export default CardBlogComponent;
