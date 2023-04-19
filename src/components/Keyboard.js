import React from "react";
import classes from "./Keyboard.module.css";
import "bootswatch/dist/vapor/bootstrap.min.css";

const Keyboard = (props) => {
  const keys = "abcdefghijklmnopqrstuvwxyz";
  const keysArray = keys.split("");

  const keyHandler = (event) => {
    event.target.disabled = true;
    props.onGuess(event.target.value);
  };

  return (
    <section className="container my-5">
      <div className={`container ${classes.buttonContainer}`}>
        {keysArray.map((key, index) => (
          <button
            key={index}
            type="button"
            className="btn btn-primary"
            onClick={keyHandler}
            value={key}
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
