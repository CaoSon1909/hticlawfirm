import React from "react";
import "./styles.scss";
const ViewMoreButtonComponent = ({ onClick }) => {
  return (
    <div className="view-more-btn-wrapper">
      <div className="view-more-btn">
        <a onClick={onClick}>
          <div style={{ padding: "10px" }}>XEM THÊM &gt;</div>
        </a>
      </div>
    </div>
  );
};

export default ViewMoreButtonComponent;
