import React from "react";
import "./styles.scss";

const SpecialServiceCardComponent = (props) => {
  const { data } = props;
  return (
    <div>
      <div className="special-service-card-wrapper">
        <div className="special-service-card-img">
          <img
            src="/background-image/doanh-nghiep-dau-tu.svg"
            alt="DN va dau tu"
          />
        </div>
        <div className="special-service-card-name">{data.name}</div>
        <div>
          <img
            src="/icon/special-service-icon.svg"
            alt="special-service-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialServiceCardComponent;
