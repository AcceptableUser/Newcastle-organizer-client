import React from "react"
import BoardList from "./board-list/BoardList"
import Header from "./header/Header"
import "./Board.scss"

const Board = () => {
  return (
    <div className="Board__wrapper">
      <div>
        <Header />
        <BoardList />
      </div>
    </div>
  )
}

export default Board