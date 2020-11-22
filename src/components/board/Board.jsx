import React from "react";
import BoardList from "./board-list/BoardList";
import Header from "./header/Header";
import "./Board.scss";

let FloatMenu = [
  {
    title: "",
    description: "",
    comments: [],
    members: [],
    labels: [],
    dueDate: "",
    attachments: [],
    isActive: false,
  },
];

let Tasks = [
  {
    id: "0",
    Title: "Code migration and merge",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "1",
    Title: "JS Hint implementation",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "2",
    Title: "Request Custom feedback",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "3",
    Title: "CDD refactoring",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "4",
    Title: "Dashboard improvements",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "5",
    Title: "Request custom feedback",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "6",
    Title: "Email Newsletter",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "7",
    Title: "Templates translation",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "8",
    Title: "Code migration and merge",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
    menuActive: false,
  },
  {
    id: "0",
    Title: "Code migration and merge",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "1",
    Title: "JS Hint implementation",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "2",
    Title: "Request Costum feedback",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "3",
    Title: "CDD refactoring",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "4",
    Title: "Dashboard improvements",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "5",
    Title: "Request custom feedback",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "6",
    Title: "Email Newsletter",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "7",
    Title: "Templates translation",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
  {
    id: "8",
    Title: "Code migration and merge",
    Attachments: 2,
    Comments: 6,
    DueDate: "04/04/2020",
    Labels: "Discovery",
    TeamMembers: "Jhon",
  },
];

let Lists = [
  {
    id: "0",
    title: "To do",
    titleEditable: false,
    menuActive: false,
    tasks: [Tasks[0], Tasks[1]],
  },
  {
    id: "1",
    title: "In progress",
    titleEditable: false,
    menuActive: false,
    tasks: [Tasks[2], Tasks[3], Tasks[4]],
  },
  {
    id: "2",
    title: "Pending",
    titleEditable: false,
    menuActive: false,
    tasks: [Tasks[5]],
  },
  {
    id: "3",
    title: "Review",
    titleEditable: false,
    menuActive: false,
    tasks: [Tasks[6], Tasks[7]],
  },
  {
    id: "4",
    title: "Finished",
    titleEditable: false,
    menuActive: false,
    tasks: [Tasks[8]],
  },
];

const Board = () => {
  return (
    <div className="board__wrapper">
      <div>
        <Header />
        <BoardList
          listData={Lists}
          taskData={Tasks}
          FloatMenuData={FloatMenu}
        />
      </div>
    </div>
  );
};

export default Board;
