import { List } from "antd";
import React from "react";
import ViewMoreLinkElement from "../elements/ViewMoreLinkElement";
import "./styles.scss";

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
const Part7HomePage = () => {
  return (
    <div className="part7-homepage">
      <div className="part7-heading">Tin Tức Mới</div>
      <div className="part7-viewmore">
        <ViewMoreLinkElement />
      </div>
      <div className="hot-news-wrapper">
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
    </div>
  );
};

export default Part7HomePage;
