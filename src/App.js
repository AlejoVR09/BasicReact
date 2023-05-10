import React from "react";

import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoContext } from "./todoContext/ToDoContext";
import { Modal } from "./components/Modal";
import { ToDoForm } from "./components/ToDoForm";

function App() {
  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    modal,
    setModal,
  } = React.useContext(ToDoContext)
  return (
    <React.Fragment>
      <ToDoCounter/>

      <ToDoSearch />
      <ToDoList>
        {error && 'Desespérate, hubo un error...'}
        {loading && 'Estamos cargando, no desesperes...'}
        {(!loading && !searchedToDos.length) && '¡Crea tu primer TODO!'}
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

      {!!modal &&(
        <Modal>
          <ToDoForm></ToDoForm>
        </Modal>  
      )}

      <CreateToDoButton
        setModal={setModal}
        modal={modal}
      />
    </React.Fragment>
  

    
  );
}

export default App;
