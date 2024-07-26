import React from "react";
import { useParams } from "react-router-dom";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import ServiceDetailContainer from "../components/service-detail-page/ServiceDetailContainer";
import { PAGE_TYPE } from "../constants";

const ProjectDetailPage = () => {
  const { projectId } = useParams();

  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Thông tin dự án"} subHeading={"Projects"} />
      <ServiceDetailContainer id={projectId} pageType={PAGE_TYPE.PROJECT} />
      <FooterComponent />
    </>
  );
};

export default ProjectDetailPage;
