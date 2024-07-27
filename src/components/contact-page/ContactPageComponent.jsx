import React from "react";
import ContactFormComponent from "./ContactFormComponent";
import ContactInfoComponent from "./ContactInforComponent";
import ContactMapComponent from "./ContactMapComponent";

const ContactPageComponent = () => {
  return (
    <div className="contact-page-outline">
      <div className="contact-page-wrapper">
        <div className="contact-information">
          <ContactInfoComponent />
        </div>
        <div className="contact-part2-wrapper">
          <div className="contact-form">
            <ContactFormComponent />
          </div>
          <div className="contact-map">
            <ContactMapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComponent;
