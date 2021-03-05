import React from "react";
import { NavLink } from "react-router-dom";

import Style from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={Style.NavigationItem}>
    <NavLink exact to={props.link} activeClassName={Style.active}>{props.children}</NavLink>
  </li>
);

export default navigationItem;
