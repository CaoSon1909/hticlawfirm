import { Card, Input, List } from "antd";
import React from "react";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import ServiceCardComponent from "../service-card/ServiceCardComponent";
import ViewMoreButtonComponent from "../view-more-btn/ViewMoreButtonComponent";
import "./styles.scss";

const data = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    return {
      title: `Title ${i}`,
    };
  });
};
const Service02Component = () => {
  const onSearch = () => {};
  const onClick = () => {};
  console.log("data", data);
  return (
    <div className="service02-wrapper">
      <div className="service02-wrapper-content">
        <div className="service02-wrapper-content-top-services">
          <div className="top-services-heading">
            <div>
              <SectionHeadingComponent
                content={"Dịch Vụ Nổi Bật"}
                styleProp={{ top: "20px" }}
              />
            </div>
            <div className="top-services-search-bar">
              <Input.Search
                placeholder="Tìm Kiếm"
                onSearch={onSearch}
                enterButton
              />
            </div>
          </div>
          <div className="top-services">
            <ServiceCardComponent />
            <ServiceCardComponent />
          </div>
          <ViewMoreButtonComponent onClick={onClick} />
        </div>
        <div className="service02-wrapper-content-other-services">
          <div className="other-service-heading">
            <SectionHeadingComponent
              content={"Các Dịch Vụ Khác"}
              styleProp={{ top: "0" }}
            />
          </div>
          <div className="other-service-list">
            <List
              grid={{
                gutter: 16,
                column: 2,
              }}
              itemLayout="vertical"
              size="small"
              pagination={{
                position: "bottom",
                align: "left",
                pageSize: 6,
              }}
              dataSource={data()}
              renderItem={(item) => (
                <List.Item>
                  <Card>
                    <div className="service-02-card-wrapper">
                      <div className="service-02-card-image">
                        <img
                          src="/background-image/service02-img1.png"
                          alt="service02-image1"
                        />
                      </div>
                      <div className="service-02-card-content">
                        <div className="content-header">
                          Thủ tục Đăng ký thế chấp quyền sử dụng đất, tài sản
                          gắn liền với đất
                        </div>
                        <div className="content-publish-date">18/05/2022</div>
                        <div className="content-paragraph">
                          Trong những năm gần đây, nền kinh tế của Việt Nam đã
                          phát triển mạnh mẽ và vững chắc hơn, đó cũng là một
                          trong những lý do thôi thúc những nhà đầu tư trong
                          nước mở rộng quy mô kinh doanh, khám phá và đầu tư ra
                          nước ngoài để tìm kiếm nguồn lợi nhuận... Thông tư
                          06/2022/TT-BKHĐT ngày 10/5/2022 hướng dẫn Nghị định
                          80/2021/NĐ-CP hướng dẫn Luật hỗ trợ Doanh nghiệp nhỏ
                          và vừa (DNNVV). 1. Hỗ trợ khởi nghiệp sáng tạo Theo
                          đó, cơ quan, tổ chức hỗ trợ DNNVV...
                        </div>
                      </div>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service02Component;
