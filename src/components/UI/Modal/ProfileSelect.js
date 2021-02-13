import classes from "./ProfileSelect.module.css";
import React, { Component } from "react";
import Backdrop from "../Backdrop/Backdrop";

export class ProfileSelect extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.showVal ? (
          <Backdrop
            BackdropDesing={classes.ProfileBackdrop}
            cancelVal={this.props.cancelVal}
          />
        ) : null}
        <div
          className={classes.container}
          style={{
            trasnform: this.props.showVal
              ? "traslateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.showVal ? "1" : "0",
            display: this.props.showVal ? "block" : "none",
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileSelect;
