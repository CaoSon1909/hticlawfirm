import React from "react";
import ServiceDetailComponent from "./ServiceDetailComponent";
import "./styles.scss";

const ServiceDetailContainer = (props) => {
  const { id, pageType } = props;
  return (
    <div className="service-detail-container-wrapper">
      <ServiceDetailComponent id={id} pageType={pageType} />
    </div>
  );
};

export default ServiceDetailContainer;
