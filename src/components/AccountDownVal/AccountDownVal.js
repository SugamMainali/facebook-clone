import React, { useEffect } from "react";
import NavigationItem from "../Navigation/NavigationItems/NavigationItem/NavigationItem";
import { connect } from "react-redux";
import * as action from "../../store/action/index";
import { Redirect } from "react-router-dom";

const AccountDownVal = (props) => {
  const onLogOutHandler = () => {
    props.onLogoutUser();
    // console.log("object", props);
    // <Redirect to="/" />
    props.history.push("/");
  };
  return (
    <div>
      <NavigationItem>Profile</NavigationItem>
      <hr></hr>
      <div>Give Feedback</div>
      <hr></hr>
      <div>Setting & Privacy</div>
      <div>Help & support</div>
      <div>Display & accessibility</div>
      <div onClick={onLogOutHandler}>Log Out</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUser: () => dispatch(action.logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(AccountDownVal);
