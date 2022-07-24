import React from "react";
import {CgDarkMode} from "react-icons/cg";
import {MdAccountCircle} from "react-icons/md";
import {BsSearch} from "react-icons/bs";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-primary p-4 text-white">
    
    <div className="container justified">
       
         <CgDarkMode color="white" size={30} />

        <div className="wrapper">
        <BsSearch />
        <input 
        className="nav-input" 
        
        />
        </div>   
        <div className="nav-login">
            <h6>LOGIN</h6>
            < MdAccountCircle color="white" size={30} />

        </div>
    </div>



   </nav>
    )
}