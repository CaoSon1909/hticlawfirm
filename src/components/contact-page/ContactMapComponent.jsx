import React from "react";
import GoogleMapComponent from "../google-map/GoogleMapComponent";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";

const ContactMapComponent = () => {
  return (
    <>
      <SectionHeadingComponent
        content={"Liên hệ theo bản đồ"}
        styleProp={{ position: "static" }}
      />
      <GoogleMapComponent width="520" height="429" isContactPage={false} />
    </>
  );
};

export default ContactMapComponent;
