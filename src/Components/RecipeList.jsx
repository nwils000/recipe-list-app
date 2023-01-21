import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";

export default function RecipeList({ recipes }) {
  const [query, setQuery] = useState("");
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);

  useEffect(() => {
    let QueryDisplayedRecipes = recipes.filter((recipe) => {
      if (query === "") return recipes;
      if (recipe.name.toLowerCase().includes(query)) return recipe;
    });
    setDisplayedRecipes(QueryDisplayedRecipes);
  }, [query, recipes]);

  return (
    <>
      <div className="search-bar__container">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search Recipes..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="recipe-list">
        <div>
          {displayedRecipes.map((recipe) => {
            return <Recipe key={uuidv4()} {...recipe} />;
          })}
        </div>
      </div>
    </>
  );
}
