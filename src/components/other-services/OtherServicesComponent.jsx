import { Card, List } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PAGE_TYPE } from "../../constants";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import "./styles.scss";

const OtherServicesComponent = (props) => {
  const { data, isFlex, pageType, isDetailPage } = props;
  const [className, setClassName] = useState("");
  const [redirectLink, setRedirectLink] = useState("");
  useEffect(() => {
    initializeClassName();
    onRedirect();
  }, []);
  console.log("is detail page: ", isDetailPage);
  const initializeClassName = () => {
    if (pageType === "NEWS") {
      if (isDetailPage) {
        setClassName("other-news-list-detail");
        return;
      }
      setClassName("other-news-list");
      return;
    }
    if (isFlex) {
      setClassName("other-service-list-flex");
      return;
    }
    setClassName("other-service-list");
  };
  const onRedirect = () => {
    if (pageType === PAGE_TYPE.SERVICE) {
      setRedirectLink(`/services/${data.id}`);
    }
    if (pageType === PAGE_TYPE.NEWS) {
      setRedirectLink(`/news/${data.id}`);
    }
    if (pageType === PAGE_TYPE.PROJECT) {
      setRedirectLink(`/projects/${data.id}`);
    }
  };
  return (
    <div className={className}>
      {isDetailPage ? (
        <SectionHeadingComponent
          content="Dịch vụ mới nhất"
          styleProp={{ top: "0", left: "0" }}
        />
      ) : (
        <></>
      )}
      <div className={isDetailPage ? "detail-page-list" : ""}>
        <List
          grid={
            isFlex
              ? {
                  gutter: 16,
                  column: 1,
                }
              : { gutter: 16, column: 2 }
          }
          itemLayout="vertical"
          size="small"
          pagination={{
            position: "bottom",
            align: "left",
            pageSize: isFlex ? 3 : 6,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ maxHeight: "211px" }}>
              <Card>
                <div className="service-02-card-wrapper">
                  <div className="service-02-card-image">
                    <img
                      src="/background-image/service02-img1.png"
                      alt="service02-image1"
                      width={isFlex ? 160 : 115}
                      height={isFlex ? 160 : 118}
                    />
                  </div>
                  <div className="service-02-card-content">
                    <Link to={redirectLink}>
                      <div className="content-header">{item.title}</div>
                    </Link>
                    <div className="content-publish-date">
                      {item.publishDate}
                    </div>
                    <div className="content-paragraph">{item.paragraph}</div>
                  </div>
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default OtherServicesComponent;
