import React, { useState } from "react";

const Player = ({ name, symbol, activePlayer }) => {
  const [showEditButton, setShowEditButton] = useState(false);
  const [editedData, setEditedData] = useState(name);

  const handleEditClick = () => {
    // setShowEditButton(!showEditButton); // we should not use this way because setstate is scheduled rather we  should be doing below way
    setShowEditButton((showEditButton) => !showEditButton);
  };

  const hanldeInputChange = (e) => {
    setEditedData(e.target.value); // This is called two way binding
  };

  let playerName = <span className="player-name">{editedData}</span>;

  if (showEditButton) {
    playerName = (
      <input
        type="text"
        required
        value={editedData}
        onChange={hanldeInputChange}
      />
    );
  }

  return (
    <li className={activePlayer ? "active" : ""}>
      <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>
          {!showEditButton ? "Edit" : "Save"}
        </button>
      </span>
    </li>
  );
};

export default Player;
