import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";

const Home = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [featuredHealthy, setFeaturedHealthy] = useState([]);

  useEffect(() => {
    const fetchFeaturedHealthy = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
        const meals = response.data.meals || [];
        setFeaturedHealthy(meals.slice(0, 3));
      } catch (error) {
        setFeaturedHealthy([]);
      }
    };
    fetchFeaturedHealthy();
  }, []);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setRecipes([]);
      setHasSearched(false);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setHasSearched(true);
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const meals = response.data.meals || [];
      setRecipes(meals);
    } catch (error) {
      setRecipes([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="text-center mt-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 bg-clip-text text-transparent">Discover Delicious Recipes</h2>
        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Search by recipe name or ingredient</p>
      </div>
      <SearchBar searchTerm={searchQuery} setSearchTerm={setSearchQuery} onSearch={handleSearch} placeholder="Search recipes (e.g., carrot cake, chicken)..." />

      {!hasSearched && featuredHealthy.length > 0 && (
        <div className="mt-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              <i className="fas fa-heartbeat mr-2 text-green-600 dark:text-green-400"></i>
              Dietitian's Picks - Healthy Meals
            </h3>
            <Link 
              to="/healthy" 
              className="text-sm md:text-base text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-500 font-medium"
            >
              View All <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredHealthy.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={{ ...recipe, strCategory: 'Chicken' }}
                isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
                onToggleFavorite={() => toggleFavorite(recipe)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              isFavorite={favorites.some((fav) => fav.idMeal === recipe.idMeal)}
              onToggleFavorite={() => toggleFavorite(recipe)}
            />
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center col-span-3">
            {isSearching
              ? "Searching recipes..."
              : hasSearched
              ? "No recipes found."
              : "Search for recipes by name or ingredient to get started!"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;