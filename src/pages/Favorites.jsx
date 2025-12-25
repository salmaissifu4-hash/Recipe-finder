import React from "react"; // Ensure React is correctly imported
import { useFavorites } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">You haven't added any favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              onToggleFavorite={() => removeFavorite(recipe.idMeal)}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;