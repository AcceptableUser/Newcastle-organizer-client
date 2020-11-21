import React, { useState, useRef } from "react";
import "./BoardList.scss";
import FloatingTaskMenu from "./Subcomponents/floating-task-menu/FloatingTaskMenu";
import ListAdder from "./Subcomponents/list-adder/ListAdder";
import TaskAdder from "./Subcomponents/task-adder/TaskAdder";
import Task from "./Subcomponents/task/Task";
import TitleList from "./Subcomponents/title-list/TitleList";

const BoardList = ({ listData }) => {
  const [list, changeList] = useState(listData);
  const [floatMenu, changeFloatMenu] = useState(false);
  const [taskBeenDragger, changeTaskBeenDragger] = useState(false);

  const draggingNode = useRef();
  const draggingItem = useRef();

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

  const handleStartDraggingTask = (e, params) => {
    draggingNode.current = e.target;
    draggingItem.current = params;
    draggingNode.current.addEventListener("dragend", handleEndDraggingTask);
    setTimeout(() => {
      changeTaskBeenDragger(true);
    }, 0);
  };

  const handleEndDraggingTask = () => {
    console.log("Not dragged any more");
    changeTaskBeenDragger(false);
    draggingNode.current.removeEventListener("dragend", handleEndDraggingTask);
    draggingNode.current = null;
    draggingItem.current = null;
  };

  const changeTaskStyleOnDrag = (params) => {
    const currentItem = draggingItem.current;
    if (
      currentItem.groupIndex === params.groupIndex &&
      currentItem.itemIndex === params.itemIndex
    ) {
      return "task__wrapper--dragged";
    } else {
      return "task__wrapper";
    }
  };

  const handleDragEnterOnTask = (e, params) => {
    const currentItem = draggingItem.current;
    if (
      draggingItem.current.groupIndex !== params.groupIndex ||
      draggingItem.current.itemIndex !== params.itemIndex
    ) {
      changeList((list) => {
        let newList = JSON.parse(JSON.stringify(list));
        newList[params.groupIndex].items.splice(
          params.itemIndex,
          0,
          newList[currentItem.groupIndex].items.splice(
            currentItem.itemIndex,
            1
          )[0]
        );
        draggingItem.current = params;
        return newList;
      });
    }
  };

  return (
    <div className="board__list__wrapper">
      {list.map((group, groupIndex) => (
        <div
          key={group.id}
          className="board__list"
          onDragEnter={
            taskBeenDragger && group.items.length === 0
              ? (e) => handleDragEnterOnTask(e, { groupIndex, itemIndex: 0 })
              : null
          }
        >
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
              handleStartDraggingTask={(e) =>
                handleStartDraggingTask(e, { groupIndex, itemIndex })
              }
              handleDragEnterOnTask={(e) =>
                handleDragEnterOnTask(e, { groupIndex, itemIndex })
              }
              changeTaskStyleOnDrag={
                taskBeenDragger
                  ? changeTaskStyleOnDrag({ groupIndex, itemIndex })
                  : "task__wrapper"
              }
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
