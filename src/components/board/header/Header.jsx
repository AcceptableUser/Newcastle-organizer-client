import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title__wrapper">
        <h1 className="header__title">Board Title</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">Board</li>
          <li className="header__nav__list__item">Gant</li>
          <li className="header__nav__list__item">Activity</li>
          <li className="header__nav__list__item">Checklists</li>
          <li className="header__nav__list__item">Files</li>
          <li className="header__nav__list__item">Details</li>
          <li className="header__nav__list__item">Team</li>
        </ul>
        <div className="header__nav__options__wrapper">
          <div className="header__nav__options__button__wrapper">
            <p className="header__nav__options__button">Add filter</p>
          </div>
          <div className="header__nav__options__button__wrapper">
            <p className="header__nav__options__button">Group by</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
