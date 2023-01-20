import React from "react";

export default function RecipeIngredientEdit({
  ingredient,
  handleIngredientChange,
}) {
  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={ingredient.amount}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <button>&times;</button>
    </>
  );
}
