import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 && <p>No favorites yet.</p>}
      <div className="grid grid-cols-3 gap-4">
        {favorites.map(r => (
          <img key={r.idMeal} src={r.strMealThumb} alt={r.strMeal} className="w-full rounded-md" />
        ))}
      </div>
    </div>
  );
}
