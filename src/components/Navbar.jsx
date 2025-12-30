import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <>
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-green-600 dark:from-orange-700 dark:via-orange-800 dark:to-green-800 text-white py-5 mb-8 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between md:justify-center gap-2 mb-0 md:mb-6">
            {/* Hamburger Menu Button - Mobile Only */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍴</span>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Recipe Finder</h1>
            </div>

            {/* Theme Toggle - Mobile */}
            <button 
              onClick={toggleTheme}
              className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition"
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center gap-4 md:gap-8 lg:gap-12 flex-wrap">
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

      {/* Mobile Sidebar Menu */}
      {/* Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-orange-500 via-orange-600 to-green-600 dark:from-orange-700 dark:via-orange-800 dark:to-green-800 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍴</span>
              <h2 className="text-xl font-bold">Menu</h2>
            </div>
            <button 
              onClick={closeMenu}
              className="text-white p-2 hover:bg-white/20 rounded-lg transition"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <nav className="flex-1 py-4">
            <Link 
              className="flex items-center gap-3 px-6 py-4 hover:bg-white/20 transition" 
              to="/" 
              onClick={closeMenu}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="fas fa-home text-xl w-6" style={{ color: 'white' }}></i>
              <span className="text-base font-medium">Home</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-4 hover:bg-white/20 transition" 
              to="/healthy" 
              onClick={closeMenu}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="fas fa-heartbeat text-xl w-6" style={{ color: 'white' }}></i>
              <span className="text-base font-medium">Healthy Meals</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-4 hover:bg-white/20 transition" 
              to="/favorites" 
              onClick={closeMenu}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="fas fa-heart text-xl w-6" style={{ color: 'white' }}></i>
              <span className="text-base font-medium">Favorites</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-4 hover:bg-white/20 transition" 
              to="/categories" 
              onClick={closeMenu}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="fas fa-th-large text-xl w-6" style={{ color: 'white' }}></i>
              <span className="text-base font-medium">Categories</span>
            </Link>
            <Link 
              className="flex items-center gap-3 px-6 py-4 hover:bg-white/20 transition" 
              to="/shopping-list" 
              onClick={closeMenu}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <i className="fas fa-shopping-cart text-xl w-6" style={{ color: 'white' }}></i>
              <span className="text-base font-medium">Shopping List</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;