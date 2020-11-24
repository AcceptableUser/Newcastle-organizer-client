import React from "react";
import "./RecentBoard.scss";

const RecentBoard = () => {
  return (
    <div className="recent-board__wrapper">
      <div className="recent-board__information__wrapper">
        <h3 className="recent-board__title">Personal project</h3>
        <p className="recent-board__description">
          This project is about creating an illustrated book about a boy and his
          friends
        </p>
      </div>
      <div className="recent-board__button__wrapper">
        <input
          className="recent-board__button"
          type="button"
          value="Go to dashboard"
        />
      </div>
    </div>
  );
};

export default RecentBoard;
