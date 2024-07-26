import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import React from "react";
import "./styles.scss";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: (
      <>
        <img
          src="/icon/question-and-answer-icon.svg"
          style={{ paddingTop: "2px" }}
        />
        <span style={{ paddingLeft: "21px" }}>
          Làm sao hỗ trợ người Nhật về pháp lý tốt nhất tại Việt Nam
        </span>
      </>
    ),
    children: (
      <p>
        HTIC đảm bảo rằng có đủ kiến thức và kinh nghiệm trong lĩnh vực pháp lý
        mà người Nhật cần hỗ trợ. Nếu cần, HTIC sẽ hỗ trợ hợp tác với các luật
        sư chuyên nghiệp tại Việt Nam nhằm hỗ trợ cộng đồng người Nhật tại Việt
        Nam một cách tốt nhất.
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <img
          src="/icon/question-and-answer-icon.svg"
          style={{ paddingTop: "2px" }}
        />
        <span style={{ paddingLeft: "21px" }}>
          Người Nhật tại Việt Nam muốn mua nhà cần thủ tục gì?
        </span>
      </>
    ),
    children: (
      <p>
        {" "}
        Người gốc Việt Nam định cư ở nước ngoài được phép nhập cảnh vào Việt Nam
        được mua, thuê mua nhà ở gắn liền với quyền sử dụng đất ở, nhận quyền sử
        dụng đất ở trong dự án phát triển nhà ở; nhận thừa kế quyền sử dụng đất
        ở và các loại đất khác trong cùng thửa đất có nhà ở theo quy định của
        pháp luật về dân sự; nhận tặng cho nhà ở gắn liền với quyền sử dụng đất
        ở từ những người thuộc hàng thừa kế theo quy định của pháp luật về dân
        sự
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <>
        <img
          src="/icon/question-and-answer-icon.svg"
          style={{ paddingTop: "2px" }}
        />
        <span style={{ paddingLeft: "21px" }}>
          Muốn lập doanh nghiệp Nhật Bản tại Việt Nam phải làm sao
        </span>
      </>
    ),
    children: (
      <p>
        Nhật Bản hiện đang đóng vai trò quan trọng trong chiến lược đầu tư tại
        Việt Nam, nhờ vào các hiệp định hợp tác kinh tế và các cam kết quốc tế.
        Hiệp định Đối tác Kinh tế Việt Nam – Nhật Bản (VJEPA), cùng với các quy
        định trong Biểu cam kết WTO mà cả hai quốc gia đều tham gia, đã tạo ra
        nhiều cơ hội đầu tư hấp dẫn. Bài viết này sẽ hướng dẫn chi tiết các bước
        và thủ tục cần thiết để nhà đầu tư Nhật Bản có thể thành lập doanh
        nghiệp tại Việt Nam một cách hiệu quả và hợp pháp.
      </p>
    ),
  },
];
const QuestionAnswerCollapseComponent = () => {
  return (
    <div>
      <Collapse
        items={items}
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? <MinusOutlined /> : <PlusOutlined />
        }
      />
    </div>
  );
};

export default QuestionAnswerCollapseComponent;
