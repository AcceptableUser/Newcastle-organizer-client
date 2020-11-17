import React from "react"
import "./Task.scss"

const Task = ({item, handleDragStart, activeClass, handleDragOverItem}) => (
  <div
    draggable
    onDragStart={handleDragStart}
    onDragEnter={handleDragOverItem}
    className={activeClass}>
    <p>{item}</p>
    <button>
      B
    </button>
  </div>
)

export default Task