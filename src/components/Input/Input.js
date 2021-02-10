import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let InputValue = null;

  let classesCollec = [classes.design];
  if (!props.validity && props.touched) {
    classesCollec.push(classes.error);
  }
  classesCollec.push(props.classNameSelf);
  classesCollec.push(props.classNameSelfIn);
  console.log("Classes for sign up" + classesCollec);

  switch (props.inputType) {
    case "input":
      InputValue = (
        <input
          className={classesCollec.join(" ")}
          value={props.value}
          {...props.elementConfig}
          onChange={props.inputChange}
        ></input>
      );
      break;
    case "textarea":
      InputValue = (
        <textarea
          value={props.value}
          {...props.elementConfig}
          onChange={props.inputChange}
        ></textarea>
      );
      break;
    case "radio":
      InputValue = (
        <React.Fragment>
          <label className={classes.gender}>Gender</label>
          <div className={classes.inputChange}>
            {props.elementConfig.genderval.map((indi) => {
              return (
                <div className={classes.labelBox}>
                  <label key={indi.type}>{indi.type}</label>
                  <input
                    className={classes.input}
                    name={props.elementConfig.name}
                    {...props.elementConfig}
                    value={indi.type}
                  ></input>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      );
      break;
    case "select":
      InputValue = (
        <React.Fragment>
          <label className={classes.DOB}>Date of birth </label>
          <div className={classes.DobCollec}>
            <select
              className={classes.selectIndi}
              onChange={(e) => props.inputChangeForDob(e, "Dob", "year")}
            >
              {props.elementConfig.year.map((val) => {
                return (
                  <option key={val.value} value={val.value}>
                    {val.displayValue}
                  </option>
                );
              })}
            </select>

            <select
              className={classes.selectIndi}
              onChange={(e) => props.inputChangeForDob(e, "Dob", "moth")}
            >
              {props.elementConfig.moth.map((val) => {
                return (
                  <option key={val.value} value={val.value}>
                    {val.displayValue}
                  </option>
                );
              })}
            </select>

            <select
              className={classes.selectIndi}
              onChange={(e) => props.inputChangeForDob(e, "Dob", "days")}
            >
              {props.elementConfig.days.map((val) => {
                return (
                  <option key={val.value} value={val.value}>
                    {val.displayValue}
                  </option>
                );
              })}
            </select>
          </div>
        </React.Fragment>
      );
      break;
  }
  return InputValue;
};

export default Input;
