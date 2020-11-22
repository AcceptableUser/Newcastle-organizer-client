import React from "react";
import "./TitleList.scss";

const TitleList = ({
  listTitle,
  handleTaskTitleClick,
  handleTitleEditing,
  handleKeyPressed,
}) => (
  <div className="title__list__wrapper">
    <div onClick={handleTaskTitleClick} className={handleTitleEditing}>
      <h2 className="title__list__h2">{listTitle}</h2>
      <textarea
        className="title__list__textarea"
        rows="1"
        wrap="hard"
        maxLength="35"
        onKeyPress={handleKeyPressed}
      >
        {listTitle}
      </textarea>
    </div>
  </div>
);

export default TitleList;
