import React from "react";
import AboutUsBanner from "../components/about-us-page/part1/AboutUsBanner";
import ContactPageComponent from "../components/contact-page/ContactPageComponent";
import FooterComponent from "../components/footer/FooterComponent";
import HeaderComponent from "../components/header/HeaderComponent";
import NavigationComponent from "../components/navigation/NavigationComponent";

const ContactPage = () => {
  return (
    <>
      <HeaderComponent />
      <NavigationComponent />
      <AboutUsBanner heading={"Liên Hệ"} subHeading={"Contact"} />
      <ContactPageComponent />
      <FooterComponent />
    </>
  );
};

export default ContactPage;
