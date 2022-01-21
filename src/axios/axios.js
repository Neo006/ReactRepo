import axios from 'axios'
import {setIsFetching, setRepos} from '../redux/repo/actions'

export const getRepos = (searchQuery = 'starts:%3E1', currentPage, perPage) => {
    if(searchQuery.trim() === '') {
        searchQuery = 'starts:%3E1'
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        await axios(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&page=${currentPage}&per_page=${perPage}`)
        .then(res => {
            dispatch(setRepos(res.data))
        })
    }
}