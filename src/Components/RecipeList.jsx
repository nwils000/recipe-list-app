import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
    </div>
  );
}
