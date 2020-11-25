import React from "react";
import "./BoardsHeader.scss";
import BoxMenu from "../../html/SVG/BoxMenu.jsx";

const BoardsHeader = () => {
  return (
    <header className="boards-header">
      <nav className="boards-header__nav">
        <div className="boards-header__nav__menu">
          <BoxMenu width="32px" height="32px" />
        </div>
        <button className="boards-header__nav__user-button"></button>
      </nav>
    </header>
  );
};

export default BoardsHeader;
