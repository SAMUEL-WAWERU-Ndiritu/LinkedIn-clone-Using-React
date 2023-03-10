import React,{useEffect, useState} from 'react'
import './Feed.css'
import './all'
import HeaderOptions from './HeaderOptions'
import FeedText from './FeedText'
import { db } from './firebase'
import sam from './images/sam.jpg'





function Feed(){
const [posts,setPosts]=  useState([]);
const [input,setInput]= useState("");
useEffect(
    ()=>{
        db.collection('posts').onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map(
                (doc)=>({
                    id:doc.id,
                    data:doc.data()
                })
            ) ) ) },[])

   const sendPost = e => {
       e.preventDefault();
       db.collection('posts').add({
           name:"Samuel",
           description:"This is nice",
           message:input,
           photoUrl:"",
       });
       setInput("");
   }

    return(
        <div className="feed">
            <div className="feed__textbar">
                <div className="feed__content">
                    <img src={sam} alt=""/>
                    <form>
                        <i className="fas fa-pen"></i>
                       <input type="text" onChange={(e) => setInput(e.target.value)} name="text"/> 
                        <button value= {input} onClick={sendPost} type="submit"></button>
                    </form>
                    </div>
                    
                    <div className="Feed__options">
                      <HeaderOptions Icon="fas fa-file-video-o" title="Video"/>
                      <HeaderOptions Icon="fa fa-calendar" title="Event"/>
                      <HeaderOptions Icon="fa fa-pencil-square-o" title="Write article"/>
                    </div>

            </div>

          
           
            <div className="feed__text">
            {
                posts.map(
                    ({id,data:{name,description,message,photoUrl}})=>(
                        <FeedText
                        key={id}
                        name={name}
                        description={description}
                        message= {message}
                        photoUrl={photoUrl} 
                        />
                    )
                )
            }
            </div>
        </div>
    )
}
export default Feed