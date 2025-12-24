import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe, onToggleFavorite, isFavorite }) => (
  <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow transition hover:shadow-2xl hover:-translate-y-1 ring-1 ring-gray-200 dark:ring-gray-700">
    <div className="relative">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-44 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      <button
        onClick={() => onToggleFavorite(recipe)}
        className="absolute top-3 right-3 px-3 py-2 rounded-full text-white bg-orange-500 dark:bg-orange-600 shadow hover:shadow-lg text-xs font-medium hover:bg-orange-600 dark:hover:bg-orange-700 transition"
      >
        {isFavorite ? '❤️ Saved' : '🤍 Save'}
      </button>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-bold tracking-tight text-gray-800 dark:text-white">{recipe.strMeal}</h2>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        {recipe.strCategory && (
          <span className="px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 font-medium">{recipe.strCategory}</span>
        )}
        {recipe.strArea && (
          <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-medium">{recipe.strArea}</span>
        )}
      </div>
      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/details/${recipe.idMeal}`}
          className="px-3 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white text-xs font-semibold shadow hover:shadow-lg transition"
        >
          View Details <i className="fas fa-arrow-right ml-1"></i>
        </Link>
        <span className="text-xs text-gray-400 dark:text-gray-500">#{recipe.idMeal}</span>
      </div>
    </div>
  </div>
);

export default RecipeCard;

