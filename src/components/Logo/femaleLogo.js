import React from "react";
import femaleLog from "../../assets/images/female.jpg";
import classes from "./Logo.module.css";

const femaleLogo = (props) => (
  <div className={classes.LogoProfile}>
    <img src={femaleLog} alt="Female Profile" />
  </div>
);

export default femaleLogo;
