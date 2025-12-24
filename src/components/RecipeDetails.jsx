import React from 'react';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <p>Loading...</p>;

  const handleAddToShoppingList = () => {
    const savedList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const updatedList = [
      ...savedList,
      ...Object.keys(recipe).filter((key) => key.startsWith('strIngredient') && recipe[key])
        .map((key) => ({
          ingredient: recipe[key],
          amount: recipe[`strMeasure${key.match(/\d+/)[0]}`],
        })),
    ];
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));
    alert('Ingredients added to shopping list!');
  };

  return (
    <div className="p-4">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-60 object-cover rounded"
      />
      <h1 className="mt-4 text-2xl font-bold">{recipe.strMeal}</h1>
      <p className="text-lg text-gray-600">{recipe.strCategory} - {recipe.strArea}</p>

      <h2 className="mt-6 text-xl font-semibold">Ingredients:</h2>
      <ul className="list-disc pl-6">
        {Object.keys(recipe).filter((key) => key.startsWith('strIngredient') && recipe[key])
          .map((key, index) => (
            <li key={index}>{recipe[key]} - {recipe[`strMeasure${key.match(/\d+/)[0]}`]}</li>
        ))}
      </ul>

      <button
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded shadow"
        onClick={handleAddToShoppingList}
      >
        Add Ingredients to Shopping List
      </button>

      {recipe.strYoutube && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Video Tutorial:</h2>
          <iframe
            className="mt-4 w-full rounded"
            height="315"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split('v=')[1]}`}
            title="YouTube tutorial"
          />
        </div>
      )}

      {recipe.strSource && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Learn More:</h2>
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Original Recipe Source
          </a>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;