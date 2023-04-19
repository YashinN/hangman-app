import React from "react";
import "bootswatch/dist/vapor/bootstrap.min.css";
import classes from "./HangmanHeader.module.css";
import icon from "../icons/noose-icon.png";

const HangmanHeader = () => {
  return (
    <header className={`container ${classes.headerContainer}`}>
      <h1>
        Welcome To
        <span>
          <img src={icon} className={classes.headerIcon} alt="" />
        </span>
        Hang Man!
      </h1>
    </header>
  );
};

export default HangmanHeader;
