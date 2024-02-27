import { useState } from "react";
import GamePlayerBoard from "./components/GamePlayerBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WinningCombination";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = [...initialGameBoard].map((array) => [...array]); // need to check it once
  let winner = null;
  const hasDraw = gameTurns.length === 9 && !winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const handlePlayerSelection = (rowIndex, colIndex) => {
    setActivePlayer((lastActiveplayer) =>
      lastActiveplayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol={"X"}
            activePlayer={activePlayer === "X"}
          />
          <Player
            name="Player 2"
            symbol={"O"}
            activePlayer={activePlayer === "O"}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} setGameTurns={setGameTurns} />
        )}
        <GamePlayerBoard
          handlePlayerSelection={handlePlayerSelection}
          activePlayer={activePlayer}
          gameTurns={gameTurns}
          gameBoard={gameBoard}
        />
        <Log gameTurns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
