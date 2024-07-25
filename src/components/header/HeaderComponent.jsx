import React from "react";
import { Link } from "react-router-dom";
import ContactHeaderElement from "../homepage/elements/ContactHeaderElement";
import MultiLanguageElement from "../homepage/elements/MultiLanguageElement";
import "./styles.scss";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="left-side">
        <Link to={"/home-page"}>
          <img
            src="/logo/logo-htic.svg"
            alt="Logo HTIC"
            width="144"
            height="40"
          />
        </Link>
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
