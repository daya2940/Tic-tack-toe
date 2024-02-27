import React from "react";

const GamePlayerBoard = ({ handlePlayerSelection, gameTurns, gameBoard }) => {
  return (
    <ol id="game-board">
      {gameBoard?.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row?.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    handlePlayerSelection(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GamePlayerBoard;
