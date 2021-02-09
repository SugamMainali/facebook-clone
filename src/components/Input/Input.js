import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let InputValue = null;

  let classesCollec = [classes.design];
  if (!props.validity && props.touched) {
    classesCollec.push(classes.error);
  }

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
        <div onChange={props.inputChange}>
          {props.elementConfig.genderval.map((indi) => {
            return (
              <label key={indi.type}>
                {indi.type}
                <input
                  name={props.elementConfig.name}
                  {...props.elementConfig}
                  value={indi.type}
                ></input>
              </label>
            );
          })}
        </div>
      );
      break;
    case "select":
      InputValue = (
        <React.Fragment>
          <select onChange={(e) => props.inputChangeForDob(e, "Dob", "year")}>
            {props.elementConfig.year.map((val) => {
              return (
                <option key={val.value} value={val.value}>
                  {val.displayValue}
                </option>
              );
            })}
          </select>

          <select onChange={(e) => props.inputChangeForDob(e, "Dob", "moth")}>
            {props.elementConfig.moth.map((val) => {
              return (
                <option key={val.value} value={val.value}>
                  {val.displayValue}
                </option>
              );
            })}
          </select>

          <select onChange={(e) => props.inputChangeForDob(e, "Dob", "days")}>
            {props.elementConfig.days.map((val) => {
              return (
                <option key={val.value} value={val.value}>
                  {val.displayValue}
                </option>
              );
            })}
          </select>
        </React.Fragment>
      );
      break;
  }
  return InputValue;
};

export default Input;
