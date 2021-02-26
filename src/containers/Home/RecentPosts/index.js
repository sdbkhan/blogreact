import React from 'react'
import './style.css';
import Card from "../../../components/UI/Card";

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
    <Card style={{marginBottom:"20px"}}>

    <div className="postImageWrapper">
<img src={"https://assets.website-files.com/5bee2dee67d34caed2a30658/5c183054caac5f3beceacbab_Personal-Trainer-Bicep-Curl-In-Gym.jpg"} alt />
    </div>
    <div style={{textAlign:"center"}}>
        <span>
            Featured
        </span>
        <h2> Fitness myntra to Live Fit</h2>
        <span>posted on july 21, 2021 by Rahul blogging Tips</span>
        <p> Midst first , you are multiply divided, there are no excusees to fit</p>
        <button>Read more</button>
    </div>
</Card>

    </div>
   )

 }

export default RecentPosts