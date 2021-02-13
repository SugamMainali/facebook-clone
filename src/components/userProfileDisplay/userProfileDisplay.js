import classes from "./userProfileDisplay.module.css";
import React from "react";
import UserProfile from "../../container/userProfile/userProfile";
import CoverPhoto from "../../container/userProfile/CoverPhoto/CoverPhoto";

const userProfileDisplay = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.coverPhoto}>
        <CoverPhoto />
      </div>
      <div className={classes.profile}>
        <UserProfile />
      </div>
    </div>
  );
};

export default userProfileDisplay;
