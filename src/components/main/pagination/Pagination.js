import React from 'react'
import Page from './Page'

function Pagination({pages, currentPage}) {
    return (
        <div className="pagination">
            {
                pages.map((page, i) =>
                    <Page
                        key={i}
                        page={page}
                        currentPage={currentPage}
                    />
                )
            }
        </div>
    )
}

export default Pagination