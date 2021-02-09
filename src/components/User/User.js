import React from "react";

const User = (props) => {
  return (
    <div>
      <div>{props.userDetails.firstName}</div>
      <div>{props.userDetails.SurName}</div>
    </div>
  );
};

export default User;
