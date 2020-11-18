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
        <div>
          <BoardList />
        </div>
      </div>
    )
  }
}

export default Board