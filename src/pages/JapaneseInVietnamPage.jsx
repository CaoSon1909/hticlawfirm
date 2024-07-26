import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import JapaneseAtVietnamComponent from "../components/japanese-at-vietnam/JapaneseAtVietnamComponent";
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
      <JapaneseAtVietnamComponent />
      <FooterComponent />
    </>
  );
};

export default JapaneseInVietnamPage;
