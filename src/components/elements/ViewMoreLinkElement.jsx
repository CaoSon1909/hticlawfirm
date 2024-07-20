import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const ViewMoreLinkElement = ({ style, className }) => {
  return (
    <div className={className} style={{ ...style }}>
      <Button type="link">
        <div
          style={{
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: "500",
            lineHeight: "49px",
          }}
        >
          Xem thêm
          <RightOutlined />
        </div>
      </Button>
    </div>
  );
};

export default ViewMoreLinkElement;
