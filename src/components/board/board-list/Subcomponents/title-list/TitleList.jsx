import React, {useState} from "react";
import Menu from "../../../../html/SVG/Menu";
import "./TitleList.scss";
import {connect} from 'react-redux';
import {deleteProjectList, editProjectList} from "../../../../../actions";

const TitleList = ({
                       list,
                       editProjectList,
                       deleteProjectList,
                   }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const editTitleWithEnterPressed = (e) => {
        if (e.key === "Enter") {
            list.title = e.target.value.replace(/[\r\n\v]+/g, "");
            editProjectList(list);
            setIsEdit(false);
        }
    }
    const removeProjectListOnClick = () => {
        deleteProjectList(list.id)
    }
    return (
        <div className="title__list__wrapper">
            <div className="title__list__title__wrapper">
                <div onClick={() => {
                    setIsEdit(true)
                }} className={isEdit ? 'title__list--active' : 'title__list'}>
                    <h2 className="title__list__h2">{list.title}</h2>

                    <textarea
                        className="title__list__textarea"
                        rows="1"
                        wrap="hard"
                        maxLength="35"
                        defaultValue={list.title}
                        onKeyPress={editTitleWithEnterPressed}
                    >
        </textarea>
                </div>
                <div className="title__list__menu__wrapper">
                    <div className="title__list__menu" onClick={() => {
                        setIsMenuOpen(prevState => !prevState)
                    }}>
                        <Menu/>
                    </div>
                    <div className={isMenuOpen ? 'title__list__menu__options--active' : 'title__list__menu__options'}
                         onClick={removeProjectListOnClick}>
                        <input
                            className="title__list__menu__options__delete"
                            type="button"
                            value="Delete List"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        editProjectList: (list) => {
            dispatch(editProjectList(list))
        },
        deleteProjectList: (id) => {
            dispatch(deleteProjectList(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TitleList);
