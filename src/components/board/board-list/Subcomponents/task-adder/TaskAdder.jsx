import React from "react"
import "./TaskAdder.scss"

const TaskAdder = ({handleTaskCreation}) => (
  <div onClick={handleTaskCreation} className="task-adder__wrapper">
    <input type="button" value="+ Add task..." />
  </div>
)

export default TaskAdder