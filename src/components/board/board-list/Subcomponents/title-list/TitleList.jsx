import React from "react"
import "./TitleList.scss"

const TitleList = ({ title, handleClick, changeStyle, handleKeyPressed }) => (
  <div className="title__list__wrapper">
    <div onClick={handleClick} className={changeStyle}>
      <h2 className="title__list__h2">{title}</h2>
      <textarea className="title__list__textarea" rows="1" wrap="hard" maxLength="35" onKeyPress={handleKeyPressed}>{title}</textarea>
    </div>
  </div>
)

export default TitleList