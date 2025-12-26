import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import { ShoppingProvider } from "./context/ShoppingContext";
import { ThemeProvider } from "./context/ThemeContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FavoritesProvider>
        <ShoppingProvider>
          <App />
        </ShoppingProvider>
      </FavoritesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
