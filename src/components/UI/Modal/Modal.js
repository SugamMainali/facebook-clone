import classes from "./Modal.module.css";

import React, { Component } from "react";
import Backdrop from "../Backdrop/Backdrop";

export class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.show ? <Backdrop cancelVal={this.props.cancelVal} /> : null}
        <div
          className={classes.modal}
          style={{
            trasnform: this.props.show ? "traslateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
            display: this.props.show ? "block" : "none",
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
