import React from "react";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { name, cookTime, servings, instructions, ingredients } = props;
  return (
    <div>
      <div className="recipe">
        <div>
          <h3>{name}</h3>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Cook Time:</span>
          <span className="recipe__value">{cookTime}</span>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Servings:</span>
          <span className="recipe__value">{servings}</span>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Instructions:</span>
          <div className="recipe__value recipe__instructions recipe__value-indented">
            {instructions}
          </div>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Ingredients:</span>
          <div className="recipe__value recipe__value-indented">
            <IngredientList ingredients={ingredients} />
          </div>
        </div>
      </div>
      <div className="recipe__buttons">
        <button className="button button-edit">Edit</button>
        <button className="button button-delete">Delete</button>
      </div>
    </div>
  );
}
