import React, {useState} from "react";
import Calendar from "../../../../html/SVG/Calendar";
import Chat from "../../../../html/SVG/Chat";
import File from "../../../../html/SVG/File";
import Menu from "../../../../html/SVG/Menu";
import profile from "../../../../../assets/images/profile.png";
import "./Task.scss";

const Task = ({
                  task,
                  handleTaskClick,
                  handleDeleteTask,
              }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="task__wrapper">
            <div className="task__main__wrapper">
                <div className="task__title__wrapper">
                    <h3 onClick={handleTaskClick} className="task__title">
                        {task.title}
                    </h3>
                    <div>
                        <div>
                            <div
                                className="task__options__button__wrapper"
                                onClick={() => {
                                    setIsMenuOpen(prevState => !prevState)
                                }}
                            >
                                <Menu/>
                            </div>
                            <div className={isMenuOpen ? 'task__options__button__menu__options--active' : 'task__options__button__menu__options'} onClick={handleDeleteTask}>
                                <input
                                    className="task__options__button__menu__options__delete"
                                    type="button"
                                    value="Delete Task"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task__information__wrapper">
                    <div className="task__information">
                        <File/>
                        <p className="task__information__details">{task.attachments.length}</p>
                    </div>
                    <div className="task__information">
                        <Chat/>
                        <p className="task__information__details">{task.comments.length}</p>
                    </div>
                    <div className="task__information">
                        <Calendar/>
                        <p className="task__information__details">{task.deadlineDate}</p>
                    </div>
                </div>
            </div>
            <div className="task__footer__wrapper">
                {
                    task.labels && task.labels.map(label => {
                        return (
                            <p key={label} className="task__footer__label">{label}</p>
                        )
                    })
                }
                <div className="task__footer__image__wrapper">
                    <img className="task__footer__image" src={profile} alt="user"/>
                </div>
            </div>
        </div>
    );
}


export default Task;
