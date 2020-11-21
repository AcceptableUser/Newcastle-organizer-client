import React from "react";
import BoardList from "./board-list/BoardList";
import Header from "./header/Header";
import "./Board.scss";

let data = [
  {
    id: "0",
    title: "To do",
    titleEditable: false,
    items: ["Code migration and merge", "JS Hint implementation"],
  },
  {
    id: "1",
    title: "In progress",
    titleEditable: false,
    items: [
      "Request Costum feedback",
      "CDD refactoring",
      "Dashboard improvements",
    ],
  },
  {
    id: "2",
    title: "Pending",
    titleEditable: false,
    items: ["Request custom feedback"],
  },
  {
    id: "3",
    title: "Review",
    titleEditable: false,
    items: ["Email Newsletter", "Templates translation"],
  },
  {
    id: "4",
    title: "Finished",
    titleEditable: false,
    items: ["Code migration and merge"],
  },
];

const Board = () => {
  return (
    <div className="board__wrapper">
      <div>
        <Header />
        <BoardList listData={data} />
      </div>
    </div>
  );
};

export default Board;
