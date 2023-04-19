import React from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import classes from "./WordDisplay.module.css";

const WordDisplay = (props) => {
  return (
    <section className="container">
      <div className={classes.wordContainer}>
        {props.randomWord.map((letter, index) => {
          const isGuess = props.guessedLetters.includes(letter);
          return (
            <span className={classes.letter} key={index}>
              {isGuess ? letter : "_"}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default WordDisplay;
