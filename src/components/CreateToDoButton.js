import React from "react";
import '../css/CreateToDoButton.css';

function CreateToDoButton(props){
    const makeAPortal= ()=> {
        props.setModal(!props.modal)
    }

    return(
        <button onClick={makeAPortal} className="CreateTodoButton">+</button>
    );
}

export {CreateToDoButton};