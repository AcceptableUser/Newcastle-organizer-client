import React from "react"
import Calendar from "../../../../html/SVG/Calendar"
import Chat from "../../../../html/SVG/Chat"
import File from "../../../../html/SVG/File"
import Menu from "../../../../html/SVG/Menu"
import profile from "../../../../../assets/images/profile.png"
import "./Task.scss"

const Task = ({item, handleDragStart, activeClass, handleDragOverItem}) => (
  <div
    draggable="true"
    onDragStart={handleDragStart}
    onDragEnter={handleDragOverItem}
    className={activeClass}>
    <div>
      <div className="title__wrapper">
      <h3>{item}</h3>
      <div className ="button__wrapper">
        <Menu />
      </div>
    </div>
    <div className="buttons__wrapper">
      <div className="button__wrapper">
        <File />
        <p>2</p>
      </div>
      <div className="button__wrapper">
        <Chat />
        <p>6</p>
      </div>
      <div className="button__wrapper">
        <Calendar />
        <p>04/04/2020</p>
      </div>
    </div>
    </div>
    <div className="footer__wrapper">
      <p className="label">Discovery</p>
      <div className="people">
        <img src={profile} width="26px" height="26px" alt="user" />
      </div>
    </div>
  </div>
)

export default Task