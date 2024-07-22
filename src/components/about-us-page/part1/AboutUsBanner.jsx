import React from "react";
import "./styles.scss";

const AboutUsBanner = ({ heading, subHeading }) => {
  return (
    <div className="part1-aboutus-wrapper">
      <img
        className="bg-img-p1"
        src="/background-image/bg-image-part1.svg"
        alt="bg-image-1"
      />
      <div className="part1-aboutus-content">
        <div style={{ textAlign: "center" }}>
          <h1>{heading}</h1>
          <p>{subHeading}</p>
        </div>
      </div>
      <img
        className="part1-aboutus-left-decoration"
        src="/icon/diamond-shape.svg"
        alt="diamond-shape"
      />
      <img
        className="part1-aboutus-right-decoration"
        src="/icon/diamond-shape.svg"
        alt="diamond-shape"
      />
    </div>
  );
};

export default AboutUsBanner;
