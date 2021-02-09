import React from "react";
import UserDetail from "../../container/userDetail/userDetail";
import NavigationItems from "../../components/Navigation/NavigationItems/NavigationItems";

const logInedPage = (props) => {
  return (
    <div>
      <NavigationItems {...props} />
      <UserDetail />
    </div>
  );
};

export default logInedPage;
