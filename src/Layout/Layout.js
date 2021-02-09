import React, { Component } from "react";
import SignIn from "../container/Log/SignIn/SignIn";
import Modal from "../components/UI/Modal/Modal";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <SignIn {...this.props} />
      </React.Fragment>
    );
  }
}

export default Layout;
