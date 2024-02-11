import React from "react";
import Navbar from "./navbar";
import darkLogo from "../images/suzanne-collins-high-resolution-logo-white-transparent.png";
import lightLogo from "../images/suzanne-collins-high-resolution-logo-black-transparent.png";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="flex justify-between items-center">
      {/* Logo */}
      <div className="m-4 w-[200px] h-auto relative">
        <img src={isDarkMode ? darkLogo : lightLogo} alt="Logo" />
      </div>
      <div className="ml-auto mr-4">
        {/* Dark mode button */}
        <button
          className="absolute top-0 right-0 mt-4 mr-4"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
