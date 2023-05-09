import React from "react";
import '../css/ToDoCounter.css'
import { ToDoContext } from "../todoContext/ToDoContext";

function ToDoCounter(){
    const {
        completedToDos,
        totalToDos,
      } = React.useContext(ToDoContext)

    return(
        <h2 className="TodoCounter">Has Completado {completedToDos} Tareas de {totalToDos}</h2>
    );
}

export {ToDoCounter};