import { Divider } from "antd";
import React from "react";
import ActivityListComponent from "../../field-of-activities/ActivityListComponent";
import "./styles.scss";

const PartThreeHomePage = () => {
  return (
    <div className="part3-homepage">
      <div className="part3-wrapper">
        <Divider>
          <div className="part3-heading">Lĩnh Vực Hoạt Động</div>
        </Divider>
        <div style={{ position: "absolute" }}>
          <ActivityListComponent />
        </div>
      </div>
    </div>
  );
};

export default PartThreeHomePage;
