import React from "react";

const Backdrop = (props) => (
  <div className={props.BackdropDesing} onClick={props.cancelVal}></div>
);

export default Backdrop;
