import React, { useState } from "react";
import classes from "./Hangman.module.css";
import "bootswatch/dist/vapor/bootstrap.min.css";
import HelpMenu from "./HelpMenu";

// hangman state image imports
import img1 from "../images/0.jpg";
import img2 from "../images/1.jpg";
import img3 from "../images/2.jpg";
import img4 from "../images/3.jpg";
import img5 from "../images/4.jpg";
import img6 from "../images/5.jpg";
import img7 from "../images/6.jpg";

const Hangman = (props) => {
  // stores images in an array.
  const stateImages = [img1, img2, img3, img4, img5, img6, img7];
  // state used to show or hide help menu.
  const [isHelp, setIsHelp] = useState(false);

  // checks if help button is pressed.
  const helpHandlerOn = () => {
    // changes help state to display help menu.
    setIsHelp(true);
  };

  // checks if user clicks on close help menu button or clicks on backdrop.
  const helpHandlerOff = (e) => {
    // checks if backdrop is clicked.
    if (e.target.id === "close") {
      // if clicked closes menu
      setIsHelp(false);
    }
  };

  return (
    <>
      {/* shows or hides help menu component*/}
      {isHelp && (
        <HelpMenu
          onHelp={helpHandlerOn}
          offHelp={helpHandlerOff}
          isHelp={isHelp}
        />
      )}
      <section className={`container ${classes.imgContainer}`}>
        <img src={stateImages[props.guessData.numIncorrect]} alt="" />
        <div className={classes.infoContainer}>
          <h6>
            Wrong Guesses: <span>{props.guessData.numIncorrect}</span>
          </h6>
          <button
            type="button"
            className={`btn btn-secondary close ${classes.btnHelp}`}
            onClick={helpHandlerOn}
          >
            Help ?
          </button>
        </div>
      </section>
    </>
  );
};

export default Hangman;
