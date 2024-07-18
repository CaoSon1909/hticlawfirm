import { List, Space } from "antd";
import React, { useState } from "react";
import "./styles.scss";

const data = Array.from({
  length: 6,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const listItemStyles = {
  border: "1px solid red",
  width: "490px",
  height: "161px",
  display: "flex",
  justifyContent: "center",
  gap: "30px",
};

const imageBorder = {
  border: "1px solid yellow",
  marginLeft: "-17px",
  width: "fit-content",
  height: "fit-content",
};
const contentBorder = {
  border: "1px solid green",
};

const contentDate = {
  border: "1px solid black",
  fontFamily: "Roboto",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "16.41px",
  color: "#000000",
  marginBottom: "5px",
};

const contentHeading = {
  border: "1px solid black",
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: "bold",
  lineHeight: "21.09px",
  letterSpacing: "0.2px",
  textAlign: "left",
  marginBottom: "13px",
};

const ListBlogElement = () => {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={data}
      //   grid={{ gutter: 31, column: 3 }}
      renderItem={(item) => (
        <List.Item style={listItemStyles} key={item.title}>
          <div style={imageBorder}>
            <img
              width={175}
              height={126}
              alt="list-item-image"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          </div>
          <div style={contentBorder}>
            <div style={contentDate}>18/05/2022</div>
            <div style={contentHeading}>Hoạt động Tư vấn đầu tư</div>
            <div className="content-paragraph">
              Lĩnh vực Tư vấn đầu tư luôn là thế mạnh của HTIC, cho đến nay
              chúng tôi đã tư vấn cho hàng chục dự án đầu tư bao gồm khách hàng
              ngoài nước...
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default ListBlogElement;
