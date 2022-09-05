import React from 'react'
//import TodoForm from './TodoForm'
import { AiFillDelete } from 'react-icons/ai';

function Todo(todos) {
    //console.log(todos);
  return (
    <div>
        
       {/* { 
        todos.map((todo) => (
           <li className="list-items" key={todo.id}>
               <input 
               type="text"
               value={todo.title}
               className="list"
               onChange={(event) => event.preventDefault()}
               />
               <button className="button-delete task-button"> 
                   <AiFillDelete />
               </button>
           </li>
       ))} */}
    </div>
  )
}

export default Todo