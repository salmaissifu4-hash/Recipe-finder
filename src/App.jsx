import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HealthyMeals from "./pages/HealthyMeals";
import Favorites from "./pages/Favorites";
import ShoppingList from "./pages/ShoppingList";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryRecipes from "./pages/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthy" element={<HealthyMeals />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/shopping-list" element={<ShoppingList />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:category" element={<CategoryRecipes />} />
        <Route path="/details/:id" element={<RecipeDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;