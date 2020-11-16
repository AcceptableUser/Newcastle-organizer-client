import React, {Component} from "react"
import "./BoardList.scss"
import TaskAdder from "./Subcomponents/task-adder/TaskAdder"
import Task from "./Subcomponents/task/Task"
import TitleList from "./Subcomponents/title-list/TitleList"

class BoardList extends Component {
  constructor() {
    super()
    this.state = {
      task: []
    }
  }

  render() {
    return (
      <div className="list">
        <TitleList />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <TaskAdder />
      </div>
    )
  }
}

export default BoardList