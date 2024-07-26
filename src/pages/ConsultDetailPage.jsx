import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const ConsultDetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner
        heading={"Thông tin tư vấn pháp lý"}
        subHeading={"Legal Consult"}
      />
      <FooterComponent />
    </>
  );
};

export default ConsultDetailPage;
