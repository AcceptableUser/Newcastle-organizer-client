import React, { useState } from "react";
import "./BoardList.scss";
import FloatingTaskMenu from "./Subcomponents/floating-task-menu/FloatingTaskMenu";
import ListAdder from "./Subcomponents/list-adder/ListAdder";
import TaskAdder from "./Subcomponents/task-adder/TaskAdder";
import Task from "./Subcomponents/task/Task";
import TitleList from "./Subcomponents/title-list/TitleList";

const BoardList = () => {
  const [list, changeList] = useState([
    {
      id: "0",
      title: "To do",
      titleEditable: false,
      items: ["Code migration and merge", "JS Hint implementation"],
    },
    {
      id: "1",
      title: "In progress",
      titleEditable: false,
      items: [
        "Request Costum feedback",
        "CDD refactoring",
        "Dashboard improvements",
      ],
    },
    {
      id: "2",
      title: "Pending",
      titleEditable: false,
      items: ["Request custom feedback"],
    },
    {
      id: "3",
      title: "Review",
      titleEditable: false,
      items: ["Email Newsletter", "Templates translation"],
    },
    {
      id: "4",
      title: "Finished",
      titleEditable: false,
      items: ["Code migration and merge"],
    },
  ]);

  const [floatMenu, changeFloatMenu] = useState(false);

  const handleClick = (e, groupIndex) => {
    let listCopy = [...list];
    listCopy[groupIndex].titleEditable = true;
    changeList(listCopy);
  };

  const handleTitleEditing = (groupIndex) => {
    if (list[groupIndex].titleEditable) {
      return "title__list--active";
    } else {
      return "title__list";
    }
  };

  const handleKeyPressed = (e, groupIndex) => {
    if (e.key === "Enter") {
      let listCopy = [...list];
      listCopy[groupIndex].title = e.target.value.replace(/[\r\n\v]+/g, "");
      listCopy[groupIndex].titleEditable = false;
      changeList(listCopy);
    }
  };

  const handleTaskCreation = (groupIndex) => {
    let listCopy = [...list];
    listCopy[groupIndex].items = [...listCopy[groupIndex].items, "New Task"];
    changeList(listCopy);
  };

  const handleFloatMenuState = () => {
    if (floatMenu) {
      return "float-menu__active";
    } else {
      return "float-menu__unactive";
    }
  };

  const handleTaskClick = () => {
    changeFloatMenu(true);
  };

  const handleCloseFloatMenu = () => {
    changeFloatMenu(false);
  };

  const handleListCreation = () => {
    let listCopy = [...list];
    let newList = {
      id: listCopy.length,
      title: "New List",
      titleEditable: false,
      items: [],
    };

    listCopy = [...listCopy, newList];
    changeList(listCopy);
  };

  return (
    <div className="board__list__wrapper">
      {list.map((group, groupIndex) => (
        <div key={group.id} className="board__list">
          <TitleList
            key={group.title}
            title={group.title}
            handleClick={(e) => handleClick(e, groupIndex)}
            handleTitleEditing={handleTitleEditing(groupIndex)}
            handleKeyPressed={(e) => handleKeyPressed(e, groupIndex)}
          />
          {group.items.map((item, itemIndex) => (
            <Task
              key={item}
              item={item}
              handleTaskClick={() => handleTaskClick()}
            />
          ))}
          <TaskAdder
            handleTaskCreation={() => handleTaskCreation(groupIndex)}
          />
        </div>
      ))}
      <div className={handleFloatMenuState()}>
        <FloatingTaskMenu handleCloseFloatMenu={() => handleCloseFloatMenu()} />
      </div>
      <ListAdder handleListCreation={() => handleListCreation()} />
    </div>
  );
};

export default BoardList;
