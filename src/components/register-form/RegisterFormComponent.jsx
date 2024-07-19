import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";
import "./styles.scss";

const heading = {
  fontFamily: "Roboto",
  fontSize: "15px",
  fontWeight: "700",
  lineHeight: "18.75px",
  textAlign: "left",
  color: "white",
  marginTop: "38px",
  marginBottom: "18px",
  textAlign: "center",
};

const RegisterFormComponent = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="register-form-wrapper">
      <div style={heading}>ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ</div>
      <div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Xin vui lòng nhập tên!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Họ tên"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Xin vui lòng nhập SĐT",
              },
            ]}
          >
            <Input prefix={<PhoneOutlined />} type="phone" placeholder="SĐT" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Xin vui lòng nhập email",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="content">
            <Input type="input" placeholder="Nội dung" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng Ký Ngay
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterFormComponent;
