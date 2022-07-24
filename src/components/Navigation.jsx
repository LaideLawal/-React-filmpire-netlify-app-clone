import React from "react";

export default function Navigation(){

    const [counter, setCounter] = React.useState(1)

    function prevSet(){
        setCounter(prevValue => prevValue === 1? prevValue = 1 : prevValue - 1)
    }

    function nextSet(){
        setCounter(prevValue => prevValue + 1)
    }

    return  (
        <div className="navigation">
            <button onClick={prevSet} className="btn btn-primary">PREV</button>
            <h2>{counter}</h2>
            <button onClick={nextSet} className="btn btn-primary">NEXT</button>
        </div>
    )
}