import React from "react";
import "./BoardsList.scss";
import NormalBoard from "./Subcomponents/normal-board/NormalBoard";
import RecentBoard from "./Subcomponents/recent-board/RecentBoard";
import Carousel from "react-elastic-carousel";

const BoardsList = ({
  recentlyViewedData,
  personalBoardsData,
  teamBoardsData,
  addPersonalBoard,
  addTeamBoard,
}) => {
  const breakPointsRecentlyView = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1550, itemsToShow: 4 },
    { width: 1800, itemsToShow: 5 },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 630, itemsToShow: 2 },
    { width: 930, itemsToShow: 3 },
    { width: 1240, itemsToShow: 4 },
    { width: 1550, itemsToShow: 5 },
  ];

  return (
    <div className="board-list__wrapper">
      <h1 className="board-list__title">Welcome back, AcceptableUser!</h1>
      <section className="board-list__important-section">
        <h2 className="board-list__important-section__title">
          Recently viewed
        </h2>
        <ul className="board-list__important-section__list">
          <Carousel breakPoints={breakPointsRecentlyView}>
            {recentlyViewedData.map((recentBoard, recentBoardIndex) => (
              <li
                className="board-list__important-section__list__item"
                key={recentBoardIndex}
              >
                <RecentBoard
                  boardTitle={recentBoard.title}
                  boardDescription={recentBoard.description}
                />
              </li>
            ))}
          </Carousel>
        </ul>
      </section>
      <section className="board-list__section">
        <div className="board-list__section__title__wrapper">
          <h2 className="board-list__section__title">Personal boards</h2>
          <input
            className="board-list__section__button"
            type="button"
            value="Add board"
            onClick={addPersonalBoard}
          />
        </div>
        <ul className="board-list__section__list">
          <Carousel breakPoints={breakPoints}>
            {personalBoardsData.map((personalBoard, personalBoardIndex) => (
              <li
                className="board-list__section__list__item"
                key={personalBoardIndex}
              >
                <NormalBoard boardTitle={personalBoard.title} />
              </li>
            ))}
          </Carousel>
        </ul>
      </section>
      <section className="board-list__section">
        <div className="board-list__section__title__wrapper">
          <h2 className="board-list__section__title">Team boards</h2>
          <input
            className="board-list__section__button"
            type="button"
            value="Add board"
            onClick={addTeamBoard}
          />
        </div>
        <ul className="board-list__section__list">
          <Carousel breakPoints={breakPoints}>
            {teamBoardsData.map((teamBoard, teamBoardIndex) => (
              <li
                className="board-list__section__list__item"
                key={teamBoardIndex}
              >
                <NormalBoard boardTitle={teamBoard.title} />
              </li>
            ))}
          </Carousel>
        </ul>
      </section>
    </div>
  );
};

export default BoardsList;
