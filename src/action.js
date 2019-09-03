import {CHANGE_SEARCH_INPUT} from './constants'

export const setSearchInput = (text) => ({
    type: CHANGE_SEARCH_INPUT,
    payload: text
})
