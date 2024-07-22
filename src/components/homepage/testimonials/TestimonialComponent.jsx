import React from "react";
import "./styles.scss";

const TestimonialComponent = () => {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-avatar">
        <img
          className="testimonial-image"
          alt="avatar-image"
          src="/background-image/avatar-image.svg"
        />
      </div>
      <div className="testimonial-text">
        <div className="testimonial-quotes">
          "Công ty Luật HTIC có tác phong làm việc chuyên nghiệp, đội ngũ luật
          sư am hiểu pháp luật luôn nhiệt tình tư vấn giải đáp các thắc mắc của
          khách hàng. Đưa ra những cách thức giải quyết vấn đề một cách nhanh
          chóng, hiệu quả, giúp chúng tôi giải quyết được những vấn đề pháp lý
          phức tạp một cách đơn giản nhất."
        </div>
        <div className="testimonial-signature">
          MR.HÙNG- PHÓ GIÁM ĐỐC CTCP TẠI QUẬN 1
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
