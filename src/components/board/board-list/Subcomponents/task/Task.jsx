import React from "react";
import Calendar from "../../../../html/SVG/Calendar";
import Chat from "../../../../html/SVG/Chat";
import File from "../../../../html/SVG/File";
import Menu from "../../../../html/SVG/Menu";
import profile from "../../../../../assets/images/profile.png";
import "./Task.scss";

const Task = ({ item, handleFloatingMenu }) => (
  <div onClick={handleFloatingMenu} className="task__wrapper">
    <div className="task__main__wrapper">
      <div className="task__title__wrapper">
        <h3 className="task__title">{item}</h3>
        <div className="task__options__button__wrapper">
          <Menu />
        </div>
      </div>
      <div className="task__information__wrapper">
        <div className="task__information">
          <File />
          <p className="task__information__details">2</p>
        </div>
        <div className="task__information">
          <Chat />
          <p className="task__information__details">6</p>
        </div>
        <div className="task__information">
          <Calendar />
          <p className="task__information__details">04/04/2020</p>
        </div>
      </div>
    </div>
    <div className="task__footer__wrapper">
      <p className="task__footer__label">Discovery</p>
      <div className="task__footer__image__wrapper">
        <img className="task__footer__image" src={profile} alt="user" />
      </div>
    </div>
  </div>
);

export default Task;
