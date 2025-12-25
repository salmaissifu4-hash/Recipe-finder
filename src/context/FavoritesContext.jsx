import React, { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (meal) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.idMeal === meal.idMeal)) return prev;
      return [...prev, meal];
    });
  };

  const removeFavorite = (idMeal) => {
    setFavorites((prev) => prev.filter((fav) => fav.idMeal !== idMeal));
  };

  const toggleFavorite = (meal) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.idMeal === meal.idMeal);
      if (exists) {
        return prev.filter((fav) => fav.idMeal !== meal.idMeal);
      }
      return [...prev, meal];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};