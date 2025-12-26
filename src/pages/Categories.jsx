import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { filterByCategory } from "../services/mealApi";
import { getFavorites, toggleFavorite } from "../utils/storage";
import RecipeCard from "../components/RecipeCard";

export default function CategoryRecipes() {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState(getFavorites());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      const meals = await filterByCategory(category);
      setRecipes(meals);
      setLoading(false);
    };
    
    if (category) {
      fetchRecipes();
    }
  }, [category]);

  const handleToggleFavorite = (meal) => {
    toggleFavorite(meal);
    setFavorites(getFavorites());
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-4 text-center">
        <div className="text-orange-500 text-xl">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Loading recipes...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Link to="/categories" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mb-6">
        <i className="fas fa-arrow-left"></i> Back to Categories
      </Link>

      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent mb-2">
          {category} Recipes
        </h1>
        <p className="text-gray-600">{recipes.length} recipes found</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
            onToggleFavorite={() => handleToggleFavorite(recipe)}
          />
        ))}
      </div>

      {recipes.length === 0 && (
        <p className="text-gray-500 text-center">No recipes found in this category.</p>
      )}
    </div>
  );
}
