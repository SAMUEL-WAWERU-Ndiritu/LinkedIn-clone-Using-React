import React from 'react'
import './Sidebar.css'
import SidebarTop from './SidebarTop'
import SidebarOptions from './SidebarOptions'


function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <SidebarTop name="Samuel Nderitu" email="samuelnderitu495@gmail.com"/>
                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <h4>Who viewed you</h4>
                        <p>7345</p>
                        
                    </div>
                    <div className="sidebar__stat">
                    <h4>Who viewed on Post</h4>
                        <p>7345</p>
                     </div>
                </div>
            </div>
            <div className="sidebar__bottom">
                <h4>Return</h4>
                <SidebarOptions title="React Js"/>
                <SidebarOptions title="Programming"/>
    

            </div>
        </div>
    )
}





export default Sidebar