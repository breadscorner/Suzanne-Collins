import React, { useState } from "react";
import Header from "./components/header";
import { Reviews } from "./components/reviews";

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
          <h2 className="text-4xl text-center">Reviews</h2>
          <Reviews />
        </div>
        {/* Biography */}
        <div>
          <h2 className="text-4xl text-center m-4">Biography</h2>
          {/* <img></img> */}
          <p className="m-4">
            In 1991, Suzanne Collins began her professional career writing for
            children's television. She worked on the staffs of several
            Nickelodeon shows, including the Emmy-nominated hit Clarissa
            Explains it All and The Mystery Files of Shelby Woo. For preschool
            viewers, she penned multiple stories for the Emmy-nominated Little
            Bear and Oswald. She also co-wrote the Rankin/Bass Christmas
            special, Santa, Baby! with her friend, Peter Bakalian, which was
            nominated for a WGA Award in Animation. Most recently she was the
            Head Writer for Scholastic Entertainment's Clifford's Puppy Days,and
            a freelancer on Wow! Wow! Wubbzy! While working on a Kids WB show
            called Generation O! she met children's author and illustrator James
            Proimos, who talked her into giving children's books a try.
          </p>
          <p className="m-4">
            Thinking one day about Alice in Wonderland, she was struck by how
            pastoral the setting must seem to kids who, like her own, lived in
            urban surroundings. In New York City, you're much more likely to
            fall down a manhole than a rabbit hole and, if you do, you're not
            going to find a tea party. What you might find...? Well, that's the
            story of Gregor the Overlander, the first book in her five-part
            fantasy/war series, The Underland Chronicles,which became a New York
            Times bestseller. It has been sold into 21 foreign territories.
          </p>
          <p className="m-4">
            Her next series, The Hunger Games Trilogy, is an international
            bestseller. The Hunger Games has spent over six years to date on The
            New York Times bestseller list since publication in September 2008,
            and has also appeared consistently on USA Today and Publishers
            Weekly bestseller lists. It has been sold into 54 territories in 52
            languages. In 2010 Suzanne was named to the TIME 100 list as well as
            the Entertainment Weekly Entertainers of the Year list. In 2016, she
            was presented the 2016 Authors Guild Award for Distinguished Service
            to the Literary Community for exemplifying the unique power of young
            people's literature to change lives and create lifelong book lovers.
            It was the first time the Guild presented the award to a YA author.
          </p>
          <p className="m-4">
            Lionsgate released a film adaptation of THE HUNGER GAMES on March
            23, 2012, directed by Gary Ross who also shared screenplay credit
            with Suzanne and Billy Ray. It broke multiple box office records and
            went on to become the 14th highest-grossing North American release
            of all time on its way to generating nearly $700 million at the
            worldwide box office. Lionsgate released the second installment THE
            HUNGER GAMES: CATCHING FIRE worldwide on November 22, 2013, directed
            by Francis Lawrence from a screenplay by Simon Beaufoy and Michael
            DeBruyn and bringing back stars Jennifer Lawrence, Josh Hutcherson,
            Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Willow Shields,
            Paula Malcomson, Donald Sutherland, Stanley Tucci and Lenny Kravitz
            along with new cast members Philip Seymour Hoffman, Sam Claflin,
            Jena Malone and Jeffrey Wright. It was the highest-grossing domestic
            box office release of 2013 and the 10th highest-grossing domestic
            release of all time. Lionsgate released THE HUNGER GAMES: MOCKINGJAY
            – PART 1 on November 21, 2014 and THE HUNGER GAMES: MOCKINGJAY –
            PART 2 on November 20, 2015, also directed by Lawrence and welcoming
            Julianne Moore, Mahershala Ali, Natalie Dormer, and Patina Miller to
            the cast. Both screenplays were by Peter Craig and Danny Strong from
            an adaptation by Suzanne Collins. All four films were produced by
            Nina Jacobson of Color Force and Jon Kilik. The worldwide box for
            the entire franchise was nearly 3 billion.
          </p>
          <p className="m-4">
            In September 2013, Suzanne released a critically acclaimed
            autobiographical picture book, YEAR OF THE JUNGLE, illustrated by
            James Proimos. It deals with the year she was six and her father was
            deployed to Viet Nam. It has been sold into 12 territories in 11
            languages. Her first picture book, WHEN CHARLIE MCBUTTON LOST POWER,
            about a boy obsessed with computer games, was illustrated by Mike
            Lester and came out in 2005. It has been sold into 4 foreign
            territories.
          </p>
          <p className="m-4">Her books have sold over 100 million copies worldwide.</p>
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
