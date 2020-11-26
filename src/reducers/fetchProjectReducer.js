import {
    CREATE_PROJECT_LIST,
    CREATE_TASK,
    DELETE_PROJECT_LIST,
    DELETE_TASK,
    EDIT_PROJECT_LIST,
    FETCH_PROJECT_LISTS,
    MOVE_TASK
} from "../actions/types";

const initialBoard = {
    projectLists :  []
}

export const projectListReducer = (state = initialBoard, action) => {
    const newArr = [...state.projectLists]
    switch (action.type) {
        case CREATE_PROJECT_LIST:
            return {
                projectLists: [...state.projectLists, action.payload]
            };
        case EDIT_PROJECT_LIST:
            return state;
        case DELETE_PROJECT_LIST:
            newArr.splice(newArr.findIndex((e) => e.id === action.payload), 1)
            return {
                projectLists: newArr
            };
        case FETCH_PROJECT_LISTS:
            return {
                projectLists: action.payload
            }
        case CREATE_TASK:
            const index = newArr.findIndex((e) => e.id === action.payload.projectListId)
            newArr[index].tasks.push(action.payload.newTask)
            return {
                projectLists: newArr
            }
        case DELETE_TASK:
            const i = newArr.findIndex((e) => e.id === action.payload.projectListId)
            newArr[i].tasks.splice(newArr[i].tasks.findIndex((e) => e.id === action.payload.taskId), 1)
            return {
                projectLists: newArr
            }
        case MOVE_TASK:
            return {
                projectLists: action.payload
            }
        default:
            return state;
    }
};
