import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => (
  <div className={classes.Backdrop} onClick={props.cancelVal}></div>
);

export default Backdrop;
