import React from "react";
import BoardList from "./board-list/BoardList";
import Header from "./header/Header";
import "./Board.scss";

let FloatMenu = [
    {
        title: "",
        description: "",
        isActive: false,
    },
];


const Board = () => {

    const changeProjectLists = (newProjectLists) => {
        //setProjectLists(newProjectLists)
    }

    return (
        <div className="board__wrapper">
            <div>
                <Header/>
                <BoardList
                    changeProjectLists={changeProjectLists}
                    taskData={[]}
                    FloatMenuData={FloatMenu}
                />
            </div>
        </div>
    );
};


export default Board;
