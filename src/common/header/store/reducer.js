import { SEARCH_BLUR, SEARCH_FOCUSED } from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focused: false
})
export default (state = defaultState, action) => {
    if(action.type===SEARCH_FOCUSED) {
        return state.set('focused', true)
    }
    if(action.type===SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}