import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import Service02Component from "../components/service02-page/Service02Component";
import { PAGE_TYPE } from "../constants";

const ProjectPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Dự Án Của Chúng Tôi"} subHeading={"Projects"} />
      <Service02Component
        part1Heading={"Dự Án Tiêu Biểu"}
        part2Heading={"Các Dự Án Khác"}
        isFlex={true}
        pageType={PAGE_TYPE.PROJECT}
      />
      <FooterComponent />
    </>
  );
};

export default ProjectPage;
