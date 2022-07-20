import React, { useState } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <div>
      <Header score={score} highestScore={highestScore} />
      <GameBoard />
    </div>
  );
}

export default App;
