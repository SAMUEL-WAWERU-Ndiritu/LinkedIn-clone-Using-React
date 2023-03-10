import React from 'react'
import './HeaderOptions.css'


function HeaderOptions({Icon,title}){
    return(
      <div className="headerOptions">
          <h4> <i class={Icon} aria-hidden="true"></i></h4>
          <h4>{title}</h4>
      </div>
    )
}
export default HeaderOptions