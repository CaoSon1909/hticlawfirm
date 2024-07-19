import React from "react";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import PartOneHomePage from "../components/part1-homepage/PartOneHomePage";
import PartTwoHomePage from "../components/part2-homepage/PartTwoHomePage";
import PartThreeHomePage from "../components/part3-homepage/ActivitiesComponent";
import PartFourHomePage from "../components/part4-homepage/PartFourHomePage";
import PartFiveHomePage from "../components/part5-homepage/PartFiveHomePage";
import PartSixHomePage from "../components/part6-homepage/PartSixHomePage";
import Part7HomePage from "../components/part7-homepage/Part7HomePage";
import Part8HomePage from "../components/part8-homepage/Part8HomePage";
import Part9HomePage from "../components/part9-homepage/Part9HomePage";

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
