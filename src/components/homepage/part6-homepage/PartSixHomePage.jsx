import React from "react";
import CardBlogComponent from "../card-blog/CardBlogComponent";
import ViewMoreLinkElement from "../elements/ViewMoreLinkElement";
import "./styles.scss";

const PartSixHomePage = () => {
  return (
    <div className="part6-homepage">
      <div className="part6-wrapper">
        <div className="part6-leftside">
          <div className="part6-heading">
            Tư Vấn Pháp Lý
            <ViewMoreLinkElement url={"/consults"} />
          </div>
          <div>
            <CardBlogComponent />
          </div>
        </div>
        <div className="vertical-line"></div>
        <div className="part6-rightside">
          <div className="part6-heading">
            Góc Doanh Nghiệp Nhật Bản
            <ViewMoreLinkElement url={"/japanese-in-vietnam"} />
          </div>
          <div>
            <CardBlogComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartSixHomePage;
