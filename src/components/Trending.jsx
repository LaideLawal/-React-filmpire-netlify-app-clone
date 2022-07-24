import React from "react";

export default function Trending(){

    const [trend, setTrend] = React.useState([])

   

    return (

        <div className="main-trending">
            <img 
            src="https://m.media-amazon.com/images/M/MV5BZjA3ZjhiODUtN2QxYy00MzlhLWFlYzYtZTg1ODQ2YjM0YjY3XkEyXkFqcGdeQXVyMzM3ODE4MzY@._V1_SX300.jpg" 
            alt="trending"
            />
            
        </div>
    )
}