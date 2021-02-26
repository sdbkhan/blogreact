import React from 'react'
import Card from '../UI/Card';
import  "./style.css";
import img1 from "../../BlogImages/img1.png";
import img2 from "../../BlogImages/img2.png";
import img3 from "../../BlogImages/img3.png";
import img4 from "../../BlogImages/img4.png";
import img5 from "../../BlogImages/img5.png";
import { useEffect, useState } from 'react';
import blogPost from "../../data/blog.json"

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  const[post, setPost]= useState({});
   const[postId, setPostId]=useState("");

   

  useEffect(()=>{
    const postId= props.match.params.postId;
     const post=blogPost.data.find(post => post.id==postId)
     setPost(post);
     setPostId(postId);
  },[post, props.match.params.postId]);

  return(
      <div className="blogPostContainer">
    <Card>
<div className="blogHeader">
        <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">Posted on {post.postedOn} by {post.author}</span>
        </div>
        <div className="postimgcontainer">
            <img  src={post.blogImage} alt="Post Image"/>
        </div>
        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>

        </div>
    </Card>
    </div>

   )

 }

export default BlogPost