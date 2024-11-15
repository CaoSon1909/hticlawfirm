import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import Service02Component from "../components/service02-page/Service02Component";
import { PAGE_TYPE } from "../constants";

const NewsPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Tin Tức Mới Nhất"} subHeading={"News"} />
      <Service02Component
        part1Heading={"Tin Tức Nổi Bật"}
        part2Heading={"Tin Tức Khác"}
        isFlex={false}
        pageType={PAGE_TYPE.NEWS}
      />
      <FooterComponent />
    </>
  );
};

export default NewsPage;
