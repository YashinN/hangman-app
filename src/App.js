import React, { useState, useEffect } from "react";
import "./App.css";
// Components
import Keyboard from "./components/Keyboard";
import WordDisplay from "./components/WordDisplay";
import Hangman from "./components/Hangman";
import HangmanHeader from "./components/HangmanHeader";
import EndGame from "./components/EndGame";

function App() {
  // Gets random words from the 'random-words' module.
  const randomWords = require("random-words");
  // Initialises a random word as an array.
  const [randomWord, setRandomWord] = useState(randomWords().split(""));
  // States to control changes in game.
  // All guesses made by user stored in an array.
  const [guesses, setGuesses] = useState([]);
  const [numIncorrect, setNumIncorrect] = useState(0);
  const [isWin, setIsWin] = useState();

  // Checks if a guess is correct or not.
  const countIncorrect = (letter) => {
    // checks if a guessed letter in the guesses array does not exist.
    if (!randomWord.includes(letter)) {
      // increments number of incorrect guesses.
      setNumIncorrect((prevIncorrect) => prevIncorrect + 1);
    }
  };

  // checks if user has won game.
  const checkWin = () => {
    // checks all the letters in the random word to see if they exist in the guesses made.
    let results = randomWord.filter((letter) => guesses.includes(letter));
    // if the results array length = to random word length.
    if (results.length === randomWord.length) {
      // sets win state to true , indicates a win.
      setIsWin(true);
    }
  };

  // Ends game if 6 incorrect guesses are made.
  const checkGameOver = () => {
    if (numIncorrect === 6) {
      // sets win state to false.
      setIsWin(false);
    }
  };

  // gets guessed letter from child component WordDisplay, checks if guess correct or not and stores guess.
  const getGuessHandler = (letter) => {
    countIncorrect(letter);
    // stores the guesses in guesses state.
    setGuesses([...guesses, letter]);
  };

  // runs to check if there is a win , slight delay added so dom can be seen to visually update.
  useEffect(() => {
    setTimeout(() => {
      checkWin();
    }, 100);
  });

  // runs to chek if game is over.
  useEffect(() => {
    setTimeout(() => {
      checkGameOver();
    }, 100);
  });

  // resets all states to default when game is restarted.
  const reset = () => {
    setRandomWord(randomWords().split(""));
    setGuesses([]);
    setIsWin(null);
    setNumIncorrect(0);
  };

  return (
    <div>
      {/* Displays modal to indicate win or loss */}
      {isWin && (
        <EndGame
          winState={isWin}
          data={{ word: randomWord, outcome: "Win!", message: "saved!" }}
          onReset={reset}
        />
      )}
      {/* Displays modal to indicate win or loss */}
      {isWin === false && (
        <EndGame
          winState={isWin}
          data={{ word: randomWord, outcome: "Loose!", message: "hanged!" }}
          onReset={reset}
        />
      )}
      <HangmanHeader />
      <Hangman guessData={{ numIncorrect: numIncorrect }} />
      <WordDisplay
        randomWord={randomWord}
        guessedLetters={guesses}
      ></WordDisplay>
      <Keyboard onGuess={getGuessHandler} allGuesses={guesses} />
    </div>
  );
}

export default App;
