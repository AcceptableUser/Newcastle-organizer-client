import React from "react";
import "./FloatingTaskMenu.scss";
import profile from "../../../../../assets/images/profile.png";
import Close from "../../../../html/SVG/Close";

const FloatingTaskMenu = () => {
  return (
    <div className="floating-menu__background">
      <div className="floating-menu__container">
        <div className="floating-menu__section">
          <div className="title__container">
            <textarea rows="1" className="title">
              Task title
            </textarea>
            <div className="close">
              <Close />
            </div>
          </div>
        </div>
        <div className="task-extras__wrapper">
          <div className="task-extras__interaction">
            <div className="floating-menu__section">
              <h3>Description</h3>
              <textarea
                rows="4"
                placeholder="Add a more detailed description..."
              ></textarea>
            </div>
            <div className="floating-menu__section">
              <h3>Comments</h3>
              <div className="comment-input">
                <img src={profile} width="38px" height="38px" alt="user" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Write a comment"
                />
              </div>
            </div>
          </div>
          <div className="task-extras__features">
            <h4>Add to card</h4>
            <ul>
              <li>Members</li>
              <li>Labels</li>
              <li>Due date</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTaskMenu;
