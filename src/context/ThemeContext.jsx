import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Context ko create karein
const ThemeContext = createContext();

// 2. ThemeProvider component banayein jo poori app ko wrap karega
export const ThemeProvider = ({ children }) => {
  // 'theme' state ko localStorage se initialize karein ya default 'light' rakhein
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // User ki system preference ko bhi check kar sakte hain
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });

  // Jab bhi theme badle, <html> element par class add/remove karein
  // Isse TailwindCSS ki dark mode utility (dark:bg-gray-900 etc.) kaam karegi
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Theme ko localStorage mein save karein taaki refresh karne par bhi yaad rahe
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Theme badalne ke liye function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

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