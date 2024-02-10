import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-center">
        <li><a href="#home">Home</a></li>
        <li><a href="#biography">Biography</a></li>
        <li><a href="#literature">Literature</a></li>
        <li><a href="#interview">Interview</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
