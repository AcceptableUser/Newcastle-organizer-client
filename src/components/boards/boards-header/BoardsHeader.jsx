import React from "react";
import "./BoardsHeader.scss";
import BurgerMenu from "../../html/SVG/BurgerMenu.jsx";

const BoardsHeader = () => {
  return (
    <header className="boards-header">
      <nav className="boards-header__nav">
        <div className="boards-header__nav__menu">
          <BurgerMenu width="30px" height="30px" />
        </div>
        <button className="boards-header__nav__user-button"></button>
      </nav>
    </header>
  );
};

export default BoardsHeader;
