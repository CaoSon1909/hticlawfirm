import { Typography } from "antd";
import React from "react";
import "./styles.scss";

const SectionHeadingComponent = ({ content, styleProp, isWhite }) => {
  return (
    <div style={{ ...styleProp }} className="section-heading-wrapper">
      <Typography.Paragraph>
        <blockquote>
          <div
            className="blockquote-content"
            style={isWhite ? { color: "white" } : {}}
          >
            {content}
          </div>
        </blockquote>
      </Typography.Paragraph>
    </div>
  );
};

export default SectionHeadingComponent;
