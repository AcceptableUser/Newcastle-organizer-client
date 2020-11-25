import React from "react";
import BoardsList from "./boards-list/BoardsList";
import "./Boards.scss";
<<<<<<< HEAD
import BoardsHeader from "./boards-header/BoardsHeader";
=======
import profileGirl from "../../assets/images/profile-girl.png";
import Loupe from "../html/SVG/Loupe";
>>>>>>> Changes in the boards section

const Boards = () => {
  return (
    <div className="boards__wrapper">
<<<<<<< HEAD
      <BoardsHeader />
      <BoardsList />
=======
      <header className="boards__header">
        <nav className="boards__header__navigation">
          <h3 className="boards__header__navigation__title">
            Newcastle Organizer
          </h3>
          <button className="boards__header__navigation__user__options">
            <img
              className="boards__header__navigation__user__image"
              src={profileGirl}
              alt="porfile girl"
            />
          </button>
        </nav>
      </header>
      <main className="boards__main">
        <div className="boards__main__searchbar">
          <input className="boards__main__searchbar__input" type="text" />
          <button className="boards__main__searchbar__button">
            <Loupe />
          </button>
        </div>
        <div className="boards__main__title__wrapper">
          <h1 className="boards__main__title">Here you can see your boards</h1>
          <p className="boards__main__description">
            And also those others shared with you!
          </p>
        </div>
        <BoardsList listName={"Recently Viewed"} number={1} />
        <BoardsList listName={"Personal Boards"} number={5} />
        <BoardsList listName={"Shared Boards"} number={50} />
      </main>
>>>>>>> Changes in the boards section
    </div>
  );
};

export default Boards;
