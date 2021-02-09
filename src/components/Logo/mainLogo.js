import React from "react";
import classes from "./Logo.module.css";
import facebookLogo from "../../assets/images/Facebook-logo.png";

const mainLogo = (props) => (
  <div className={classes.Logo}>
    <img src={facebookLogo} alt="Facebook Logo" />
  </div>
);

export default mainLogo;
