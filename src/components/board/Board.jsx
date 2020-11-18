import React from "react"
import BoardList from "./board-list/BoardList"
import profile from "../../assets/images/profile.png"
import "./Board.scss"

const Board = () => {
  return (
    <div className="Board__wrapper">
      <div>
        <header className="header">
          <div className="project__title">
            <h1>Support and Improvements</h1>
            <div className="project__users">
              <img src={profile} alt="" width="26px" height="26px" />
              <img src={profile} alt="" width="26px" height="26px" />
              <img src={profile} alt="" width="26px" height="26px" />
              <img src={profile} alt="" width="26px" height="26px" />
              <img src={profile} alt="" width="26px" height="26px" />
              <img src={profile} alt="" width="26px" height="26px" />
              <img src={profile} alt="" width="26px" height="26px" />
              <img src={profile} alt="" width="26px" height="26px" />
            </div>
          </div>
          <nav className="nav">
            <ul>
              <li>Board</li>
              <li>Gant</li>
              <li>Activity</li>
              <li>Checklists</li>
              <li>Files</li>
              <li>Details</li>
            </ul>
            <div className="options">
              <div className="option__button">
                <p>Add filter</p>
              </div>
              <div className="option__button">
                <p>Group by</p>
              </div>
            </div>
          </nav>
        </header>
        <BoardList />
      </div>
    </div>
  )
}

export default Board