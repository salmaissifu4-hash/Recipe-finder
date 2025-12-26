import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { ShoppingContext } from "../context/ShoppingContext";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { toggleFavorite } = useContext(FavoritesContext);
  const { addItems } = useContext(ShoppingContext);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      const recipeData = data.meals?.[0] ?? null;
      setRecipe(recipeData);


    })();
  }, [id]);

  if (!recipe) return (
    <div className="p-8 text-center">Loading...</div>
  );

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push({ ingredient, measure });
  }

  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYoutubeId(recipe.strYoutube);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <Link to="/" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-500 font-medium mb-6">
        <i className="fas fa-arrow-left"></i> Back to Recipes
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-80 lg:h-96 w-full">
          <img src={recipe.strMealThumb} className="w-full h-full object-cover" alt={recipe.strMeal} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-green-50 dark:from-gray-700 dark:to-gray-700 px-4 py-4 border-b border-gray-200 dark:border-gray-600">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
            {recipe.strMeal}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            <i className="fas fa-globe mr-1 text-orange-500"></i>{recipe.strArea} • 
            <i className="fas fa-tag ml-2 mr-1 text-green-500"></i>{recipe.strCategory}
          </p>
        </div>

        <div className="p-4 md:p-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <button 
              onClick={() => toggleFavorite(recipe)} 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2.5 rounded-full font-semibold shadow hover:shadow-lg transition text-sm whitespace-nowrap cursor-pointer hover:scale-105"
            >
              <i className="fas fa-heart mr-2"></i>Favorite
            </button>
            <button 
              onClick={() => addItems(ingredients.map(i => `${i.ingredient} ${i.measure}`))} 
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-full font-semibold shadow hover:shadow-lg transition text-sm whitespace-nowrap cursor-pointer hover:scale-105"
            >
              <i className="fas fa-shopping-cart mr-2"></i>Add to List
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-orange-50 dark:bg-gray-700 rounded-xl p-4 md:p-5">
              <h3 className="text-base md:text-lg font-bold mb-4 text-orange-700 dark:text-orange-400">
                <i className="fas fa-list-ul mr-2"></i>Ingredients
              </h3>
              <ul className="space-y-2.5">
                {ingredients.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs md:text-sm">
                    <i className="fas fa-check-circle text-orange-500 dark:text-orange-400 mt-1 flex-shrink-0 text-xs"></i>
                    <span className="text-gray-700 dark:text-gray-300 word-wrap break-words flex-1" style={{ overflowWrap: 'break-word', wordBreak: 'normal', hyphens: 'auto' }}>
                      {it.measure} {it.ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 rounded-xl p-4 md:p-5">
              <h3 className="text-base md:text-lg font-bold mb-4 text-green-700 dark:text-green-400">
                <i className="fas fa-clipboard-list mr-2"></i>Instructions
              </h3>
              <div className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-loose" style={{ overflowWrap: 'break-word', wordBreak: 'normal', whiteSpace: 'pre-wrap' }}>
                {recipe.strInstructions}
              </div>
            </div>
          </div>

          {recipe.strSource && (
            <div className="mt-6 text-center">
              <a 
                href={recipe.strSource} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition hover:scale-105"
              >
                <i className="fas fa-external-link-alt"></i>
                View Original Recipe
              </a>
            </div>
          )}

        </div>

        {youtubeId && (
          <div className="mt-4 bg-gray-50 dark:bg-gray-700 rounded-xl p-3 md:p-4">
            <h3 className="text-base md:text-lg font-bold mb-2 text-gray-800 dark:text-white">
              <i className="fas fa-video mr-2"></i>Video
            </h3>
            <div className="w-full max-w-3xl mx-auto">
              <div className="relative w-full h-0 rounded overflow-hidden" style={{paddingBottom: '56.25%'}}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded" 
                  src={`https://www.youtube.com/embed/${youtubeId}`} 
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Recipe Video"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
