import React from 'react'

function Repo(props) {
    const {repo} = props;

    return (
        <div className="repo">
            <div className="repo__header">
                <div>{repo.name}</div>
                <div>{repo.stargazers_count}</div>
            </div>
            <div>{repo.updated_at}</div>
            <a href={repo.html_url}>link</a>
        </div>
    )
}

export default Repo