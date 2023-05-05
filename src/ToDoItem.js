import React from "react";
import './css/ToDoItem.css'

function ToDoItem(props){
    
    return(
        <><li className="TodoItem">
            <span 
            onClick={props.onCompleted } 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            >
                C
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
            onClick={props.onDelete} 
            className="Icon Icon-delete"
            >
                X
            </span>
        </li></>
    );
}

export { ToDoItem };