import React from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBox(props){
    return(
        <div className="wrapper">
        <BsSearch size={20} color="white"  />
        <input
				className="form-control "
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				
			></input>
        </div>
    )
}