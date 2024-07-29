import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ViewMoreLinkElement = ({ style, className, url, hash }) => {
  const location = {
    pathname: url,
    hash: hash,
  };
  return (
    <div className={className} style={{ ...style }}>
      <Link to={location}>
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
      </Link>
    </div>
  );
};

export default ViewMoreLinkElement;
