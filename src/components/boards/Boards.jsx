import React from "react";
import BoardsList from "./boards-list/BoardsList";
import "./Boards.scss";
import profileGirl from "../../assets/images/profile-girl.png";
import Loupe from "../html/SVG/Loupe";

const Boards = () => {
  return (
    <div className="boards__wrapper">
      <main>
        <BoardsList />
      </main>
    </div>
  );
};

export default Boards;
