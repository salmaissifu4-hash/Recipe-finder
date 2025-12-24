import React from "react";
import { addShoppingItem } from "../utils/storage";

export default function RecipeModal({ meal, onClose }) {
  const handleAddToShoppingList = () => {
    addShoppingItem(meal.strMeal);
    onClose();
  };

  return (
    <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          ✖
        </button>
        <h2 className="text-lg font-bold mb-2">{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded mb-4" />
        <button
          onClick={handleAddToShoppingList}
          className="block w-full bg-green-500 text-white text-center py-2 mt-4 rounded"
        >
          Add to Shopping List
        </button>
      </div>
    </div>
  );
}
