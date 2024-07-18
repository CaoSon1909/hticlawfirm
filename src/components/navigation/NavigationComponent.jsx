import { Menu } from "antd";
import React, { useState } from "react";
import "./styles.scss";

const items = [
  {
    label: "TRANG CHỦ",
    key: "trang-chu",
  },
  {
    label: "GIỚI THIỆU",
    key: "gioi-thieu",
  },
  {
    label: "DỊCH VỤ",
    key: "dich-vu",
  },
  {
    label: "DỰ ÁN",
    key: "du-an",
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
    key: "tin-tuc",
  },
  {
    label: "GÓC NGƯỜI NHẬT TẠI VIỆT NAM",
    key: "goc-nguoi-nhat-tai-viet-nam",
  },
  {
    label: "LIÊN HỆ",
    key: "lien-he",
  },
];

const NavigationComponent = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
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
