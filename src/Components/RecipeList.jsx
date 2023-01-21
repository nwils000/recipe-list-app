import { useState, useContext, useEffect } from "react";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";
import { RecipeContext } from "./App";

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext);
  const [query, setQuery] = useState("");
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);

  useEffect(() => {
    let QueryDisplayedRecipes = recipes.filter((recipe) => {
      if (query === "") return displayedRecipes;
      if (recipe.name.toLowerCase().includes(query)) return recipe;
    });
    setDisplayedRecipes(QueryDisplayedRecipes);
  }, [query, recipes, displayedRecipes]);

  return (
    <>
      <div className="search-bar__container">
        <input
          type="text"
          placeholder="Search Recipes..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="recipe-list">
        <div>
          {displayedRecipes.map((recipe) => {
            return <Recipe key={uuidv4()} {...recipe} />;
          })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button className="button button-edit" onClick={handleRecipeAdd}>
            Add Recipe
          </button>
        </div>
      </div>
    </>
  );
}
