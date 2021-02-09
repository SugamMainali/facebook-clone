import React from "react";
import maleLog from "../../assets/images/male.jpg";
import classes from "./Logo.module.css";

const maleLogo = (props) => (
  <div className={classes.LogoProfile}>
    <img src={maleLog} alt="Male Profile" width="150px" />
  </div>
);

export default maleLogo;
