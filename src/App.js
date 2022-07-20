import React, { useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <>
      <Header score={score} highestScore={highestScore} />
      <GameBoard />
    </>
  );
}

export default App;
