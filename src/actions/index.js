import {
    CREATE_PROJECT_LIST,
    CREATE_TASK,
    DELETE_PROJECT_LIST,
    DELETE_TASK,
    EDIT_PROJECT_LIST,
    FETCH_PROJECT_LISTS,
    MOVE_TASK
} from "./types";
import axios from '../api/server'


export const fetchProjectLists = () => async dispatch => {
    try {
        const response = await axios.get('/projects/1/projectLists');
        dispatch({type: FETCH_PROJECT_LISTS, payload: response.data});
    } catch (e) {
        console.log(e)
    }
}

export const createProjectList = (newProjectList) => async dispatch => {
    try {
        const response = await axios.post('/projects/1/projectLists', newProjectList);
        Object.assign(newProjectList, {id: response.data.id});
        dispatch({type: CREATE_PROJECT_LIST, payload: newProjectList})
    } catch (e) {
        console.log(e)
    }
}

export const editProjectList = (projectList) => async dispatch => {
    try {
        await axios.patch('/projects/1/projectLists', projectList);
        dispatch({type: EDIT_PROJECT_LIST, payload: projectList})
    } catch (e) {
        console.log(e)
    }
}

export const deleteProjectList = (id) => async dispatch => {
    try {
        await axios.delete(`/projects/1/projectLists/${id}`);
        dispatch({type: DELETE_PROJECT_LIST, payload: id})
    } catch (e) {
        console.log(e)
    }
}

export const createNewTask = (projectListId, newTask) => async dispatch => {
    try {
        const response = await axios.post(`/projectLists/${projectListId}/tasks`, newTask);
        const deadlineDate = newTask.deadlineDate.getFullYear() + '-' + newTask.deadlineDate.getMonth() + '-' + newTask.deadlineDate.getDate()
        Object.assign(newTask, {id: response.data.id, deadlineDate: deadlineDate})
        dispatch({
            type: CREATE_TASK, payload: {
                projectListId,
                newTask
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const deleteTask = (projectListId, taskId) => async dispatch => {
    try {
        await axios.delete(`/projectLists/${projectListId}/tasks/${taskId}`);
        dispatch({
            type: DELETE_TASK, payload: {
                projectListId,
                taskId
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const moveTask = (newProjectListId, task, listsObjects) => async dispatch => {
    try {
        await axios.post(`/projectLists/${newProjectListId}/tasks`, task);
        dispatch({
            type: MOVE_TASK, payload: listsObjects
        })
    } catch (e) {
        console.log(e)
    }
}