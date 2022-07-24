import React from "react";
import {GiExtractionOrb} from "react-icons/gi";
import {FaRegClock} from "react-icons/fa";
import {RiBearSmileLine} from "react-icons/ri";
import {BsEmojiLaughing} from "react-icons/bs";
import {GiPistolGun} from "react-icons/gi"
import {BsCameraReels} from "react-icons/bs";


export default function Genres(){
    
   
    return (
        <div className="category">
            <h6>Genres</h6>
            <div>
               <div className="list" >< GiExtractionOrb size={30}/><span className="cat-list">Action </span> </div> 
               <div className="list" >< FaRegClock size={30}/><span className="cat-list">Adventure</span> </div> 
               <div className="list" >< RiBearSmileLine size={30}/><span className="cat-list">Animation </span> </div> 
               <div className="list" >< BsEmojiLaughing size={30}/><span className="cat-list">Comedy </span> </div> 
               <div className="list" >< GiPistolGun size={30}/><span className="cat-list">Crime</span> </div> 
               <div className="list" >< BsCameraReels size={30}/><span className="cat-list">Documentary </span> </div> 
               <div className="list" >< GiExtractionOrb size={30}/><span className="cat-list">Drama </span> </div> 
               <div className="list" >< FaRegClock size={30}/><span className="cat-list">Adventure</span> </div> 
               <div className="list" >< RiBearSmileLine size={30}/><span className="cat-list">Animation </span> </div> 
               <div className="list" >< GiExtractionOrb size={30}/><span className="cat-list">Comedy </span> </div> 
               <div className="list" >< FaRegClock size={30}/><span className="cat-list">Crime</span> </div> 
               <div className="list" >< RiBearSmileLine size={30}/><span className="cat-list">Documentary </span> </div> 
            </div>
        </div>
    )
    }
