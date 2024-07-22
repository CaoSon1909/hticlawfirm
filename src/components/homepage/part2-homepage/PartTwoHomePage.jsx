import React from "react";
import AboutUsComponent from "../about-us/AboutUsComponent";
import "./styles.scss";
const PartTwoHomePage = () => {
  return (
    <div className="part2-homepage">
      <img
        className="background-image-2"
        src="/background-image/bg-image-2.svg"
        alt="second-image"
      />
      <AboutUsComponent />
    </div>
  );
};

export default PartTwoHomePage;
