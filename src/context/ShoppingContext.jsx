import React, { createContext, useContext, useState } from "react";

export const ShoppingContext = createContext();

// Custom hook to use the Shopping context
export const useShopping = () => {
  return useContext(ShoppingContext);
};

export const ShoppingProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState(() => {
    const saved = localStorage.getItem("shoppingList");
    return saved ? JSON.parse(saved) : [];
  });

  const addIngredient = (ingredient) => {
    const updatedList = [...shoppingList, ingredient];
    setShoppingList(updatedList);
    localStorage.setItem("shoppingList", JSON.stringify(updatedList));
  };

  const removeIngredient = (ingredient) => {
    const updatedList = shoppingList.filter((item) => item !== ingredient);
    setShoppingList(updatedList);
    localStorage.setItem("shoppingList", JSON.stringify(updatedList));
  };

  const addItems = (items) => {
    if (!Array.isArray(items)) return;
    const updatedList = [...shoppingList, ...items];
    setShoppingList(updatedList);
    localStorage.setItem("shoppingList", JSON.stringify(updatedList));
  };

  return (
    <ShoppingContext.Provider value={{ shoppingList, addIngredient, removeIngredient, addItems }}>
      {children}
    </ShoppingContext.Provider>
  );
};