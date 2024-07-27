import { Button, Form, Input } from "antd";
import React from "react";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";

const ContactFormComponent = () => {
  return (
    <>
      <SectionHeadingComponent
        content={"Liên hệ theo Form"}
        styleProp={{ position: "static" }}
      />
      <Form layout="horizontal">
        <Form.Item>
          <Input placeholder="Họ Tên" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Địa Chỉ" />
        </Form.Item>

        <Form.Item>
          <Input placeholder="Số Điện Thoại" />
        </Form.Item>
        <Form.Item>
          <Input.TextArea rows={4} placeholder="Nội Dung" />
        </Form.Item>
        <Form.Item>
          <Button>Gửi Đi</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactFormComponent;
