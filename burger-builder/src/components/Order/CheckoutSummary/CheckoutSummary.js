import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import Style from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={Style.CheckoutSummary}>
      <h1>We hope it taste well!</h1>
      <div style={{ width: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTIUNE
      </Button>
    </div>
  );
};

export default checkoutSummary;
