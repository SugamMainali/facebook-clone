import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../../components/User/User";
import * as action from "../../store/action/index";

class userDetail extends Component {
  state = {
    userDetail: null,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.onGettingUserDetail(token, this.props.localId);
    this.setState({
      userDetail: this.props.userDetail,
    });
  }

  render() {
    if (this.state.userDetail) {
      console.log(this.state.userDetail);
    }
    // {
    //   this.state.userDetailValues.map((val) => {
    //     console.log(val);
    //   });
    // }
    let detail = null;
    if (this.props.userDetail) {
      detail = this.props.userDetail.map((userDeta) => {
        return <User userDetails={userDeta} key={userDeta.EmailName} />;
      });
    }

    return <React.Fragment>{detail}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    userDetail: state.userDetail.userDetail,
    localId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGettingUserDetail: (token, userId) =>
      dispatch(action.userDetailGet(token, userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(userDetail);
