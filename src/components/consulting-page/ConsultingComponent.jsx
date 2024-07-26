import { Input, List } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_TYPE } from "../../constants";
import OtherServicesComponent from "../other-services/OtherServicesComponent";
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
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "Los Angeles battles huge wildfires.",
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
];
const insideContent = {
  display: "flex",
  gap: "16px",
  borderBottom: "2px solid #E3E3E3",
  marginTop: "5px",
  marginRight: "15px",
  fontFamily: "Montserrat",
  fontWeight: "500",
  fontSize: "14px",
};
const ConsultingComponent = () => {
  const itemPerPage = 5;
  const navigate = useNavigate();

  const navigateOnClick = () => {
    navigate("");
  };
  const onSearch = () => {};
  return (
    <div className="consulting-page-outline">
      <div className="consulting-page-wrapper">
        <div className="top-consulting-page-heading">
          <div className="top-consulting-page-header">
            <SectionHeadingComponent
              content={"Tin tư vấn pháp lý nổi bật"}
              styleProp={{ top: "10px" }}
            />
          </div>
          <div className="top-consulting-page-search-bar">
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
        <div className="bot-consulting-page-heading">
          <div className="bot-consulting-page-header">
            <SectionHeadingComponent
              content={"Tin tư vấn pháp lý mới"}
              styleProp={{ top: "0" }}
            />
          </div>
          <div className="new-consulting-wrapper">
            <div className="hot-news-list">
              <List
                dataSource={data}
                grid={{
                  column: 2,
                }}
                renderItem={(item) => (
                  <div className="hot-news-content">
                    <List.Item>
                      <div style={insideContent}>
                        <div style={{ color: "#7A8A93" }}>18/05/2022</div>
                        <div style={{ color: "#272D30" }}>{item}</div>
                      </div>
                    </List.Item>
                  </div>
                )}
              />
            </div>
          </div>
          <div className="view-more-consulting-news-btn">
            <a onClick={navigateOnClick}>XEM THÊM &gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingComponent;
