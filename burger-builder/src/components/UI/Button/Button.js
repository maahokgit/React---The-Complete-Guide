import React from "react";
import Style from "./Button.module.css";

const button = (props) => (
  <button
    className={[Style.Button, Style[props.btnType]].join(" ")}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default button;
