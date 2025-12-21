import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    const html = document.documentElement;
    const body = document.body;
    
    if (isDark) {
      html.classList.add("dark");
      body.style.background = "linear-gradient(135deg, #111827 0%, #1f2937 50%, #000000 100%)";
    } else {
      html.classList.remove("dark");
      body.style.background = "linear-gradient(135deg, #f9fafb 0%, #f8fafc 50%, #f3f4f6 100%)";
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
