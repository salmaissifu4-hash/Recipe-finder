// Helper functions for managing the shopping list in localStorage
export const getShoppingList = () => {
  const savedList = localStorage.getItem("shoppingList");
  return savedList ? JSON.parse(savedList) : [];
};

export const saveShoppingList = (shoppingList) => {
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
};

export const addShoppingItem = (item) => {
  const shoppingList = getShoppingList();
  shoppingList.push(item);
  saveShoppingList(shoppingList);
};

// Helper functions for managing favorites in localStorage
export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (meal) => {
  const favorites = getFavorites();
  const exists = favorites.some((fav) => fav.idMeal === meal.idMeal);

  if (exists) {
    // Remove from favorites
    const updatedFavorites = favorites.filter((fav) => fav.idMeal !== meal.idMeal);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } else {
    // Add to favorites
    favorites.push(meal);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};