import React from "react"
import Marker from "../../../../html/SVG/Marker"
import "./Task.scss"

const Task = ({item, handleDragStart, activeClass, handleDragOverItem}) => (
  <div
    draggable="true"
    onDragStart={handleDragStart}
    onDragEnter={handleDragOverItem}
    className={activeClass}>
    <textarea>{item}</textarea>
    <button>
      <div>
        <Marker className="marker"/>
      </div>
    </button>
  </div>
)

export default Task