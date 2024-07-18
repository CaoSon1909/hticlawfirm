import React from "react";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";
import PartOneHomePage from "../components/part1-homepage/PartOneHomePage";
import PartTwoHomePage from "../components/part2-homepage/PartTwoHomePage";
import PartThreeHomePage from "../components/part3-homepage/ActivitiesComponent";
import PartFourHomePage from "../components/part4-homepage/PartFourHomePage";
import PartFiveHomePage from "../components/part5-homepage/PartFiveHomePage";

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
    </>
  );
};

export default HomePage;
