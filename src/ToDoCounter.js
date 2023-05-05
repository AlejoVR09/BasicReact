import React from "react";
import './css/ToDoCounter.css'

function ToDoCounter({totalToDos, completedToDos}){
    return(
        <h2 className="TodoCounter">Has Completado {completedToDos} Tareas de {totalToDos}</h2>
    );
}

export {ToDoCounter};