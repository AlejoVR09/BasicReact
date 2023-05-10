import React from "react";
import { ToDoContext } from "../todoContext/ToDoContext";

function ToDoForm(){
    const [newValue, setNewValue]=React.useState('')
    const {
        addToDo,
        setModal,
    }=React.useContext(ToDoContext)

    const onCancel=()=>{
        setModal(false)
    }

    const onChange=(event)=>{
        setNewValue(event.target.value)
    }
    
    const onSubmit= (event)=>{
        event.preventDefault()
        addToDo(newValue)
        setNewValue('')
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Write the todo</label>
            <textarea value={newValue} onChange={onChange} placeholder="Write down your Todo"/>
            
            <button type="text" onClick={onCancel}>Close modal</button>
            <button type="submit">Submit</button>
        </form>
    )
}

export {ToDoForm}