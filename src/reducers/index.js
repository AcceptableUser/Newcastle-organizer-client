import {combineReducers} from "redux";
import {projectListReducer} from "./fetchProjectReducer";
import {taskReducer} from "./taskReducer";

export default combineReducers({
    currentProject: projectListReducer,
    task: taskReducer
})