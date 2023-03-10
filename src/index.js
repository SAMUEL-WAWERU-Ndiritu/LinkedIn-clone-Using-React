import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './bootstrap.min.css'
import Widget from './Widget'

function App (){
    return(
       <div className="container">
           <div className="row">
               <div className="app">
               <Header/>
               </div>
           </div>
           <div className='row'>
               <div className='col-md-4 col-sm-4'>
                   <Sidebar/>
               </div>
               <div className='col-md-4 col-sm-4'>
                   <Feed/>
               </div>
               <div className='col-md-4 col-sm-4'>
                   <Widget/>
               </div>
           </div>
       </div>

    )
}
ReactDom.render(<App/>,document.getElementById("root"))
