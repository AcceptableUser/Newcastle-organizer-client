import React from "react";
import "./RecentBoard.scss";

const RecentBoard = ({ boardTitle, boardDescription }) => {
  return (
    <div className="recent-board__wrapper">
      <div className="recent-board__information__wrapper">
        <h3 className="recent-board__title">{boardTitle}</h3>
        <p className="recent-board__description">{boardDescription}</p>
      </div>
      <div className="recent-board__button__wrapper">
        <input
          className="recent-board__button"
          type="button"
          value="Open dashboard"
        />
      </div>
    </div>
  );
};

export default RecentBoard;
