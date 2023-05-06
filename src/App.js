import React from "react";

import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";

function useLocalStorage(itemName) {
  const localStorageItem=localStorage.getItem(itemName)
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName,JSON.stringify([]))
    parsedItem=[]
  } else {
    parsedItem=JSON.parse(localStorageItem)
  }

  const [item, saveItem]=React.useState(parsedItem)

  const saveItems= (newItemList)=>{
    localStorage.setItem(itemName,JSON.stringify(newItemList))
    saveItem(newItemList)
  }

  return [
    item,
    saveItems,
  ];
}

function App() {

  const [todos,saveToDos]=useLocalStorage('ToDos_V1')
  const [searchValue, setSearchValue]=React.useState('')

  const completedToDos = todos.filter(todo=>todo.completed===true).length
  const totalToDos =todos.length
  
  let searchedToDos=[]
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
    <React.Fragment>
      <ToDoCounter totalToDos={totalToDos} completedToDos={completedToDos}/>

      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedToDos.map(todo=>(
          <ToDoItem
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onCompleted={()=>completeToDo(todo.text)} 
          onDelete={()=>deleteToDo(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton/>

    </React.Fragment>
  );
}

export default App;
