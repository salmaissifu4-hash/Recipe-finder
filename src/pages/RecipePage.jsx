import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipePage() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-xl"
      />

      <h1 className="text-3xl font-serif mt-6">{meal.strMeal}</h1>
      <p className="text-gray-600">
        {meal.strCategory} • {meal.strArea}
      </p>

      <h2 className="mt-6 text-xl font-semibold">Ingredients</h2>
      <ul className="list-disc ml-6">
        {[...Array(20)].map((_, i) => {
          const ingredient = meal[`strIngredient${i + 1}`];
          const measure = meal[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>{ingredient} – {measure}</li>
          ) : null;
        })}
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Instructions</h2>
      <p className="text-gray-700 whitespace-pre-line">
        {meal.strInstructions}
      </p>

      {meal.strYoutube && (
        <iframe
          className="w-full h-64 mt-6 rounded-xl"
          src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
          allowFullScreen
        />
      )}
    </div>
  );
}
