import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import Part2AboutUsPage from "../components/about-us-page/part2/Part2AboutUsPage";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const AboutUs = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner
        heading={"Giới Thiệu Về Chúng Tôi"}
        subHeading={"About Us"}
      />
      <Part2AboutUsPage />
    </>
  );
};

export default AboutUs;
