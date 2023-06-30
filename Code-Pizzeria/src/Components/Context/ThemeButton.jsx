import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import Button from 'react-bootstrap/Button';
import './ThemeButton.css'

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Button variant="outline-dark" className="ButtonPosition" onClick={handleThemeToggle}>
      {isDarkMode ? 'modo claro ◒' : 'modo oscuro ◓'}
      </Button>
    </div>
  );
};

export default ThemeButton;
