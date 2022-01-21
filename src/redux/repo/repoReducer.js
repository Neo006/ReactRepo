import { 
    SET_REPOS,
    SET_IS_FETCHING,
    SET_CURRENT_PAGE
} from "./types"

const initialState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0
}

export default function repoReducer(state = initialState, action) {
    switch(action.type) {
        case SET_REPOS:
            return {
                ...state, 
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state
    }
}