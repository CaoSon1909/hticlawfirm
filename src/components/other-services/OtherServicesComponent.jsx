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
                    <div className="content-header">
                      Thủ tục Đăng ký thế chấp quyền sử dụng đất, tài sản gắn
                      liền với đất
                    </div>
                  </Link>
                  <div className="content-publish-date">18/05/2022</div>
                  <div className="content-paragraph">
                    Trong những năm gần đây, nền kinh tế của Việt Nam đã phát
                    triển mạnh mẽ và vững chắc hơn, đó cũng là một trong những
                    lý do thôi thúc những nhà đầu tư trong nước mở rộng quy mô
                    kinh doanh, khám phá và đầu tư ra nước ngoài để tìm kiếm
                    nguồn lợi nhuận... Thông tư 06/2022/TT-BKHĐT ngày 10/5/2022
                    hướng dẫn Nghị định 80/2021/NĐ-CP hướng dẫn Luật hỗ trợ
                    Doanh nghiệp nhỏ và vừa (DNNVV). 1. Hỗ trợ khởi nghiệp sáng
                    tạo Theo đó, cơ quan, tổ chức hỗ trợ DNNVV...
                  </div>
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
