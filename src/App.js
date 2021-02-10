import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import * as action from "./store/action/index";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import { connect } from "react-redux";
import UserProfile from "./container/userProfile/userProfile";
import logInedPage from "./Layout/logInedPage/logInedPage";

function App(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    props.onValidTimeUser();
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  }, []);
  // const useId = localStorage.getItem("userId");
  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
          <div>loading</div>
        ) : (
          <Switch>
            <Route path="/" exact component={Layout} />
            {props.onValidatedUser ? (
              <React.Fragment>
                <Route path="/main" exact component={logInedPage} />
                <Route path="/user/:id" exact component={UserProfile} />
              </React.Fragment>
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    onValidatedUser: state.auth.token !== null,
  };
};
const mapDispatchToProps = (disptach) => {
  return {
    onValidTimeUser: () => disptach(action.authTokenValidation()),
    // onUserDetailCall: () => disptach(action.userDetailCall()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
