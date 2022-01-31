import React from "react";

const Logo = ({ logoUrl }) => {
  return logoUrl ? (
    <img
      width="auto"
      height="30px"
      style={{ borderRadius: "50%", marginLeft: "7px" }}
      src={logoUrl}
      alt="logo"
    />
  ) : (
    <div />
  );
};

export default Logo;
