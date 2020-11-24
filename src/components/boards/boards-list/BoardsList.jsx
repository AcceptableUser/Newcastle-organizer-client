import React from "react";
import "./BoardsList.scss";

const BoardsList = ({ listName, number }) => {
  return (
    <div className="boards-list__section__wrapper">
      <section className="boards-list__section">
        <h2 className="boards-list__section__title">{listName}</h2>
        <div className="boards-list__section__list__wrapper">
          <ul className="boards-list__section__list">
            <li
              className="boards-list__section__list__item"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/350x200/?" +
                  number * 2 +
                  ",plant)",
              }}
            ></li>
            <li
              className="boards-list__section__list__item"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/500x400/?" +
                  number * 5 +
                  ",plant)",
              }}
            ></li>
            <li
              className="boards-list__section__list__item"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/500x400/?" +
                  number * 9 +
                  ",plant)",
              }}
            ></li>
            <li
              className="boards-list__section__list__item"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/500x400/?" +
                  number * 14 +
                  ",plant)",
              }}
            ></li>
          </ul>
          <input
            className="boards-list__section__list__button"
            type="button"
            value="Load more boards"
          />
        </div>
      </section>
    </div>
  );
};

export default BoardsList;
