import React from "react";
import profilePic from "../../images/profilePic.jpg";
const Avatar = ({ responsive }) => {
  return (
    <div>
      <img
        width={!responsive ? "150px" : "200px"}
        height={!responsive ? "150px" : "200px"}
        style={{
          borderRadius: "50%",
          margin: "10px",
          border: "solid 2px white",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
        }}
        src={profilePic}
        alt="profilepic"
      />
    </div>
  );
};

export default Avatar;
