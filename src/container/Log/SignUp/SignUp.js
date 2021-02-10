import React, { Component } from "react";
import Input from "../../../components/Input/Input";
import { connect } from "react-redux";
import * as action from "../../../store/action/index";
import classes from "./SignUp.module.css";
import { checkValidity } from "../../../shared/utility";
import { GrClose } from "react-icons/gr";
import userDetail from "../../userDetail/userDetail";

class SignUp extends Component {
  state = {
    userDetails: {
      firstName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Name",
        },
        value: "",
        validation: {
          isRequired: true,
        },
        valid: false,
        touched: false,
      },
      SurName: {
        elementType: "input",
        elementConfig: {
          type: "input",
          placeholder: "Sur Name",
        },
        value: "",
        validation: {
          isRequired: true,
        },
        valid: false,
        touched: false,
      },
      EmailName: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail",
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
          placeholder: "password",
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
      Dob: {
        elementType: "select",
        elementConfig: {
          year: [
            {
              value: "2020",
              displayValue: "2020",
            },
            {
              value: "2019",
              displayValue: "2019",
            },
            {
              value: "2018",
              displayValue: "2018",
            },
            {
              value: "2017",
              displayValue: "2017",
            },
            {
              value: "2016",
              displayValue: "2016",
            },
            {
              value: "2015",
              displayValue: "2015",
            },
            {
              value: "2014",
              displayValue: "2014",
            },
          ],
          moth: [
            {
              value: "1",
              displayValue: "Jan",
            },
            {
              value: "2",
              displayValue: "Feb",
            },
            {
              value: "3",
              displayValue: "Mar",
            },
            {
              value: "4",
              displayValue: "Apr",
            },
            {
              value: "5",
              displayValue: "May",
            },
            {
              value: "6",
              displayValue: "Jun",
            },
            {
              value: "7",
              displayValue: "July",
            },
            {
              value: "8",
              displayValue: "Aug",
            },
            {
              value: "9",
              displayValue: "Sep",
            },
          ],
          days: [
            {
              value: "1",
              displayValue: "1",
            },
            {
              value: "2",
              displayValue: "2",
            },
            {
              value: "3",
              displayValue: "3",
            },
            {
              value: "4",
              displayValue: "4",
            },
            {
              value: "5",
              displayValue: "5",
            },
            {
              value: "6",
              displayValue: "6",
            },
            {
              value: "7",
              displayValue: "7",
            },
            {
              value: "8",
              displayValue: "8",
            },
            {
              value: "9",
              displayValue: "9",
            },
            {
              value: "10",
              displayValue: "10",
            },
          ],
        },
        validation: {
          isRequired: true,
        },
        valid: false,
        touched: false,
        valueDay: "",
        valueMont: "",
        valueYear: "",
      },
      Gender: {
        elementType: "radio",
        elementConfig: {
          type: "radio",
          name: "gender",
          genderval: [
            {
              type: "Female",
            },
            { type: "Male" },
            {
              type: "Custom",
            },
          ],
        },
        value: "",
        validation: {
          isRequired: true,
        },
        valid: false,
        touched: false,
      },
    },
  };

  inputChangeHanlderDob = (event, Dob, dob) => {
    console.log(dob, event.target.value);
    let userDetailCopyIndiDob = { ...this.state.userDetails };
    if (dob === "days") {
      userDetailCopyIndiDob.Dob.valueDay = event.target.value;
      this.setState({
        userDetails: userDetailCopyIndiDob,
      });
    }

    if (dob === "year") {
      userDetailCopyIndiDob.Dob.valueYear = event.target.value;
      this.setState({
        userDetails: userDetailCopyIndiDob,
      });
    }

    if (dob === "moth") {
      userDetailCopyIndiDob.Dob.valueMont = event.target.value;
      this.setState({
        userDetails: userDetailCopyIndiDob,
      });
    }
    console.log(this.state);
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

  authSignUpHandler = (event) => {
    event.preventDefault();
    const details = {};
    for (let key in this.state.userDetails) {
      details[key] = this.state.userDetails[key].value;
    }
    console.log("sab ko detail  " + this.state.userDetails);
    console.log("sab ko details ma k xa  " + details);

    const userDetail = {
      userDetails: details,
      dob: new Date(
        this.state.userDetails.Dob.valueYear,
        this.state.userDetails.Dob.valueMont,
        this.state.userDetails.Dob.valueDay
      ),
    };
    console.log(JSON.stringify(userDetail));

    this.props.onAuthSignUp(
      this.state.userDetails.EmailName.value,
      this.state.userDetails.Password.value,
      userDetail
    );
  };

  render() {
    let allValues = [];
    for (let discription in this.state.userDetails) {
      allValues.push({
        ctr: this.state.userDetails[discription],
        id: discription,
      });
    }
    return (
      <div className={classes.continer}>
        <div className={classes.top}>
          <div className={classes.topLeft}>
            <div className={classes.title}>Sign Up</div>
            <div className={classes.disp}>It's quick and easy.</div>
          </div>
          <div className={classes.topRight}>
            <GrClose color="red" />
          </div>
        </div>
        <hr></hr>
        <div className={classes.FormFill}>
          <form
            onSubmit={(e) => this.authSignUpHandler(e)}
            className={classes.Form}
          >
            {allValues.map((val) => {
              return (
                <div className={classes.InputAll}>
                  <Input
                    classNameSelf={classes.signUp}
                    key={val.id}
                    validity={val.ctr.valid}
                    touched={val.ctr.touched}
                    inputChangeForDob={this.inputChangeHanlderDob}
                    inputChange={(event) =>
                      this.inputChangeHanlder(event, val.id)
                    }
                    val={val.ctr.value}
                    inputType={val.ctr.elementType}
                    elementConfig={val.ctr.elementConfig}
                  />
                </div>
              );
            })}
            <div className={classes.Para}>
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </div>
            <button className={classes.SingUp} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthSignUp: (email, password, userDetail) =>
      dispatch(action.authSign(email, password, userDetail)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
