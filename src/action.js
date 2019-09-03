import {
    CHANGE_SEARCH_INPUT,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

export const setSearchInput = (text) => ({
    type: CHANGE_SEARCH_INPUT,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err}))
}