import React from "react";
import BoardList from "./board-list/BoardList";
import Header from "./header/Header";
import "./Board.scss";
import BoardsHeader from "../boards/boards-header/BoardsHeader";


const Board = () => {

    const changeProjectLists = (newProjectLists) => {
        //setProjectLists(newProjectLists)
    }

    return (
        <div className="board__wrapper">
            <div>
                <BoardsHeader/>
                <Header/>
                <BoardList
                    changeProjectLists={changeProjectLists}
                />
            </div>
        </div>
    );
};


export default Board;
