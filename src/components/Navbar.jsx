import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-green-600 dark:from-orange-700 dark:via-orange-800 dark:to-green-800 text-white py-5 mb-8 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-3xl">🍴</span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Recipe Finder</h1>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
          <Link className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-white/20 transition font-medium" to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <i className="fas fa-home text-lg md:text-xl" style={{ color: 'white' }}></i>
            <span className="text-sm md:text-base">Home</span>
          </Link>
          <Link className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-white/20 transition font-medium" to="/healthy" style={{ color: 'white', textDecoration: 'none' }}>
            <i className="fas fa-heartbeat text-lg md:text-xl" style={{ color: 'white' }}></i>
            <span className="text-sm md:text-base">Healthy Meals</span>
          </Link>
          <Link className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-white/20 transition font-medium" to="/favorites" style={{ color: 'white', textDecoration: 'none' }}>
            <i className="fas fa-heart text-lg md:text-xl" style={{ color: 'white' }}></i>
            <span className="text-sm md:text-base">Favorites</span>
          </Link>
          <Link className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-white/20 transition font-medium" to="/categories" style={{ color: 'white', textDecoration: 'none' }}>
            <i className="fas fa-th-large text-lg md:text-xl" style={{ color: 'white' }}></i>
            <span className="text-sm md:text-base">Categories</span>
          </Link>
          <Link className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-white/20 transition font-medium" to="/shopping-list" style={{ color: 'white', textDecoration: 'none' }}>
            <i className="fas fa-shopping-cart text-lg md:text-xl" style={{ color: 'white' }}></i>
            <span className="text-sm md:text-base">Shopping List</span>
          </Link>
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-white/20 transition font-medium"
            style={{ color: 'white' }}
          >
            <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-lg md:text-xl`} style={{ color: 'white' }}></i>
            <span className="text-sm md:text-base">{isDark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;