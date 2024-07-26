import { Input } from "antd";
import React from "react";
import { PAGE_TYPE } from "../../constants";
import OtherServicesComponent from "../other-services/OtherServicesComponent";
import QuestionAnswerCollapseComponent from "../q&a-collapse/Q&ACollapseComponent";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import "./styles.scss";

const otherServicesData = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    return {
      id: i,
      title: "THUÊ MUA NHÀ Ở XÃ HỘI THEO LUẬT NHÀ Ở 2023",
      publishDate: "18/05/2022",
      paragraph:
        "Việc thuê mua nhà ở xã hội là một trong những chính sách hỗ trợ của Nhà nước dành cho các đối tượng có nhu cầu về nhà ở nhưng gặp khó khăn về tài chính. Hãy cùng tìm hiểu chi tiết về khái niệm này và những ai được thuê mua nhà ở xã hội theo quy định của pháp luật. 1. Nhà Ở Xã Hội Là Gì? Theo quy định tại Khoản 7 Điều 3 Luật Nhà ở số 65/2014/QH13 và Luật Nhà ở số 27/2023/QH15, nhà ở xã hội là loại nhà ở có sự hỗ trợ từ...",
    };
  });
};
const JapaneseAtVietnamComponent = () => {
  const onSearch = () => {};
  return (
    <div className="jp-at-vn-outline">
      <div className="jp-at-vn-wrapper">
        <div className="jp-at-vn-page-heading">
          <div className="jp-at-vn-page-header">
            <SectionHeadingComponent
              content={"Hỗ trợ pháp lý cho người Nhật tại Việt Nam"}
              styleProp={{ top: "20px" }}
            />
          </div>
          <div className="jp-at-vn-page-search-bar">
            <Input.Search
              placeholder="Tìm Kiếm"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
        <div className="top-consulting-page-list">
          <OtherServicesComponent
            data={otherServicesData()}
            isFlex={true}
            pageType={PAGE_TYPE.CONSULTING}
          />
        </div>
        <SectionHeadingComponent
          content={
            "Những câu hỏi pháp lý thường gặp của người Nhật tại Việt Nam"
          }
          styleProp={{ top: "65%" }}
        />
        <div className="question-answer-part">
          <QuestionAnswerCollapseComponent />
        </div>
      </div>
    </div>
  );
};

export default JapaneseAtVietnamComponent;
