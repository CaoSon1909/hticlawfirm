import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const ServiceCardComponent = (props) => {
  const { data, isNewsPage } = props;
  return (
    <div className="service-card-wrapper">
      <div className="service-card-img">
        <img src="/background-image/building-image.svg" alt="building-image" />
      </div>
      <div className="service-card-content">
        <div>
          <Link to={isNewsPage ? `/news/${data.id}` : `/services/${data.id}`}>
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
