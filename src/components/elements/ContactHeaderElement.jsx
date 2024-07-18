import { Divider, Space, Typography } from "antd";
import React from "react";

const contactHeaderStyle = {
  position: "absolute",
  display: "inline-block",
  left: "570px",
  width: "269px",
};

const wrapperStyle = {
  position: "relative",
};

const ContactHeaderElement = () => {
  return (
    <Space align="center">
      <Space align="center">
        <span role="img" aria-label={"phone"}>
          <img src="/icon/phone.svg" alt="phone icon" width="17" height="16" />
        </span>
        <Typography.Text strong={true}>0968993220</Typography.Text>
      </Space>
      <Divider type="vertical" style={{ borderLeft: "1px solid #7E7E7E" }} />
      <Space align="center">
        <span role="img" aria-label={"Vietnamese"}>
          <img src="/icon/mail.svg" alt="mail icon" width="17" height="12" />
        </span>
        <Typography.Text strong={true}>luatsu@hticlaw.vn</Typography.Text>
      </Space>
    </Space>
  );
};

export default ContactHeaderElement;
