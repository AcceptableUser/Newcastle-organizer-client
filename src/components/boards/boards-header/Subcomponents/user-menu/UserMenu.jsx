import React from "react";
import "./UserMenu.scss";

const UserMenu = ({ toggleUserMenu }) => {
  return (
    <div className={toggleUserMenu}>
      <h4 className="boards-header__nav__user-menu__title">Account</h4>
      <ul className="boards-header__nav__user-menu__list">
        <div className="boards-header__nav__user-menu__information__wrapper">
          <div className="boards-header__nav__user-menu__image"></div>
          <div className="boards-header__nav__user-menu__data__wrapper">
            <p className="boards-header__nav__user-menu__name">Unsplash Girl</p>
            <p className="boards-header__nav__user-menu__email">
              unsplashgirl@gmail.com
            </p>
          </div>
        </div>
        <li className="boards-header__nav__user-menu__list__item">Log out</li>
      </ul>
    </div>
  );
};

export default UserMenu;
