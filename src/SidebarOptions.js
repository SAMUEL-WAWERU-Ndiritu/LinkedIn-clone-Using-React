import React from 'react'
import './SidebarOptions.css'


function SidebarOptions({title}){
    return(
     <div className="SidebarOptions">
         <span className ="SidebarOptions__hash">
             #
         </span>
         <h4>{title}</h4>
     </div>
    )
}
export default SidebarOptions