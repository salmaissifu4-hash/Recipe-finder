import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function HealthyMeals() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const diverseCategories = ["Vegetarian", "Vegan", "Chicken", "Seafood", "Breakfast", "Lamb", "Side", "Beef"];
    
    const fetchHealthyRecipes = async () => {
      setLoading(true);
      try {
        const allRecipes = [];
        for (const category of diverseCategories) {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          );
          const data = await res.json();
          if (data.meals) {
            allRecipes.push(...data.meals.map(meal => ({ ...meal, strCategory: category })));
          }
        }
        setRecipes(allRecipes);
      } catch (error) {
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthyRecipes();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          <i className="fas fa-heartbeat mr-3 text-green-600 dark:text-green-400"></i>
          Healthy Meal Options
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Curated by a Registered Dietitian - Balanced, nutritious recipes from various cuisines
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <i className="fas fa-spinner fa-spin text-4xl text-orange-500 mb-4"></i>
          <p className="text-gray-600 dark:text-gray-300">Loading healthy recipes...</p>
        </div>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-300">No healthy recipes found.</p>
        </div>
      )}
    </div>
  );
}
