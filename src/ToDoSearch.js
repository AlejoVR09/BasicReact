import React from "react";
import './css/ToDoSearch.css'

function ToDoSearch( {searchValue, setSearchValue} ){
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