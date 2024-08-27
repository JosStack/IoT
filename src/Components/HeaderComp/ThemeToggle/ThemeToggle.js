import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  // State to track the theme (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the saved theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Function to handle theme toggle
  const handleToggle = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-switch">
      <input 
        className="toggle-input" 
        type="checkbox" 
        id="toggleInput" 
        checked={isDarkMode} 
        onChange={handleToggle} 
      />
      <label className="toggle-label" htmlFor="toggleInput"></label>
    </div>
  );
};

export default ThemeToggle;
