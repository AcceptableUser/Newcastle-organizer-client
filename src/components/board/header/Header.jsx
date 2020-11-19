import React from "react"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="project__title">
        <h1>Board Title</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>Board</li>
          <li>Gant</li>
          <li>Activity</li>
          <li>Checklists</li>
          <li>Files</li>
          <li>Details</li>
          <li>Team</li>
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
  )
}

export default Header