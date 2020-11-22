import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./BoardList.scss";
import FloatingTaskMenu from "./Subcomponents/floating-task-menu/FloatingTaskMenu";
import ListAdder from "./Subcomponents/list-adder/ListAdder";
import TaskAdder from "./Subcomponents/task-adder/TaskAdder";
import Task from "./Subcomponents/task/Task";
import TitleList from "./Subcomponents/title-list/TitleList";

const BoardList = ({ listData, taskData, FloatMenuData }) => {
  const [list, changeList] = useState(listData);
  const [task, changeTask] = useState(taskData);
  const [floatMenu, changeFloatMenu] = useState(FloatMenuData);

  const handleTaskTitleClick = (e, listIndex) => {
    let listCopy = [...list];
    listCopy[listIndex].titleEditable = true;
    changeList(listCopy);
  };

  const handleTitleEditing = (listIndex) => {
    if (list[listIndex].titleEditable) {
      return "title__list--active";
    } else {
      return "title__list";
    }
  };

  const handleKeyPressed = (e, listIndex) => {
    if (e.key === "Enter") {
      let listCopy = [...list];
      listCopy[listIndex].title = e.target.value.replace(/[\r\n\v]+/g, "");
      listCopy[listIndex].titleEditable = false;
      changeList(listCopy);
    }
  };

  const handleTaskCreation = (e, listIndex) => {
    let listCopy = [...list];
    let taskCopy = [...task];
    let newTask = {
      id: taskCopy.length,
      Title: "New Task",
      Attachments: 0,
      Comments: 0,
      DueDate: "None",
      Labels: "Discovery",
      TeamMembers: "Jhon",
    };
    taskCopy = [...taskCopy, newTask];
    taskCopy.push(newTask);
    changeTask(taskCopy);
    listCopy[listIndex].tasks = [
      ...listCopy[listIndex].tasks,
      taskCopy[task.length],
    ];
    changeList(listCopy);
  };

  const handleFloatMenuState = () => {
    if (floatMenu.isActive) {
      return "float-menu__active";
    } else {
      return "float-menu__unactive";
    }
  };

  const handleTaskClick = (e, task) => {
    let floatMenuCopy = [...floatMenu];
    floatMenuCopy.title = task.Title;
    floatMenuCopy.isActive = true;
    changeFloatMenu(floatMenuCopy);
  };

  const handleCloseFloatMenu = () => {
    let floatMenuCopy = [...floatMenu];
    floatMenuCopy.title = "";
    floatMenuCopy.isActive = false;
    changeFloatMenu(floatMenuCopy);
  };

  const handleListCreation = () => {
    let listCopy = [...list];
    let newList = {
      id: listCopy.length,
      title: "New List",
      titleEditable: false,
      tasks: [],
    };

    listCopy = [...listCopy, newList];
    changeList(listCopy);
  };

  const handleTaskDragEnd = (result) => {
    if (!result.destination) return;
    const listsObjects = [...list];
    const taskToMove = listsObjects[result.source.droppableId].tasks.splice(
      result.source.index - 1,
      1
    );
    listsObjects[result.destination.droppableId].tasks.splice(
      result.destination.index - 1,
      0,
      taskToMove[0]
    );
  };

  return (
    <div className="board__list__wrapper">
      <DragDropContext onDragEnd={handleTaskDragEnd}>
        {list.map((list, listIndex) => (
          <Droppable droppableId={list.id}>
            {(propvided) => (
              <ul
                className="board__list"
                {...propvided.droppableProps}
                ref={propvided.innerRef}
              >
                <li className="board__list__item">
                  <TitleList
                    listTitle={list.title}
                    handleTitleEditing={handleTitleEditing(listIndex)}
                    handleTaskTitleClick={(e) =>
                      handleTaskTitleClick(e, listIndex)
                    }
                    handleKeyPressed={(e) => handleKeyPressed(e, listIndex)}
                  />
                </li>
                {list.tasks.map((task, taskIndex) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id}
                    index={taskIndex + 1}
                  >
                    {(propvided, snapshot) => (
                      <li
                        className="board__list__item"
                        {...propvided.draggableProps}
                        {...propvided.dragHandleProps}
                        ref={propvided.innerRef}
                      >
                        <Task
                          taskTitle={task.Title}
                          taskAttachments={task.Attachments}
                          taskComments={task.Comments}
                          taskDueDate={task.DueDate}
                          taskLabels={task.Labels}
                          taskTeamMembers={task.TeamMembers}
                          handleTaskClick={(e) => handleTaskClick(e, task)}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}
                {propvided.placeholder}
                <li className="board__list__item">
                  <TaskAdder
                    handleTaskCreation={(e) => handleTaskCreation(e, listIndex)}
                  />
                </li>
              </ul>
            )}
          </Droppable>
        ))}
      </DragDropContext>
      <div className={handleFloatMenuState()}>
        <FloatingTaskMenu
          handleCloseFloatMenu={() => handleCloseFloatMenu()}
          menuTitle={floatMenu.title}
          menuDescription={floatMenu.description}
          menuComments={floatMenu.comments}
          menuMembers={floatMenu.members}
          menuLabels={floatMenu.labels}
          menuDueDate={floatMenu.dueDate}
          menuAttachments={floatMenu.attachments}
        />
      </div>
      <ListAdder handleListCreation={() => handleListCreation()} />
    </div>
  );
};

export default BoardList;
