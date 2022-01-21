import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRepos } from '../../axios/axios'
import { setCurrentPage } from '../../redux/repo/actions'
import { createPages } from '../../utils/pagesCreator'
import Pagination from './pagination/Pagination'
import Repo from './repo/Repo'

function Main() {
    const repos = useSelector(state => state.repo.items)
    const isFetching = useSelector(state => state.repo.isFetching)
    const currentPage = useSelector(state => state.repo.currentPage)
    const perPage = useSelector(state => state.repo.perPage)
    const totalCount = useSelector(state => state.repo.totalCount)
    const dispatch = useDispatch() 
    const [searchValue, setSearchValue] = useState('')
    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    },[dispatch, searchValue, perPage, currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue))
    }

    return (
        <div>
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" />
                <button onClick={() => searchHandler()}>search</button>
            </div>

            {
                !isFetching 
                ?
                    repos.map((repo, i) => 
                        <Repo
                            key={i} 
                            repo={repo} 
                        />
                    )
                :
                    <div className="fetching"></div>
            }

            <Pagination 
                pages={pages}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Main;