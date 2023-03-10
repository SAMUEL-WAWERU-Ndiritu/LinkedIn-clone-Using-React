import React from 'react'
import './SidebarTop.css'
import sam from './images/sam.jpg'

function SidebarTop({name,email}){
    return (
        <div className="sidebarTop">
            <img src={sam} alt=""/>
            <h2>{name}</h2>
            <h4>{email}</h4>
        </div>
    )
}
export default SidebarTop