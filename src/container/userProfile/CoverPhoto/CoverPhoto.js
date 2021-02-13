import React, { Component } from "react";
import classes from "./CoverPhoto.module.css";
import Backgroundimg from "../../../components/Logo/backgroundimg";

class CoverPhoto extends Component {
  render() {
    return (
      <div className={classes.contaier}>
        <div className={classes.image}>
          <Backgroundimg />
        </div>
        <div className={classes.butto}>Edit CoverPhoto</div>
      </div>
    );
  }
}

export default CoverPhoto;
