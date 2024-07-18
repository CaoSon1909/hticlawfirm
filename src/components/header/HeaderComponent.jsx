import React from "react";
import ContactHeaderElement from "../elements/ContactHeaderElement";
import MultiLanguageElement from "../elements/MultiLanguageElement";
import "./styles.scss";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="left-side">
        <img
          src="/logo/logo-htic.svg"
          alt="Logo HTIC"
          width="144"
          height="40"
        />
      </div>
      <div className="right-side">
        <div className="contact-header">
          <ContactHeaderElement />
        </div>
        <div className="multi-language">
          <MultiLanguageElement />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
