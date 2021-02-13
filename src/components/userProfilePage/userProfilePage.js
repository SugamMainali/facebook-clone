import classes from "./userPofilePage.module.css";
import React from "react";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import UserProfileDisplay from "../userProfileDisplay/userProfileDisplay";

const userProfilePage = () => {
  return (
    <React.Fragment>
      <div className={classes.NavBar}>
        <NavigationItems />
      </div>
      <UserProfileDisplay />
    </React.Fragment>
  );
};

export default userProfilePage;
