import React from "react";
import { FaHome, FaUser, FaPlus } from 'react-icons/fa';
import "../styles/NavBar.css"

const Navbar = () => {
 
  return (
    <div class="navbar-container">
    <nav className="navbar">
       <div className="navbar-left">
           <img src= {require("../img/Logo.png")} alt="Logo" />
       </div>
 
       <div className="navbar-center"></div>
       <div className="navbar-right">
         <ul className="nav-items">
           <li className="nav-item">
             <a href="/">
               <FaHome />
             </a>
           </li>
           <li className="nav-item">
             <a href="/create-entry">
               <FaPlus />
             </a>
           </li>
           <li className="nav-item dropdown">
             <a href="#">
               <FaUser />
             </a>
             <div className="dropdown-content">
               <a href="#">Profile</a>
               <a href="#">Settings</a>
               <a href="#">Logout</a>
             </div>
           </li>
         </ul>
       </div>
     </nav>
 </div>
  );
};
export default Navbar;
