import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const OtherServicesComponent = (props) => {
  const { data, isFlex } = props;
  return (
    <div className={isFlex ? "other-service-list-flex" : "other-service-list"}>
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
                  <Link to={`/services/${item.id}`}>
                    <div className="content-header">{item.title}</div>
                  </Link>
                  <div className="content-publish-date">{item.publishDate}</div>
                  <div className="content-paragraph">{item.paragraph}</div>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default OtherServicesComponent;
