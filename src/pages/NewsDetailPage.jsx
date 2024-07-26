import React from "react";
import { useParams } from "react-router-dom";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import ServiceDetailContainer from "../components/service-detail-page/ServiceDetailContainer";

const NewsDetailPage = () => {
  const { newsId } = useParams();

  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Tin Tức Mới Nhất"} subHeading={"News"} />
      <ServiceDetailContainer id={newsId} />
      <FooterComponent />
    </>
  );
};

export default NewsDetailPage;
