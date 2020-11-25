import React from "react";
import BoardsList from "./boards-list/BoardsList";
import "./Boards.scss";
import BoardsHeader from "./boards-header/BoardsHeader";

const Boards = () => {
  return (
    <div className="boards__wrapper">
      <BoardsHeader />
      <BoardsList />
    </div>
  );
};

export default Boards;
