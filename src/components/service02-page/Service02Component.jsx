import { Input, List, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { PAGE_TYPE } from "../../constants";
import OtherServicesComponent from "../other-services/OtherServicesComponent";
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

const hotServicesData = () => {
  return Array.from({ length: 2 }).map((_, i) => {
    return {
      id: i,
      title: `Tin tức mới số ${i}`,
      publishDate: "18/05/2022",
      paragraph:
        "Việc thuê mua nhà ở xã hội là một trong những chính sách hỗ trợ của Nhà nước dành cho các đối tượng có nhu cầu về nhà ở nhưng gặp khó khăn về tài chính. Hãy cùng tìm hiểu chi tiết về khái niệm này và những ai được thuê mua nhà ở xã hội theo quy định của pháp luật. 1. Nhà Ở Xã Hội Là Gì? Theo quy định tại Khoản 7 Điều 3 Luật Nhà ở số 65/2014/QH13 và Luật Nhà ở số 27/2023/QH15, nhà ở xã hội là loại nhà ở có sự hỗ trợ từ...",
    };
  });
};
const Service02Component = (props) => {
  const { part1Heading, part2Heading, isFlex, pageType } = props;
  console.log("service02 - pageType: ", pageType);
  const onSearch = () => {};
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [step, setStep] = useState(2);
  const [newsStatus, setNewsStatus] = useState("");
  const [serviceData, setServiceData] = useState([]);
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
    setServiceData(otherServicesData());
  }, []);
  useEffect(() => {
    if (newsStatus === "hot-news") {
      setServiceData(hotServicesData());
    } else {
      setServiceData(otherServicesData());
    }
  }, [newsStatus]);
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

  const radioOptions = [
    {
      label: "Tin Tức Mới",
      value: "hot-news",
    },
    {
      label: "Các Tin Tức Khác",
      value: "other-news",
    },
  ];

  const onChangeNews = ({ target: { value } }) => {
    setNewsStatus(value);
  };
  return (
    <div className="service02-wrapper">
      <div className="service02-wrapper-content">
        <div className="service02-wrapper-content-top-services">
          <div className="top-services-heading">
            <div>
              <SectionHeadingComponent
                content={part1Heading}
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
                  <ServiceCardComponent data={item} pageType={pageType} />
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="service02-wrapper-content-other-services">
          <div className="other-service-heading">
            <div>
              <SectionHeadingComponent
                content={part2Heading}
                styleProp={{ top: "0" }}
              />
            </div>
            {isFlex ? (
              <div className="other-service-search-bar">
                <Input.Search
                  placeholder="Tìm Kiếm"
                  onSearch={onSearch}
                  enterButton
                />
              </div>
            ) : (
              <></>
            )}
            {pageType === PAGE_TYPE.NEWS ? (
              <div className="radio-btn-news-page">
                <Radio.Group
                  options={radioOptions}
                  onChange={onChangeNews}
                  value={newsStatus}
                  optionType="button"
                  buttonStyle="solid"
                />
              </div>
            ) : (
              <></>
            )}
            <OtherServicesComponent
              data={serviceData}
              isFlex={isFlex}
              pageType={pageType}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service02Component;
