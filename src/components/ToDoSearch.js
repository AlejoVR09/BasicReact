import React from "react";
import '../css/ToDoSearch.css'
import { ToDoContext } from "../todoContext/ToDoContext";

function ToDoSearch(){
    const {
        setSearchValue,
        searchValue,
      } = React.useContext(ToDoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    
    return (
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />

    );
}

export {ToDoSearch};