import { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";

export default function Recipe({
  id,
  name,
  cookTime,
  servings,
  instructions,
  ingredients,
}) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
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
      <div>
        <button className="button button-edit" onClick={handleRecipeSelect(id)}>
          Edit
        </button>
        <button
          className="button button-delete"
          onClick={() => handleRecipeDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
