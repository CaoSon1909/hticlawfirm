import { Card, List } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SectionHeadingComponent from "../section-heading/SectionHeadingComponent";
import SpecialServiceCardComponent from "../special-service-card/SpecialServiceCardComponent";
import "./styles.scss";

const specialServiceData = [
  {
    id: 1,
    name: "Doanh nghiệp và đầu tư",
    imgSrc: "/icon/special-service-icon/doanh-nghiep-dau-tu.svg",
  },
  {
    id: 2,
    name: "Pháp lý bất động sản",
    imgSrc: "/icon/special-service-icon/phap-ly-bat-dong-san.svg",
  },
  {
    id: 3,
    name: "Thuế - Bảo hiểm",
    imgSrc: "/icon/special-service-icon/thue-bao-hiem.svg",
  },
  {
    id: 4,
    name: "Sở hữu trí tuệ",
    imgSrc: "/icon/special-service-icon/so-huu-tri-tue.svg",
  },
  {
    id: 5,
    name: "Pháp lý chứng khoán",
    imgSrc: "/icon/special-service-icon/phap-ly-chung-khoan.svg",
  },
  {
    id: 6,
    name: "Tư vấn giấy phép",
    imgSrc: "/icon/special-service-icon/tu-van-giay-phep.svg",
  },
];
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

const ServiceDetailComponent = (props) => {
  const { id } = props;
  return (
    <div className="service-detail-component-wrapper">
      <div className="detail-leftside-wrapper">
        <h1>{`Giấy Phép Kinh Doanh Lữ Hành Quốc Tế - ${id}`}</h1>
        <p>18/05/2022</p>
        <img src="/background-image/travel-img.svg" />
        <p>
          Sau khi được cấp Giấy chứng nhận đăng ký kinh doanh, doanh nghiệp muốn
          hoạt động kinh doanh lữ hành cần phải thực hiện thủ tục cấp giấy phép
          kinh doanh lữ hành quốc tế.
        </p>
        <p>
          Để cấp giấy phép kinh doanh lữ hành quốc tế, doanh nghiệp cần phải đáp
          ứng một số điều kiện nhất định.
        </p>
        <h2>THỦ TỤC CẤP PHÉP</h2>
        <h3>1. ĐIỀU KIỆN CẤP PHÉP</h3>
        <ul>
          <li>
            Doanh nghiệp phải thành lập theo quy định của pháp luật về doanh
            nghiệp.
          </li>
          <li>
            Người phụ trách điều hành lữ hành phải có chứng chỉ nghiệp vụ lữ
            hành.
          </li>
          <li>Địa điểm kinh doanh phải đáp ứng các quy định của pháp luật.</li>
        </ul>

        <h3>2. THỦ TỤC CẤP PHÉP</h3>
        <ul>
          <li>Đơn xin cấp giấy phép.</li>
          <li>Giấy chứng nhận đăng ký kinh doanh.</li>
          <li>Chứng chỉ nghiệp vụ lữ hành.</li>
        </ul>
      </div>
      <div className="detail-rightside-wrapper">
        <div className="newest-services">
          <SectionHeadingComponent
            content="Dịch vụ mới nhất"
            styleProp={{ top: "0", left: "0" }}
          />
          <div className="newsest-services-list">
            <List
              grid={{
                gutter: 3,
                column: 1,
              }}
              itemLayout="vertical"
              size="small"
              pagination={{
                position: "bottom",
                align: "left",
                pageSize: 2,
              }}
              dataSource={otherServicesData()}
              renderItem={(item) => (
                <List.Item>
                  <Card>
                    <div className="newest-service-card-wrapper">
                      <div className="newest-service-card-img">
                        <img
                          src="/background-image/tax-64x64.svg"
                          alt="tax-64x64"
                        />
                      </div>
                      <div className="newest-service-card-content">
                        <Link to={`/services/${item.id}`}>
                          <div className="newest-service-card-title">
                            Thủ tục Đăng ký thế chấp quyền sử dụng đất, tài sản
                            gắn liền với đất
                          </div>
                        </Link>
                        <div className="newest-service-card-date">
                          18/05/2022
                        </div>
                        <div className="newest-service-card-paragraph">
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
        <div className="special-services">
          <SectionHeadingComponent
            content="Các dịch vụ tiêu biểu"
            styleProp={{ top: "0", left: "0" }}
          />
          <div className="special-services-outline">
            {specialServiceData.map((item) => (
              <SpecialServiceCardComponent data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailComponent;
