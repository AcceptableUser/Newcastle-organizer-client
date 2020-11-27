import React, { useState } from "react";
import BoardsList from "./boards-list/BoardsList";
import "./Boards.scss";
import BoardsHeader from "./boards-header/BoardsHeader";

const Boards = () => {
  const [fakeRecentlyViewed, changeFakeRecentlyViewed] = useState([
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
  ]);

  const [fakePersonalBoards, changeFakePersonalBoards] = useState([
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
  ]);

  const [fakeTeamBoards, changeFakeTeamBoards] = useState([
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
  ]);

  const addPersonalBoard = () => {
    let fakePersonalBoardsCopy = [...fakePersonalBoards];
    let newBoard = { title: "Boring project" };

    fakePersonalBoardsCopy.push(newBoard);

    changeFakePersonalBoards(fakePersonalBoardsCopy);
  };

  const addTeamBoard = () => {
    let fakeTeamBoardsCopy = [...fakeTeamBoards];
    let newBoard = { title: "Boring project" };

    fakeTeamBoardsCopy.push(newBoard);

    changeFakeTeamBoards(fakeTeamBoardsCopy);
  };

  return (
    <div className="boards__wrapper">
      <BoardsHeader />
      <BoardsList
        recentlyViewedData={fakeRecentlyViewed}
        personalBoardsData={fakePersonalBoards}
        teamBoardsData={fakeTeamBoards}
        addPersonalBoard={() => addPersonalBoard()}
        addTeamBoard={() => addTeamBoard()}
      />
    </div>
  );
};

export default Boards;
