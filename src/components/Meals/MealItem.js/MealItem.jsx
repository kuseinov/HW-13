import { useState } from "react";
import classes from "./MealItem.module.css";

export const MealItem = (props) => {
  const price = props.price.toFixed(2);
  const [mealsCount, setMealsCount] = useState("0");
  const [mealsPrice, setMealsPrice] = useState(0);

  const plus = () => {
    setMealsCount((mealsCount) => +mealsCount + 1);
    setMealsPrice((mealsPrice) => +mealsPrice + +price);
  };
  console.log(price);

  const minus = () => {
    if (mealsCount > 0) {
      setMealsCount((mealsCount) => +mealsCount - 1);
      setMealsPrice((mealsPrice) => +mealsPrice - +price);
    }
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes.countContainer}>
        <button className={classes.btn} onClick={plus}>
          +
        </button>
        <span className={classes.count}>{mealsCount}</span>
        <button className={classes.btn} onClick={minus}>
          -
        </button>
        <p>total: {mealsPrice}</p>
      </div>
    </li>
  );
};
