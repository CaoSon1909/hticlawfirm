import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import Service02Component from "../components/service02-page/Service02Component";

const Service02Page = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner
        heading={"Dịch Vụ Của Chúng Tôi"}
        subHeading={"Services"}
      />
      <Service02Component />
      <FooterComponent />
    </>
  );
};

export default Service02Page;
