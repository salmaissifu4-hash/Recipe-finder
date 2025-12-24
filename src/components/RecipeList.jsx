import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  if (!recipes.length) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No recipes found 🍽️
      </p>
    );
  }

  return (
    <div className="grid gap-6 mt-10 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

