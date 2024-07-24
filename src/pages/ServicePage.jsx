import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import ServicesComponent from "../components/services-page/ServicesComponent";

const ServicePage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner
        heading={"Dịch Vụ Của Chúng Tôi"}
        subHeading={"Services"}
      />
      <ServicesComponent />
      <FooterComponent />
    </>
  );
};

export default ServicePage;
