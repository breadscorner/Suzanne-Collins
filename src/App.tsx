import React, { useState } from "react";
import Header from "./components/header";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        {/* Reviews */}
        <div className="dark:border-t-white py-2">
          <h2 className="text-4xl text-center m-4">Reviews</h2>
          <p className="text-center m-4">
            "The Hunger Games is amazing." - Stephen King
          </p>
          <p className="text-center m-4">
            "I couldn't put it down." - Stephenie Meyer
          </p>
          <p className="text-center m-4">
            "I was inspired by the Hunger Games." - Veronica Roth
          </p>
        </div>
        {/* Biography */}
        <div>
          <h2 className="text-4xl text-center m-4">Biography</h2>
          {/* <img></img> */}
          <p className="text-center m-4">
            Suzanne Collins is the author of the groundbreaking Hunger Games
            trilogy for young adults: The Hunger Games, Catching Fire, and
            Mockingjay. She is also the author of the picture book Year of the
            Jungle, a Publishers Weekly best book of the year, and the New York
            Times bestselling Underland Chronicles series for middle-grade
            readers, which started with Gregor the Overlander. Suzanne lives
            with her family in Connecticut. You can find her on Twitter at
            @SuzanneCollins.
          </p>
        </div>
        {/* Literature */}
        <div></div>
        {/* Interview */}
        <div></div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
