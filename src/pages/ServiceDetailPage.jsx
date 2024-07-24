import React from "react";
import { useParams } from "react-router-dom";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import ServiceDetailContainer from "../components/service-detail-page/ServiceDetailContainer";

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner
        heading={"Dịch Vụ Của Chúng Tôi"}
        subHeading={"Services"}
      />
      <p>{serviceId}</p>
      <ServiceDetailContainer />
      <FooterComponent />
    </div>
  );
};

export default ServiceDetailPage;
