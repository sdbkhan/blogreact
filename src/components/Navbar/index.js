import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import "./style.css";
import Diamond from '../../assets/icons/search.png';


/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
const[search, setSearch]=useState(false);

   const submitSearch=(e)=>{
     e.preventDefault();
     alert("searched");
   }

   const openSearch=()=>{
     setSearch(true);
   }

   const searchClass=search?"searchInput active":"searchInput";
  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home </NavLink></li>
            <li><NavLink to="/about-us">AboutUs </NavLink></li>
            <li><NavLink to="/post">Post</NavLink></li>
            <li><NavLink to="/contact-us">ContactUs</NavLink></li>
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}> 
            <input type="text" className={searchClass}placeholder="search"/>
            <img onClick={openSearch} className="searchicon" src={Diamond} alt="search"/>
            </form>
        </div>
    </div>
   )

 }

export default Navbar