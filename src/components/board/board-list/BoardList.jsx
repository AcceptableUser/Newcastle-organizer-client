import React, {useState, useRef} from "react";
import "./BoardList.scss"
import TaskAdder from "./Subcomponents/task-adder/TaskAdder"
import Task from "./Subcomponents/task/Task"
import TitleList from "./Subcomponents/title-list/TitleList"

const data = [
  {
    title: "To do",
    items: ["Code migration and merge", "JS Hint implementation"]
  },
  {
    title: "In progress",
    items: ["Request Costum feedback", "CDD refactoring", "Dashboard improvements"]
  },
  {
    title: "Pending",
    items: ["Request custom feedback"]
  },
  {
    title: "Review",
    items: ["Email Newsletter", "Templates translation"]
  },
  {
    title: "Finished",
    items: ["Code migration and merge"]
  }
]

const BoardList = () => {
  const [list, setList] = useState(data)
  const [dragging, setDragging] = useState(false)

  const dragItem = useRef()
  const dragNode = useRef()

  const handleDragStart = (e, params) => {
    dragItem.current = params
    dragNode.current = e.target
    dragNode.current.addEventListener("dragend", handleDragEnd)
    setTimeout(() => {
      setDragging(true)
    }, 0)
  }

  const handleDragEnd = () => {
    setDragging(false)
    dragNode.current.removeEventListener("dragend", handleDragEnd)
    dragItem.current = null
    dragNode.current = null
  }

  const changeItemStyle = (params) => {
    const currentItem = dragItem.current
    if (currentItem.groupIndex === params.groupIndex && currentItem.itemIndex === params.itemIndex) {
      return "task__wrapper--active"
    }
    return "task__wrapper"
  }

  const handleDragOverItem = (e, params) => {
    const currentItem = dragItem.current
    if (currentItem.groupIndex !== params.groupIndex || currentItem.itemIndex !== params.itemIndex) {
      setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList))
        newList[params.groupIndex]
          .items.splice(params.itemIndex, 0, newList[currentItem.groupIndex]
          .items.splice(currentItem.itemIndex, 1)[0])
        dragItem.current = params
        return newList
      })
    }
  }

  return (
    <div className="list__wrapper">
    {list.map((group, groupIndex) => (
      <div
        key={group.title}
        className="list"
        onDragEnter={
          dragging && group.items.length === 0 ? (e) => { handleDragOverItem(e, {groupIndex, itemIndex: 0}) }:null
        }
      >
        <TitleList title={group.title}/>
          {group.items.map((item, itemIndex) => (
            <Task
              key={item}
              item={item}
              handleDragStart={(e) => { handleDragStart(e, { groupIndex, itemIndex }) }}
              handleDragOverItem={
                dragging ? (e) => { handleDragOverItem(e, { groupIndex, itemIndex }) }:null
              }
              activeClass={dragging?changeItemStyle({groupIndex, itemIndex}):"task__wrapper"}
            />
          ))}
        <TaskAdder />
        </div>
      ))}
    </div>
  )
}

export default BoardList