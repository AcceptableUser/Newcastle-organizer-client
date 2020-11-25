import React from "react";
import "./BoardsList.scss";
<<<<<<< HEAD
import boardBackground1 from "../../../assets/images/board-background1.jpg";
import boardBackground2 from "../../../assets/images/board-background2.jpg";
import boardBackground3 from "../../../assets/images/board-background3.jpg";
import boardBackground4 from "../../../assets/images/board-background4.jpg";

const BoardsList = ({ listName }) => {
  return (
    <div className="boards-list__section__wrapper">
      <section className="boards-list__section">
        <h2 className="boards-list__section__title">{listName}</h2>
        <ul className="boards-list__section__list">
          <li className="boards-list__section__list__item">
            <img
              className="boards-list__section__list__item__image"
              src={boardBackground1}
              alt=""
            />
          </li>
          <li className="boards-list__section__list__item">
            <img
              className="boards-list__section__list__item__image"
              src={boardBackground2}
              alt=""
            />
          </li>
          <li className="boards-list__section__list__item">
            <img
              className="boards-list__section__list__item__image"
              src={boardBackground3}
              alt=""
            />
          </li>
          <li className="boards-list__section__list__item">
            <img
              className="boards-list__section__list__item__image"
              src={boardBackground4}
              alt=""
            />
=======
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
>>>>>>> 1b70475bc074628fdc48fcc25b2ff6d34203dbc3
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BoardsList;
