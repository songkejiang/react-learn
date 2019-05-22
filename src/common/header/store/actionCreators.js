import { SEARCH_BLUR, SEARCH_FOCUSED } from './actionTypes'
import axios from 'axios'

export const searchFocus = () => ({
    type: SEARCH_FOCUSED
})
export const searchBlur = () => ({
    type: SEARCH_BLUR
}) 
export const getList = () => {
    return (dispatch) => {
        console.log(22)
        axios.get('/api/headerList.json').then(() => {

        }).catch(() => {

        })
    }
}