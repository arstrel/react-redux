import {CHANGE_SEARCH_INPUT} from './constants'


const initialState = {
    searchInput: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_INPUT:
            //also can do {...state, {searchInput: action.payload}}
            return Object.assign({}, state, {searchInput: action.payload})
        default:
            return state;
    }
}