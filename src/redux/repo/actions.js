import { 
    SET_REPOS,
    SET_IS_FETCHING, 
    SET_CURRENT_PAGE
} from "./types"

export const setRepos = (repos) => {
    return {type: SET_REPOS, payload: repos}
}

export const setIsFetching = (bool) => {
    return {type: SET_IS_FETCHING, payload: bool}
}

export const setCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, payload: page}
}