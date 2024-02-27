import React from "react";

const Log = ({ gameTurns }) => {
  console.log(gameTurns);
  return (
    <ol id="log">
      {gameTurns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} {turn.square.row}
            {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
};

export default Log;
