import React from "react";
import bgImg from "../../assets/images/background.jpg";

const backgroundimg = () => {
  return (
    <img
      style={{ width: "100%", height: "100%", objectFit: "fill" }}
      src={bgImg}
      alt="background"
    />
  );
};

export default backgroundimg;
