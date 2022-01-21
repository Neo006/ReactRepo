import React from 'react'
import { setCurrentPage } from '../../../redux/repo/actions'
import { useDispatch } from 'react-redux'

function Page({page, currentPage}) {
    const dispatch = useDispatch()

    return (
        <span 
            className={currentPage === page ? "current__page" : "page"} 
            onClick={() => dispatch(setCurrentPage(page))}
        >
            {page}
        </span>
    )
}

export default Page