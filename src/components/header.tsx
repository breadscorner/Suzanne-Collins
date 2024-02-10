import React from 'react';
import Navbar from './navbar';
import darkLogo from '../images/suzanne-collins-high-resolution-logo-white-transparent.png';
import lightLogo from '../images/suzanne-collins-high-resolution-logo-black-transparent.png';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      {/* Toggle button */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Logo */}
      <img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" />
      
      <Navbar />
    </header>
  );
};

export default Header;
