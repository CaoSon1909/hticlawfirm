import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const ProjectPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Dự Án Nổi Bật"} subHeading={"Projects"} />
    </>
  );
};

export default ProjectPage;
