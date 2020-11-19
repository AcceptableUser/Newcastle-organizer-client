import React from "react";
import "./FloatingTaskMenu.scss";
import profile from "../../../../../assets/images/profile.png";
import Close from "../../../../html/SVG/Close";

const FloatingTaskMenu = () => {
  return (
    <div className="floating-menu__background">
      <div className="floating-menu__container">
        <section className="floating-menu__section">
          <div className="floating-menu__section__title__wrapper">
            <textarea rows="1" className="floating-menu__section__title">
              Task title
            </textarea>
            <div className="floating-menu__section__close-button__wrapper">
              <Close />
            </div>
          </div>
        </section>
        <div className="floating-menu__extras">
          <div className="floating-menu__interactions__wrapper">
            <section className="floating-menu__section">
              <h3 className="floating-menu__section__sub-title">Description</h3>
              <textarea
                className="floating-menu__section__description"
                rows="2"
                placeholder="Add a more detailed description..."
              ></textarea>
            </section>
            <section className="floating-menu__section">
              <h3 className="floating-menu__section__sub-title">Comments</h3>
              <div className="floating-menu__section__comment__wrapper">
                <img
                  className="floating-menu__section__comment__image"
                  src={profile}
                  alt="user"
                />
                <input
                  className="floating-menu__section__comment__input"
                  type="text"
                  name=""
                  id=""
                  placeholder="Write a comment..."
                />
              </div>
            </section>
          </div>
          <aside className="floating-menu__add-ons">
            <h4 className="floating-menu__add-ons__title">Add to task</h4>
            <ul className="floating-menu__add-ons__list">
              <li className="floating-menu__add-ons__list__item">Members</li>
              <li className="floating-menu__add-ons__list__item">Labels</li>
              <li className="floating-menu__add-ons__list__item">Checklist</li>
              <li className="floating-menu__add-ons__list__item">Due date</li>
              <li className="floating-menu__add-ons__list__item">Attachment</li>
              <li className="floating-menu__add-ons__list__item">Cover</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FloatingTaskMenu;
