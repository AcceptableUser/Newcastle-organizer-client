import {
    CREATE_PROJECT_LIST,
    CREATE_TASK,
    DELETE_PROJECT_LIST,
    DELETE_TASK,
    EDIT_PROJECT_LIST,
    FETCH_PROJECT_LISTS,
    MOVE_TASK
} from "../actions/types";

export const projectListReducer = (state = [], action) => {
    const newArr = [...state]
    switch (action.type) {
        case CREATE_PROJECT_LIST:
            return [...state, action.payload];
        case EDIT_PROJECT_LIST:
            return state;
        case DELETE_PROJECT_LIST:
            newArr.splice(newArr.findIndex((e) => e.id === action.payload), 1)
            return newArr;
        case FETCH_PROJECT_LISTS:
            return action.payload
        case CREATE_TASK:
            const index = newArr.findIndex((e) => e.id === action.payload.projectListId)
            newArr[index].tasks.push(action.payload.newTask)
            return newArr
        case DELETE_TASK:
            const i = newArr.findIndex((e) => e.id === action.payload.projectListId)
            newArr[i].tasks.splice(newArr[i].tasks.findIndex((e) => e.id === action.payload.taskId), 1)
            return newArr
        case MOVE_TASK:
            return action.payload
        default:
            return state;
    }
};
