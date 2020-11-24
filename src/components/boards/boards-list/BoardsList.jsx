import React from "react";
import "./BoardsList.scss";
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
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BoardsList;
