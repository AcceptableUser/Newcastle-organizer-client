import React from "react";
import "./TaskAdder.scss";

const TaskAdder = ({ handleTaskCreation }) => (
  <div onClick={handleTaskCreation} className="task__adder__wrapper">
    <input className="task__adder" type="button" value="+ Add task..." />
  </div>
);

export default TaskAdder;
