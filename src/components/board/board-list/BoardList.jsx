import React, {useEffect, useRef, useState} from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import "./BoardList.scss";
import FloatingTaskMenu from "./Subcomponents/floating-task-menu/FloatingTaskMenu";
import ListAdder from "./Subcomponents/list-adder/ListAdder";
import TaskAdder from "./Subcomponents/task-adder/TaskAdder";
import Task from "./Subcomponents/task/Task";
import TitleList from "./Subcomponents/title-list/TitleList";
import {connect} from 'react-redux'
import {createNewTask, createProjectList, deleteTask, fetchProjectLists, moveTask} from "../../../actions";

const BoardList = ({projectLists, fetchProjectListsProps, createProjectList, createNewTaskProps, moveTaskProps, deleteTaskProps}) => {

  const [isTaskPopupOpen, setIsTaskPopupOpen] = useState(false)

  const listIndexNumber = useRef();
  const taskIndexNumber = useRef();
  const floatMenuTitle = useRef();


  useEffect(() => {
    fetchProjectListsProps();
  }, [fetchProjectListsProps])

  const toggleTaskPopup = () => {
    setIsTaskPopupOpen(prevState => !prevState)
  }

  const handleTaskTitleChange = (e) => {
    floatMenuTitle.current = e.target;
    if (e.key === "Enter") {
      let taskCopy = [...projectLists.tasks];
      let taskItemId = parseInt(
          projectLists[listIndexNumber.current].tasks[taskIndexNumber.current].id
      );
      taskCopy[taskItemId].Title = e.target.value.replace(/[\r\n\v]+/g, "");
      //changeTask(taskCopy);
    }
  };

  const handleTaskDescriptionChange = (e) => {
    if (e.key === "Enter") {
      let taskCopy = [...projectLists.tasks];
      let taskItemId =
          projectLists[listIndexNumber.current].tasks[taskIndexNumber.current].id;
      taskCopy[taskItemId].Description = e.target.value;
    }
  };


  const handleTaskCreation = (listIndex) => {
    let newTask = {
      // It needs to be an string in order to be accepted by react-beautiful-dnd as a draggable
      title: "New Task",
      attachments: [],
      comments: [],
      deadlineDate: new Date(2020, 11, 28),
      labels: ["Discovery"],
      members: ["Jhon"]
    };
    createNewTaskProps(projectLists[listIndex].id, newTask)
  };


  const handleTaskClick = (task, listIndex, taskIndex) => {
    toggleTaskPopup()
    //createNewTaskProps(projectLists[listIndex].id, task)

  };


  const handleListCreation = () => {
    let newList = {
      // It needs to be an string in order to be accepted by react-beautiful-dnd as a draggable
      title: "New List",
      titleEditable: false,
      tasks: [],
    };
    createProjectList(newList);
  };

  const handleTaskDragEnd = (result) => {
    if (!result.destination) return;

    const listsObjects = [...projectLists];
    const projectListsIndexFrom = listsObjects.findIndex(e => {
      return e.id === +result.source.droppableId
    })

    const projectListsIndexTo = listsObjects.findIndex(e => {
      return e.id === +result.destination.droppableId
    })

    const taskToMove = listsObjects[projectListsIndexFrom].tasks.splice(
        result.source.index - 1,
        1
    );

    listsObjects[projectListsIndexTo].tasks.splice(
        result.destination.index - 1,
        0,
        taskToMove[0]
    );
    moveTaskProps(+result.destination.droppableId, taskToMove[0], listsObjects)
  };

  /*
  Delete task by list index and task index => trigger delete by task id and projec list id
   */
  const handleDeleteTask = (listIndex, taskIndex) => {
    deleteTaskProps(projectLists[listIndex].id, projectLists[listIndex].tasks[taskIndex].id);
  };

  return (
      <div className="board__list__wrapper">
        <DragDropContext onDragEnd={handleTaskDragEnd}>
          {projectLists.map((list, listIndex) => (
              <ul className="board__list" key={list.id.toString()}>
                <li className="board__list__item">
                  <TitleList
                      list={list}
                  />
                </li>
                <Droppable droppableId={list.id.toString()}>
                  {(provided) => (
                      <div
                          className="board__list__item__div"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                      >
                        {list.tasks.map((task, taskIndex) => (
                            <Draggable
                                key={task.id}
                                draggableId={task.id.toString()}
                                index={taskIndex + 1}
                            >
                              {(provided) => (
                                  <li
                                      className="board__list__item"
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                  >
                                    <Task
                                        task={task}
                                        handleTaskClick={(e) =>
                                            handleTaskClick(e, task, listIndex, taskIndex)
                                        }
                                        handleDeleteTask={() =>
                                            handleDeleteTask(listIndex, taskIndex)
                                        }
                                    />
                                  </li>
                              )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                  )}
                </Droppable>
                <li className="board__list__item">
                  <TaskAdder
                      toggleTaskPopup={() => handleTaskCreation(listIndex)}
                  />
                </li>
              </ul>
          ))}
        </DragDropContext>
        <FloatingTaskMenu
            isTaskPopupOpen={isTaskPopupOpen}
            toggleTaskPopup={toggleTaskPopup}
            handleTaskTitleChange={(e) => handleTaskTitleChange(e)}
            handleTaskDescriptionChange={(e) => handleTaskDescriptionChange(e)}
        />
        <ListAdder handleListCreation={() => handleListCreation()}/>
      </div>
  );
};

//Pass project list to props
const mapStateToProps = (state) => {
  return {projectLists: state.currentProject.projectLists}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjectListsProps: () => dispatch(fetchProjectLists()),
    createProjectList: (newProjectList) => dispatch(createProjectList(newProjectList)),
    createNewTaskProps: (projectListId, newTask) => dispatch(createNewTask(projectListId, newTask)),
    deleteTaskProps: (projectListId, taskId) => dispatch(deleteTask(projectListId, taskId)),
    moveTaskProps: (task, newProjectList, listsObjects) => dispatch(moveTask(task, newProjectList, listsObjects))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
