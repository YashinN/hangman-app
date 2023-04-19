import React from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import classes from "./EndGame.module.css";

const EndGame = (props) => {
  const playAgainHandler = () => {
    props.onReset();
  };

  return (
    <div className={classes.backdropContainer}>
      <div className={`  ${classes.endGameContainer}`}>
        <h1>You {props.data.outcome}</h1>
        <h3>Jeff has been {props.data.message}</h3>
        <h2> Your word: {props.data.word}</h2>
        <button
          onClick={playAgainHandler}
          type="button"
          className="btn btn-outline-primary"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default EndGame;
