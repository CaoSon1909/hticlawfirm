import { Card, Input, List } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import ServiceCardComponent from "../service-card/ServiceCardComponent";
import ViewMoreButtonComponent from "../view-more-btn/ViewMoreButtonComponent";
import "./styles.scss";

const otherServicesData = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    return {
      id: i,
      title: "THUÊ MUA NHÀ Ở XÃ HỘI THEO LUẬT NHÀ Ở 2023",
      publishDate: "18/05/2022",
      paragraph:
        "Việc thuê mua nhà ở xã hội là một trong những chính sách hỗ trợ của Nhà nước dành cho các đối tượng có nhu cầu về nhà ở nhưng gặp khó khăn về tài chính. Hãy cùng tìm hiểu chi tiết về khái niệm này và những ai được thuê mua nhà ở xã hội theo quy định của pháp luật. 1. Nhà Ở Xã Hội Là Gì? Theo quy định tại Khoản 7 Điều 3 Luật Nhà ở số 65/2014/QH13 và Luật Nhà ở số 27/2023/QH15, nhà ở xã hội là loại nhà ở có sự hỗ trợ từ...",
    };
  });
};
const topServicesData = () => {
  return Array.from({ length: 20 }).map((_, i) => {
    return {
      id: i,
      title: `top service -  ${i}`,
    };
  });
};
const Service02Component = () => {
  const onSearch = () => {};
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [step, setStep] = useState(2);
  useEffect(() => {
    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setInitLoading(false);
    //     setData(res.results);
    //     setList(res.results);
    //   });
    setInitLoading(false);
    setData(otherServicesData().slice(0, step));
    setList(otherServicesData().slice(0, step));
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(1)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    const newData = data.concat(otherServicesData().slice(step, step + 1));
    setStep(step + 1);
    setData(newData);
    setList(newData);
    setLoading(false);
    window.dispatchEvent(new Event("resize"));
  };
  const loadMore =
    !initLoading && !loading ? (
      <ViewMoreButtonComponent onClick={onLoadMore} />
    ) : null;
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
            <List
              loading={initLoading}
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={list}
              renderItem={(item) => (
                <List.Item>
                  <ServiceCardComponent data={item} />
                </List.Item>
              )}
            />
          </div>
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
              dataSource={otherServicesData()}
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
                        <Link to={`/services/${item.id}`}>
                          <div className="content-header">
                            Thủ tục Đăng ký thế chấp quyền sử dụng đất, tài sản
                            gắn liền với đất
                          </div>
                        </Link>
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
