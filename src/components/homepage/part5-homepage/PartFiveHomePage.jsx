import { Divider } from "antd";
import React from "react";
import "../elements/ViewMoreLinkElement";
import ViewMoreLinkElement from "../elements/ViewMoreLinkElement";
import ListBlogElement from "../swiper-blog/ListBlogElement";
import "./styles.scss";

const PartFiveHomePage = () => {
  return (
    <div className="part5-homepage">
      <div className="part5-heading">
        <Divider>
          <div className="heading-content">Dự Án Tiêu Biểu</div>
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
