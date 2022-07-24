import React from "react";

export default function MovieCard(props){

    return(
           
        <div className="movie">
         {props.movies.map((movie, index) => ( 
        
            <img src={movie.Poster} alt="movie" /> 
                    
            ))} 
            
        </div>   
      
    )
}