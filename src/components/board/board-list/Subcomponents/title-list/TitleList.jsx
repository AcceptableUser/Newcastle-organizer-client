import React from "react"
import "./TitleList.scss"

const TitleList = ({ title }) => (
  <div className="title__list__wrapper">
    <div className="title__list">
    <h2>{title}</h2>
    </div>
  </div>
)

export default TitleList