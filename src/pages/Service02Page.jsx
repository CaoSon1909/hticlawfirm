import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import Service02Component from "../components/service02-page/Service02Component";
import { PAGE_TYPE } from "../constants";

const Service02Page = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner
        heading={"Dịch Vụ Của Chúng Tôi"}
        subHeading={"Services"}
      />
      <Service02Component
        part1Heading={"Dịch Vụ Nổi Bật"}
        part2Heading={"Các Dịch Vụ Khác"}
        isFlex={false}
        pageType={PAGE_TYPE.SERVICE}
      />
      <FooterComponent />
    </>
  );
};

export default Service02Page;
