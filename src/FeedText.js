import React from 'react'
import './FeedText.css'
import HeaderOptions from './HeaderOptions'

function FeedText({name,description,message,photoUrl}){
    return(
        <div className="FeedText">
            <h2>{name}</h2>
            <h4>{description}</h4>
            <p>{message}</p>
            <p>{photoUrl}</p>
            <div className="FeedText__options">
                      <HeaderOptions Icon="fa fa-thumbs-up" title="Like"/>
                      <HeaderOptions Icon="fa fa-comment" title="Comment"/>
                      <HeaderOptions Icon="fa fa-share-alt" title="Share"/>
                      <HeaderOptions Icon="fa fa-share-square" title="Send"/>

                    </div>

        </div>
    )
}
export default FeedText