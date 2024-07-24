import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const NewsPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Tin Tức Mới Nhất"} subHeading={"News"} />
    </>
  );
};

export default NewsPage;
