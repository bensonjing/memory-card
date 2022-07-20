import React, { useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const handleClick = (cardName) => {
    if (!clickedCards.includes(cardName)) {
      setScore(score + 1);
      setClickedCards([cardName, ...clickedCards]);
    } else {
      if (highestScore < score) {
        setHighestScore(score);
      }
      setScore(0);
      setClickedCards([]);
    }
  };

  return (
    <>
      <Header score={score} highestScore={highestScore} />
      <GameBoard
        score={score}
        highestScore={highestScore}
        handleClick={handleClick}
      />
    </>
  );
}

export default App;
