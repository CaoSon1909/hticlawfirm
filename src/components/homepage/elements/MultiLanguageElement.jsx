import { Divider, Space, Typography } from "antd";
import React from "react";

const MultiLanguageElement = () => {
  return (
    <Space align="center">
      <Space align="center">
        <span role="img" aria-label={"Vietnamese"}>
          <img
            src="/icon/vn-icon.svg"
            alt="vn icon"
            width="17"
            height="16"
            style={{ marginTop: "6px" }}
          />
        </span>
        <Typography.Text strong={true}>Vietnamese</Typography.Text>
      </Space>
      <Divider type="vertical" style={{ borderLeft: "1px solid #7E7E7E" }} />
      <Space align="center">
        <span role="img" aria-label={"Vietnamese"}>
          <img
            src="/icon/jp-icon.svg"
            alt="jp icon"
            width="17"
            height="16"
            style={{ marginTop: "6px" }}
          />
        </span>
        <Typography.Text strong={true}>Japanese</Typography.Text>
      </Space>
    </Space>
  );
};

export default MultiLanguageElement;
