import React from "react";

import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";

const todosDefault=[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Llorar con la llorona', completed:false}
];
function App() {
  let [todos, setToDos]=React.useState(todosDefault)
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
    newToDos[toDoIndex].completed=true
    setToDos(newToDos)
  }


  const deleteToDo = (text) => {
    const toDoIndex= todos.findIndex ((todo)=>{
      return todo.text===text
    })
    const newToDos=[...todos]
    newToDos.splice(toDoIndex,1)
    setToDos(newToDos)
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
