import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full">
      {/* Menu items for larger screens */}
      <div className="hidden md:flex justify-center text-sm uppercase">
        <ul className="flex justify-center">
          <li className="m-4">
            <a href="/">Home</a>
          </li>
          <li id="biography" className="m-4">
            <a href="#biography" onClick={handleLinkClick}>Biography</a>
          </li>
          <li id="literature" className="m-4">
            <a href="#literature" onClick={handleLinkClick}>Literature</a>
          </li>
          <li id="interview" className="m-4">
            <a href="#interview" onClick={handleLinkClick}>Interview</a>
          </li>
        </ul>
      </div>

      {/* Hamburger menu icon for small screens */}
      {!isMenuOpen && (
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 rounded-md text-gray-500 border-gray-500 hover:text-white hover:border-white"
          >
            <svg
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 5a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zm0 8a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}

      {/* Modal overlay for small screens */}
      {isMenuOpen && (
       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
       <div className="bg-white p-12 rounded-md relative">
         <button onClick={() => setIsMenuOpen(false)} className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
           <svg
             className="w-5 h-5 fill-current"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
           >
             <path
               fillRule="evenodd"
               d="M6.707 6.707a1 1 0 011.414 0L12 10.586l4.879-4.879a1 1 0 111.414 1.414L13.414 12l4.879 4.879a1 1 0 01-1.414 1.414L12 13.414l-4.879 4.879a1 1 0 01-1.414-1.414L10.586 12 5.707 7.121a1 1 0 010-1.414z"
               clipRule="evenodd"
             ></path>
           </svg>
         </button>
         <ul className="flex flex-col items-center justify-center uppercase text-sm">
           <li>
             <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
           </li>
           <li className="mt-4">
             <a href="#biography" onClick={handleLinkClick}>Biography</a>
           </li>
           <li className="mt-4">
             <a href="#literature" onClick={handleLinkClick}>Literature</a>
           </li>
           <li className="mt-4">
             <a href="#interview" onClick={handleLinkClick}>Interview</a>
           </li>
         </ul>
       </div>
     </div>
     
      )}
    </nav>
  );
};

export default Navbar;
