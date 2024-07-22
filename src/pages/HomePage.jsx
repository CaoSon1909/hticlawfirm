import React from "react";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import PartOneHomePage from "../components/homepage/part1-homepage/PartOneHomePage";
import PartTwoHomePage from "../components/homepage/part2-homepage/PartTwoHomePage";
import PartThreeHomePage from "../components/homepage/part3-homepage/ActivitiesComponent";
import PartFourHomePage from "../components/homepage/part4-homepage/PartFourHomePage";
import PartFiveHomePage from "../components/homepage/part5-homepage/PartFiveHomePage";
import PartSixHomePage from "../components/homepage/part6-homepage/PartSixHomePage";
import Part7HomePage from "../components/homepage/part7-homepage/Part7HomePage";
import Part8HomePage from "../components/homepage/part8-homepage/Part8HomePage";
import Part9HomePage from "../components/homepage/part9-homepage/Part9HomePage";
import NavigationComponent from "../components/navigation/NavigationComponent";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <PartOneHomePage />
      <PartTwoHomePage />
      <PartThreeHomePage />
      <PartFourHomePage />
      <PartFiveHomePage />
      <PartSixHomePage />
      <Part7HomePage />
      <Part8HomePage />
      <Part9HomePage />
      <FooterComponent />
    </>
  );
};

export default HomePage;
