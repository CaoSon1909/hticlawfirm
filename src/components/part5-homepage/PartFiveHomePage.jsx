import { Divider } from "antd";
import React from "react";
import ListBlogElement from "../elements/ListBlogElement";
import "../elements/ViewMoreLinkElement";
import ViewMoreLinkElement from "../elements/ViewMoreLinkElement";
import "./styles.scss";

const PartFiveHomePage = () => {
  return (
    <div className="part5-homepage">
      <div className="part5-heading">
        <Divider>
          <div
            style={{
              fontFamily: "Roboto",
              fontSize: "28px",
              fontWeight: "500",
              lineHeight: "49px",
              marginBottom: "5px",
            }}
          >
            Dự Án Tiêu Biểu
          </div>
        </Divider>
        <ViewMoreLinkElement className="view-more-link-part5" />
      </div>
      <div className="part5-list">
        <ListBlogElement />
      </div>
    </div>
  );
};

export default PartFiveHomePage;
