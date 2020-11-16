import React, { Component } from "react"
import BoardList from "./board-list/BoardList"
import "./Board.scss"

class Board extends Component {
  constructor() {
    super()
    this.state = {
      planningList: [],
    }
  }

  render() {
    return (
      <div className="Board__wrapper">
        <div className="title__wrapper">
          <h1 className="title">Title</h1>
        </div>
        <div>
          <BoardList />
        </div>
      </div>
    )
  }
}

export default Board