import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import Style from './Logo.module.css';
const logo = (props) => (
  <div className={Style.Logo}>
    <img src={burgerLogo} alt="my-burger-logo" />
  </div>
);

export default logo;
