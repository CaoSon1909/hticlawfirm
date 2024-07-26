import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PAGE_TYPE } from "../../constants";
import "./styles.scss";

const ServiceCardComponent = (props) => {
  const { data, pageType } = props;
  const [redirectLink, setRedirectLink] = useState("");
  useEffect(() => {
    onRedirect();
  }, []);
  const onRedirect = () => {
    if (pageType === PAGE_TYPE.NEWS) {
      setRedirectLink(`/news/${data.id}`);
    } else if (pageType === PAGE_TYPE.PROJECT) {
      setRedirectLink(`/projects/${data.id}`);
    } else {
      setRedirectLink(`/services/${data.id}`);
    }
  };
  return (
    <div className="service-card-wrapper">
      <div className="service-card-img">
        <img src="/background-image/building-image.svg" alt="building-image" />
      </div>
      <div className="service-card-content">
        <div>
          <Link to={redirectLink}>
            <h3>
              {data.title} - {data.id}
            </h3>
          </Link>
        </div>
        <div>{data.publishDate}</div>
        <div className="service-card-paragraph">
          <p>{data.paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardComponent;
