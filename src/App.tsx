import React, { useState, useEffect } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./logic/Board";
import { Player } from "./logic/Player";
import { Colors } from "./logic/Colors";
import Timer from "./components/Timer";

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(currentPlayer);
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addElements();
    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  return (
    <div className="app">
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <Timer restart={restart} currentPlayer={currentPlayer} />
    </div>
  );
};

export default App;
