import React from "react";
import { NavLink } from "react-router-dom";
import classs from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li className={classs.NavBar} title={props.title}>
      <NavLink
        to={props.to}
        activeClassName="my-active"
        activeStyle={{ color: "blue", borderBottomColor: "blue" }}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
