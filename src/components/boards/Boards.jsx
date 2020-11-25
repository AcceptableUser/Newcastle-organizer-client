import React from "react";
import BoardsList from "./boards-list/BoardsList";
import "./Boards.scss";
<<<<<<< HEAD
import profileGirl from "../../assets/images/profile-girl.png";
=======
import BoardsHeader from "./boards-header/BoardsHeader";
>>>>>>> 1b70475bc074628fdc48fcc25b2ff6d34203dbc3

const Boards = () => {
  return (
    <div className="boards__wrapper">
<<<<<<< HEAD
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
        <div className="boards__main__title__wrapper">
          <h1 className="boards__main__title">Here you can see your boards</h1>
          <p className="boards__main__description">
            And also those others shared with you!
          </p>
        </div>
        <BoardsList listName={"Recently Viewed"} />
        <BoardsList listName={"Personal Boards"} />
        <BoardsList listName={"Shared Boards"} />
      </main>
=======
      <BoardsHeader />
      <BoardsList />
>>>>>>> 1b70475bc074628fdc48fcc25b2ff6d34203dbc3
    </div>
  );
};

export default Boards;
