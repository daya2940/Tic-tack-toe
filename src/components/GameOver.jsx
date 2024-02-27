import React from "react";

const GameOver = ({ winner, setGameTurns }) => {
  return (
    <div id="game-over">
      {winner ? <h2>Game Over !</h2> : <h2>Game Draw</h2>}
      {winner && <p>{winner} won!</p>}
      <p>
        <button onClick={() => setGameTurns([])}>Rematch !</button>
      </p>
    </div>
  );
};

export default GameOver;
