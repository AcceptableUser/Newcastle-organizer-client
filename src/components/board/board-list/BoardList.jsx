import React, {useState, useRef} from "react";
import "./BoardList.scss"
import TaskAdder from "./Subcomponents/task-adder/TaskAdder"
import Task from "./Subcomponents/task/Task"
import TitleList from "./Subcomponents/title-list/TitleList"

const data = [
  {
    title: "group 1",
    items: ["List 1", "List 2", "List 3", "List 4", "List 5"]
  },
  {
    title: "group 2",
    items: ["List 6", "List 7", "List 8", "List 9"]
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
      console.log("NOT THE SAME", params)
    }
  }

  return (
    <div className="list__wrapper">
    {list.map((group, groupIndex) => (
      <div key={group.title} className="list">
        <TitleList />
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