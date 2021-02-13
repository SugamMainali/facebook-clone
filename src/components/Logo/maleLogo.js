import React from "react";
import maleLog from "../../assets/images/male.jpg";
import classes from "./Logo.module.css";

const maleLogo = (props) => (
  <div className={classes.LogoProfile}>
    <img
      src={maleLog}
      alt="Male Profile"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  </div>
);

export default maleLogo;
