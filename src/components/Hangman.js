import React, { useState } from "react";
import classes from "./Hangman.module.css";
import "bootswatch/dist/vapor/bootstrap.min.css";
import HelpMenu from "./HelpMenu";

import img1 from "../images/0.jpg";
import img2 from "../images/1.jpg";
import img3 from "../images/2.jpg";
import img4 from "../images/3.jpg";
import img5 from "../images/4.jpg";
import img6 from "../images/5.jpg";
import img7 from "../images/6.jpg";

const Hangman = (props) => {
  const stateImages = [img1, img2, img3, img4, img5, img6, img7];

  const [isHelp, setIsHelp] = useState(false);

  const helpHandlerOn = () => {
    setIsHelp(true);
  };

  const helpHandlerOff = (e) => {
    if (!e.target.className.includes("menuContainer")) {
      setIsHelp(false);
    }
  };

  return (
    <>
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
            className={`btn btn-secondary ${classes.btnHelp}`}
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
