import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext=React.createContext()

function ToDoProvider(props) {
    const {
        item:todos,
        saveItems:saveToDos,
        loading,
        error
    }=useLocalStorage('ToDos_V1')

    const [searchValue, setSearchValue]=React.useState('')
    

    const completedToDos = todos.filter(todo=>todo.completed===true).length
    const totalToDos =todos.length
    
    let searchedToDos=[]
    console.log(error)
    if (!searchedToDos>=1) {
    searchedToDos=todos
    }
    else{
    searchedToDos=todos.filter((todo)=>{
        const toDoText=todo.text.toLowerCase();
        const searchText=searchValue.toLowerCase();
        return toDoText.includes(searchText)
    })
    }

    const completeToDo = (text) => {
    const toDoIndex= todos.findIndex(todo=>todo.text===text)
    const newToDos=[...todos]
    if(newToDos[toDoIndex].completed===true){
        newToDos[toDoIndex].completed=false
    }
    else{
        newToDos[toDoIndex].completed=true
    }
    saveToDos(newToDos)  
    }


    const deleteToDo = (text) => {
    const toDoIndex= todos.findIndex ((todo)=>{
        return todo.text===text
    })
    const newToDos=[...todos]
    newToDos.splice(toDoIndex,1)
    saveToDos(newToDos)
    }

    return (
    <ToDoContext.Provider
    value={{
        loading,
        error,
        totalToDos,
        completedToDos,
        searchValue,
        searchedToDos,
        setSearchValue,
        completeToDo,
        deleteToDo,

    }}>
        {props.children}
    </ToDoContext.Provider>
    )
}

export {ToDoProvider, ToDoContext}