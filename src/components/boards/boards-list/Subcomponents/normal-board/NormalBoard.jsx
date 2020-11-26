import React from "react";
import "./NormalBoard.scss";

const NormalBoard = ({ boardTitle }) => {
  return (
    <div className="normal-board__wrapper">
      <h3 className="normal-board__title">{boardTitle}</h3>
    </div>
  );
};

export default NormalBoard;
