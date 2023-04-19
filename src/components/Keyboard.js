import React from "react";
import classes from "./Keyboard.module.css";
import "bootswatch/dist/vapor/bootstrap.min.css";

const Keyboard = (props) => {
  // values to be used as keys for keyboard.
  const keys = "abcdefghijklmnopqrstuvwxyz";
  // converts all letters into an array.
  const keysArray = keys.split("");

  // checks if keyboard button is pressed.
  const keyHandler = (event) => {
    // sets the key pressed to disabled.
    event.target.disabled = true;
    //  passes the letter of key pressed to App.js
    props.onGuess(event.target.value);
  };

  return (
    <section className="container my-5">
      <div className={`container ${classes.buttonContainer}`}>
        {/* Maps all letters from keysArray into a button. */}
        {keysArray.map((key, index) => (
          <button
            key={index}
            type="button"
            className="btn btn-primary"
            onClick={keyHandler}
            value={key}
            // checks if button should be disabled or not by checking if the key pressed exists in the guesses made.
            disabled={props.allGuesses.includes(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Keyboard;
