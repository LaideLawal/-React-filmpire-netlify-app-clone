import React from "react";
import {BsFilm} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";
import {MdLaptop} from "react-icons/md";


export default function Categories(props){
    
   
    return (
        <div className="category">
            <h6>Categories</h6>
            <div>
               <div className="list" >< BsFilm size={30}/><span className="cat-list">Popular </span> </div> 
               <div className="list" >< AiOutlineStar size={30}/><span className="cat-list">Top Rated </span> </div> 
               <div className="list" >< MdLaptop size={30}/><span className="cat-list">Upcoming </span> </div> 
            </div>
        </div>
    )
    }
