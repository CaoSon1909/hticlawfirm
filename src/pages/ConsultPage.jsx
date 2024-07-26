import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import ConsultingComponent from "../components/consulting-page/ConsultingComponent";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const ConsultPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Tư Vấn Pháp Lý"} subHeading={"Legal Consult"} />
      <ConsultingComponent />
      <FooterComponent />
    </>
  );
};

export default ConsultPage;
