import React from "react"
import Menu from "../../../../html/SVG/Menu"
import "./TitleList.scss"

const TitleList = ({title}) => (
  <div className="title__list__wrapper">
    <textarea>{title}</textarea>
    <button>
      <div>
        <Menu />
      </div>
    </button>
  </div>
)

export default TitleList