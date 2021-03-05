import React from "react";

import Style from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={Style.NavigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
