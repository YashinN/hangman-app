import React from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import classes from "./WordDisplay.module.css";

const WordDisplay = (props) => {
  return (
    <section className="container">
      <div className={classes.wordContainer}>
        {/* receives random word as prop displays letter of random word if it matches with one from the guesses array. */}
        {props.randomWord.map((letter, index) => {
          // varibale to check if letter should display or not.
          const isGuess = props.guessedLetters.includes(letter);
          return (
            <span className={classes.letter} key={index}>
              {/* if guessed letter then it will be diplayed else a blank is shown */}
              {isGuess ? letter : "_"}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default WordDisplay;
