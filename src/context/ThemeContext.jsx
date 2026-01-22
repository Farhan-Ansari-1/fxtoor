import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Context ko create karein
const ThemeContext = createContext();

// 2. ThemeProvider component banayein jo poori app ko wrap karega
export const ThemeProvider = ({ children }) => {
  // Permanent Dark Mode: State hamesha 'dark' rahega
  const theme = 'dark';

  // Component mount hone par 'dark' class ensure karein
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Theme badalne ke liye function
  const toggleTheme = () => {};

  // Context Provider se value (theme aur toggle function) pass karein
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Ek custom hook banayein taaki context ko aasani se use kar sakein
export const useTheme = () => {
  return useContext(ThemeContext);
};