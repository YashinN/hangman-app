import React, { useState, useEffect } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import WordDisplay from "./components/WordDisplay";
import Hangman from "./components/Hangman";
import HangmanHeader from "./components/HangmanHeader";
import EndGame from "./components/EndGame";

function App() {
  const randomWords = require("random-words");
  const [randomWord, setRandomWord] = useState(randomWords().split(""));
  const [guesses, setGuesses] = useState([]);
  const [numIncorrect, setNumIncorrect] = useState(0);
  const [isWin, setIsWin] = useState();

  console.log(randomWord);

  const countIncorrect = (letter) => {
    if (!randomWord.includes(letter)) {
      setNumIncorrect((prevIncorrect) => prevIncorrect + 1);
    }
  };

  const checkWin = () => {
    let results = randomWord.filter((letter) => guesses.includes(letter));
    if (results.length === randomWord.length) {
      setIsWin(true);
    }
  };

  const checkGameOver = () => {
    if (numIncorrect === 6) {
      setIsWin(false);
    }
  };

  const getGuessHandler = (letter) => {
    countIncorrect(letter);
    setGuesses([...guesses, letter]);
  };

  useEffect(() => {
    setTimeout(() => {
      checkWin();
    }, 100);
  });

  useEffect(() => {
    setTimeout(() => {
      checkGameOver();
    }, 100);
  });

  const reset = () => {
    setRandomWord(randomWords().split(""));
    setGuesses([]);
    setIsWin(null);
    setNumIncorrect(0);
  };

  return (
    <div>
      {isWin && (
        <EndGame
          winState={isWin}
          data={{ word: randomWord, outcome: "Win!", message: "saved!" }}
          onReset={reset}
        />
      )}
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
