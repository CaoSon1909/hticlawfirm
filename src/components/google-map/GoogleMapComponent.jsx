import React from "react";

const heading = {
  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "700",
  lineHeight: "18.75px",
  textAlign: "left",
  color: "white",
  marginTop: "38px",
  marginBottom: "18px",
  textAlign: "center",
};

const GoogleMapComponent = (props) => {
  const { width, height, isContactPage } = props;
  return (
    <div className="google-map-code">
      {isContactPage ? <div style={heading}>BẢN ĐỒ ĐƯỜNG ĐI</div> : <></>}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.0460928527623!2d106.73683022573967!3d10.714018125357956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175254456fdb369%3A0x16f267ad1d5d2548!2zNDRtIEhvw6BuZyBRdeG7kWMgVmnhu4d0LCBQaMO6IE3hu7ksIFF14bqtbiA3LCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1721378538677!5m2!1sen!2sus"
        width={width}
        height={height}
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
