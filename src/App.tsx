import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Apply theme class to document root for consistent styling
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar with theme state */}
      <Navbar 
        isDarkMode={isDarkMode} 
        onThemeToggle={toggleTheme} 
      />
      
      {/* Hero Section */}
      <Hero isDarkMode={isDarkMode} />
      
      {/* Placeholder sections for navigation testing */}
      
      
      <section 
        id="skills" 
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
       <Skills isDarkMode={isDarkMode}/>
      </section>
      
      <section 
        id="projects" 
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <Projects isDarkMode={isDarkMode}/>
      </section>


      
      
      <section 
        id="contact" 
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        <Contact isDarkMode={isDarkMode}/>
      </section>
    </div>
  );
};

export default App;