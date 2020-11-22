import React from "react";
import Menu from "../../../../html/SVG/Menu";
import "./TitleList.scss";

const TitleList = ({
  listTitle,
  handleTaskTitleClick,
  handleTitleEditing,
  handleKeyPressed,
  handleShowingListMenu,
  handleActivatingListMenu,
  handleDeleteList,
}) => (
  <div className="title__list__wrapper">
    <div className="title__list__title__wrapper">
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
      <div className="title__list__menu__wrapper">
        <div className="title__list__menu" onClick={handleActivatingListMenu}>
          <Menu />
        </div>
        <div className={handleShowingListMenu} onClick={handleDeleteList}>
          <input
            className="title__list__menu__options__delete"
            type="button"
            value="Delete List"
          />
        </div>
      </div>
    </div>
  </div>
);

export default TitleList;
