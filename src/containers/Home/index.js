import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/UI/Card";
import RecentPosts from "./RecentPosts";
import "./style.css";
const SideImage=props=>{
  return(
    <div style={{height:`${props.height}px`}}>
      <img src={props.src} alt=""/>
    </div>
  );
}


const ImageGallary=props=>(

  <div className="galleryPost"  style={props.gallerystyle}>
             
  <section style={{width:"70%"}} >
     <div>
<img src={"https://i.pinimg.com/originals/8f/97/e0/8f97e00bc0b0ab54ec982ad310bfd488.jpg"} alt=""/>
         </div>
     </section>
     <section className="sideImageWrapper" style={{width:"30%"}} >
     <SideImage  height={props.sideImageHeight}
     src={"http://webfume.in/gymjunkiesmain/wp-content/uploads/2017/03/Hottest-Fitness-Instagram-Accounts.png"}
     />
          <SideImage  height={props.sideImageHeight}
     src={"https://themeforest.img.customer.envatousercontent.com/files/147543326/00_large_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=c553aaedf6353992141cf9da48cc0ba2"}
     />
       
       <SideImage  height={props.sideImageHeight}
     src={"https://image.freepik.com/free-vector/crossfit-man-landing-page-with-photo_23-2148264602.jpg"}
     />
       
     </section>
  </div>
);



const Home = props=>{

const galleryHeight=450;
 const gallerystyle={
 height:galleryHeight+"px",
 overflow:"hidden"
 }
const sideImageHeight= galleryHeight/3;

    return (
        <div>
           <Card>
           <ImageGallary
              largeWidth="70%"
              smallWidth="30%"
              sideImageHeight={sideImageHeight}
              gallerystyle={gallerystyle}
              ImagesArray={[
                
              ]}
              />
           
           </Card>
           <section className="HomeContainer">
              <RecentPosts style={{width:"70%",color:"#6c6c6c"}}/>
               <Sidebar/>
           </section>
        </div>
    )
}
export default Home