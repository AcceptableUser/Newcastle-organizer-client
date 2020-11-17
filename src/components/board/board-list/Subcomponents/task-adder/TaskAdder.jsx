import React from "react"
import Templates from "../../../../html/SVG/Templates"
import "./TaskAdder.scss"

const TaskAdder = () => (
  <div className="task-adder__wrapper">
    <input type="button" value="+ Add another card" />
    <button>
      <Templates />
    </button>
  </div>
)

export default TaskAdder