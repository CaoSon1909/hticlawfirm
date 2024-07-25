import React from "react";
import ServiceDetailComponent from "./ServiceDetailComponent";
import "./styles.scss";

const ServiceDetailContainer = (props) => {
  const { id } = props;
  return (
    <div className="service-detail-container-wrapper">
      <ServiceDetailComponent id={id} />
    </div>
  );
};

export default ServiceDetailContainer;
