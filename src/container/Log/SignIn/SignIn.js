import React, { Component } from "react";
import classes from "./SignIn.module.css";
import Input from "../../../components/Input/Input";
import Modal from "../../../components/UI/Modal/Modal";
import SignUp from "../SignUp/SignUp";
import { connect } from "react-redux";
import * as action from "../../../store/action/index";
import { checkValidity } from "../../../shared/utility";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    creatingAccount: false,
    userDetails: {
      EmailName: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email address or phone number",
        },
        value: "",
        validation: {
          isRequired: true,
        },
        valid: false,
        touched: false,
      },
      Password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
          autoComplete: "on",
        },
        value: "",
        validation: {
          isRequired: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  inputChangeHanlder = (event, val) => {
    let userDetailCopy = { ...this.state.userDetails };
    let userDetailCopyIndi = { ...userDetailCopy[val] };
    userDetailCopyIndi.value = event.target.value;
    userDetailCopyIndi.valid = checkValidity(
      userDetailCopyIndi.value,
      userDetailCopyIndi.validation
    );
    userDetailCopy[val] = userDetailCopyIndi;
    userDetailCopyIndi.touched = true;
    this.setState({
      userDetails: userDetailCopy,
    });
  };

  creatingAccountChange = () => {
    this.setState({
      creatingAccount: true,
    });
  };

  cancelCreatingAccount = () => {
    this.setState({
      creatingAccount: false,
    });
  };

  authSignInHandler = (event) => {
    event.preventDefault();

    this.props.onAuthSignIn(
      this.state.userDetails.EmailName.value,
      this.state.userDetails.Password.value
    );
  };

  render() {
    console.log(this.props);

    if (this.props.isAuthenticated) {
      console.log("i Have been clicked");
      this.props.history.push("/main");
    }

    let singInDetails = [];
    for (let vales in this.state.userDetails) {
      singInDetails.push({
        id: vales,
        ctr: this.state.userDetails[vales],
      });
    }
    return (
      <React.Fragment>
        <Modal
          show={this.state.creatingAccount}
          cancelVal={this.cancelCreatingAccount}
        >
          <SignUp />
        </Modal>
        <div className={classes.container}>
          <div className={classes.containerAll}>
            <div className={classes.discription}>
              <div className={classes.fb}>facebook</div>
              <div className={classes.fbDisp}>
                Facebook helps you connect and share <br />
                with the people in your life.
              </div>
            </div>
            <div className={classes.details}>
              <div className={classes.top}>
                <div className={classes.topBox}>
                  <div className={classes.topHrBox}>
                    <form onSubmit={(e) => this.authSignInHandler(e)}>
                      <div className={classes.topAllDetails}>
                        {singInDetails.map((val) => {
                          return (
                            <Input
                              classNameSelfIn={classes.signIn}
                              key={val.id}
                              validity={val.ctr.valid}
                              touched={val.ctr.touched}
                              inputChange={(event) =>
                                this.inputChangeHanlder(event, val.id)
                              }
                              val={val.ctr.value}
                              inputType={val.ctr.elementType}
                              elementConfig={val.ctr.elementConfig}
                            />
                          );
                        })}
                        <button className={classes.logIn}>Log In</button>
                      </div>
                    </form>
                    <a href="#" className={classes.ancher}>
                      Forgotten password?
                    </a>
                  </div>

                  <div className={classes.belowAllDetails}>
                    <hr></hr>
                    <button
                      onClick={this.creatingAccountChange}
                      className={classes.creatAccount}
                    >
                      Create New Account
                    </button>
                  </div>
                </div>
                <div className={classes.foot}>
                  <span>Create a Page</span> for a celebrity,band or business.
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSignIn: (email, password) =>
      dispatch(action.authSignIn(email, password)),
    onLogoutUser: () => dispatch(action.logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
