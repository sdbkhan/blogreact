import React from 'react'
import Card from '../UI/Card'
import "./style.css"
import blogPost from "../../data/blog.json";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {
    const[posts, setPosts]= useState([]);

    useEffect(()=>{
      const posts= blogPost.data;
      
 setPosts(posts);
    },posts);

  return(
      <div className="sidebarContainer">
          <Card style={{marginBottom:"20px"}}>
              <div className="cardHeader" >
              <span>About Us</span>
              </div>
              <div className="profileImage">
                  <img src="https://www.framecad.com/media/1229/structure_header_081018_jr.jpg?anchor=center&mode=crop&width=1920&height=1080&rnd=131871456100000000" alt=""/>
              </div>
              <div className="aboutustext">
                 <p className="aboutustextpara" >My Name is Shadab Khan, I am a Fitness Blogger.....)</p>


              </div>
              </Card>
           
              <Card  style={{marginBottom:"20px", padding:"20px",boxSizing:"border-box"}}>
              <div className="cardHeader" >
              <span>Social Link</span>
              </div>
              </Card>
              <Card>
              <div className="cardHeader" >
              <span>Recent Posts</span>
              </div>  
              <div className="recentPosts">
                  {
                      posts.map(post=>{
              return(
                  <NavLink key={post.id}to={`/post/${post.id}`}>
                   <div className="recentPost">
                      <h3>{post.blogTitle}</h3>
                      <span>
                          {post.postedOn}
                      </span>
                  </div>
                  </NavLink>
                
)
                      })
                  }
                 
              </div>
              </Card>
      </div>
    
   )

 }

export default Sidebar