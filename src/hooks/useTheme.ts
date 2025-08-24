import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    // Update localStorage and body class when theme changes
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return { isDarkMode, toggleTheme };
};