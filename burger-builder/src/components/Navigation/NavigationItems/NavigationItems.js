import React from "react";

import Style from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={Style.NavigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/louout">Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
