import { CHANGE_TODO_ITEM, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "./actionTypes";
const defaultState = {
    inputValue: '',
    list: []
}
export default (state = defaultState, action) => {
    console.log(state)
    if (action.type === CHANGE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}