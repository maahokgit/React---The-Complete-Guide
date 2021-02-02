import React from "react";
import style from "./BurgerIngredient.module.css";

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={style.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={style.BreadTop}>
          <div className={style.Seeds1}></div>
          <div className={style.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      <div className={style.Meat}></div>;
      break;
    case "cheese":
      <div className={style.Cheese}></div>;
      break;
    case "salad":
      <div className={style.Salad}></div>;
      break;
    case "bacon":
      <div className={style.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
