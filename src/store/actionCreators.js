import { CHANGE_TODO_ITEM, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => ({
     type: CHANGE_TODO_ITEM,
     value
})

export const getBttonClickAction = () => ({
    type: ADD_TODO_ITEM,
    value: ''
})
export const getItemDelete = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})