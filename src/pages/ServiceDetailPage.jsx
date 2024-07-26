import React from "react";
import { useParams } from "react-router-dom";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import ServiceDetailContainer from "../components/service-detail-page/ServiceDetailContainer";
import { PAGE_TYPE } from "../constants";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Thông tin dịch vụ"} subHeading={"Services"} />
      <ServiceDetailContainer id={serviceId} pageType={PAGE_TYPE.SERVICE} />
      <FooterComponent />
    </div>
  );
};

export default ServiceDetailPage;
