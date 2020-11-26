import React from "react";
import BoardsList from "./boards-list/BoardsList";
import "./Boards.scss";
import BoardsHeader from "./boards-header/BoardsHeader";

const fakeRecentlyViewed = [
  {
    title: "Personal project",
    description:
      "This project is about creating an illustrated book about a boy and his friends",
  },
  {
    title: "Personal project",
    description:
      "This project is about creating an illustrated book about a boy and his friends",
  },
  {
    title: "Personal project",
    description:
      "This project is about creating an illustrated book about a boy and his friends",
  },
  {
    title: "Personal project",
    description:
      "This project is about creating an illustrated book about a boy and his friends",
  },
  {
    title: "Personal project",
    description:
      "This project is about creating an illustrated book about a boy and his friends",
  },
  {
    title: "Personal project",
    description:
      "This project is about creating an illustrated book about a boy and his friends",
  },
];

const fakePersonalBoards = [
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
];

const fakeTeamBoards = [
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
  { title: "Boring project" },
];

const Boards = () => {
  return (
    <div className="boards__wrapper">
      <BoardsHeader />
      <BoardsList
        recentlyViewedData={fakeRecentlyViewed}
        personalBoardsData={fakePersonalBoards}
        teamBoardsData={fakeTeamBoards}
      />
    </div>
  );
};

export default Boards;
