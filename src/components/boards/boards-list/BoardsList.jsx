import React from "react";
import "./BoardsList.scss";
import NormalBoard from "./Subcomponents/normal-board/NormalBoard";
import RecentBoard from "./Subcomponents/recent-board/RecentBoard";

const BoardsList = () => {
  return (
    <div className="board-list__wrapper">
      <h1 className="board-list__title">Welcome back, AcceptableUser!</h1>
      <section className="board-list__important-section">
        <h2 className="board-list__important-section__title">
          Recently viewed
        </h2>
        <ul className="board-list__important-section__list">
          <li className="board-list__important-section__list__item">
            <RecentBoard />
          </li>
          <li className="board-list__important-section__list__item">
            <RecentBoard />
          </li>
          <li className="board-list__important-section__list__item">
            <RecentBoard />
          </li>
          <li className="board-list__important-section__list__item">
            <RecentBoard />
          </li>
        </ul>
      </section>
      <section className="board-list__section">
        <div className="board-list__section__title__wrapper">
          <h2 className="board-list__section__title">Personal boards</h2>
          <input
            className="board-list__section__button"
            type="button"
            value="Create personal board"
          />
        </div>
        <ul className="board-list__section__list">
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
        </ul>
      </section>
      <section className="board-list__section">
        <div className="board-list__section__title__wrapper">
          <h2 className="board-list__section__title">Team boards</h2>
          <input
            className="board-list__section__button"
            type="button"
            value="Create team board"
          />
        </div>
        <ul className="board-list__section__list">
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
          <li className="board-list__section__list__item">
            <NormalBoard />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BoardsList;
