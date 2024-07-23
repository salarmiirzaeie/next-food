import React from "react";
import classes from "./meals-grid.module.css";
import MealsItem from "./meal-item";
interface Props {
  meals: any;
}
const MealGrid: React.FC<Props> = ({ meals }) => {
  return (
    <ul className={classes.grid}>
      {meals.map((meal: any) => (
        <MealsItem
          image={meal.image}
          id={meal.id}
          title={meal.title}
          key={meal.id}
        />
      ))}
    </ul>
  );
};

export default MealGrid;
