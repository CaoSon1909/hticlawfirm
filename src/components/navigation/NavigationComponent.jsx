import { Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const items = [
  {
    label: "TRANG CHỦ",
    key: "/home-page",
  },
  {
    label: "GIỚI THIỆU",
    key: "/about-us",
  },
  {
    label: "DỊCH VỤ",
    key: "/services",
  },
  {
    label: "DỰ ÁN",
    key: "/projects",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "TIN TỨC",
    key: "/news",
  },
  {
    label: "GÓC NGƯỜI NHẬT TẠI VIỆT NAM",
    key: "/japanese-in-vietnam",
  },
  {
    label: "LIÊN HỆ",
    key: "/contact",
  },
];

const NavigationComponent = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };
  const navigate = useNavigate();
  return (
    <div className="navigation-bar">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default NavigationComponent;
