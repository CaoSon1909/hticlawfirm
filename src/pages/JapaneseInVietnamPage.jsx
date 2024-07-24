import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const JapaneseInVietnamPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner
        heading={"Góc Người Nhật Tại Việt Nam"}
        subHeading={"Japanese At Vietnam"}
      />
    </>
  );
};

export default JapaneseInVietnamPage;
