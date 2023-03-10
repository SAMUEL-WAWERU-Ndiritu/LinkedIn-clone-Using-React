import React from 'react'
import './News.css'

function News({title,description,message}) {
    return (
        <div className="news">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>{message}</p>
        </div>
    )
}

export default News
