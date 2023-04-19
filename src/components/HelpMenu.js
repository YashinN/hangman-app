import React, { useState } from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import classes from "./HelpMenu.module.css";

const HelpMenu = (props) => {
  return (
    <div
      className={`${classes.backdrop} ${classes.active}`}
      onClick={props.offHelp}
    >
      <div className={`container ${classes.menuContainer}`}>
        <div
          className={`container mb-4 ${classes.transitionContainer} ${classes.header}`}
        >
          <h2>How The Game Works</h2>
          <button
            type="button"
            className={classes.btnClose}
            onClick={props.offHelp}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className={`container px-0 ${classes.transitionContainer}`}>
          <ol className={classes.ruleList}>
            <li>
              A radom word will be generated and displayed as blanks ' _ _ _'.
            </li>
            <li>Using the keypad provided your job is to guess the word.</li>
            <li>Each correct letter guessed, fills in a blank ' C _ _ '.</li>
            <li>Each in correct guess is counted against you.</li>
            <li>You have a total of 6 incorrect guesses</li>
            <li>If you reach 6 incorrect guesses , you Loose!</li>
            <li>If you guess the word by filling in the blanks you Win!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HelpMenu;
