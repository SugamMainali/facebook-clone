import React, { Component } from "react";
import classes from "./AccountModal.module.css";

export class AccountModal extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={classes.AccountModal}
          style={{
            transform: this.props.show ? "traslateY(0)" : "translateY(-100vh)",
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

export default AccountModal;
