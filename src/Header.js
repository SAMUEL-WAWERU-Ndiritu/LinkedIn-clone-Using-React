import React from 'react'
import './Header.css'
import './all'
import HeaderOptions from './HeaderOptions'
import din from'./images/din.png'
import sam from './images/sam.jpg'



function Header(){
    return(

        <div className='container header'>
            <div className='row'>
             <div className='col-md-6 col-sm-6'>
                <div className="header__left">
                <img src={din} alt=""/>
                <div className="header__search">
                    <i className="fas fa-search"></i>
                    <input type="search" name="searchbar"/>
                </div>

                </div>
            </div>
            <div className='col-md-6 col-sm-6'>
            <div className="header__right">
                <HeaderOptions Icon="fa fa-home" title="Home"/>
                <HeaderOptions Icon="fa fa-tasks" title="My work"/>
                <HeaderOptions Icon="fa fa-briefcase" title="Jobs"/>
                <HeaderOptions Icon="fa fa-comments" title="Messaging"/>
                <HeaderOptions Icon="fa fa-envelope" title="Notification"/>
                <div>
                <img src={sam} alt=""/> 
                <p><small>me</small></p>  
                </div>
                </div>
                </div>
                </div>
                </div>)
              

          
}
export default Header