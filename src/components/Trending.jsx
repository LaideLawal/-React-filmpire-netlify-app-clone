import React from "react";

export default function Trending(){

    const [trend, setTrend] = React.useState([])

   

    return (
        <>
        <div className="main-trending">
            <img 
            src="https://m.media-amazon.com/images/M/MV5BMTAwMDQwMjAwMDBeQTJeQWpwZ15BbWU3MDc4NTAyNTc@._V1_SX300.jpg"
            alt="trending"
            />
          
        </div>
        <div className="text-content">
            <h4>Working Title Films</h4>
            <p>Working Title has been active in television production since the beginning of the 1990s. In February 2010, Working Title officially launched its television division as a joint venture with parent company NBCUniversal, itself owned by Comcast. Since then, they have produced content for both British and American television</p>
            </div> 
        </>
    )
}