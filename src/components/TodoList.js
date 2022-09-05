import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { AiFillDelete } from 'react-icons/ai';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => { 
        const newTodo = [ todo, ...todos ];

        setTodos(newTodo);
        console.log(todo, ...todos);
    }
   
    // const handleDone = (todo) => {
    //      setTodos(todo); };todos.map((todo))
    const handleDelete = ({ id }) => {
            setTodos(todos.filter((todo) => todo.id !== id))
    };

  return (
    <div>
        <h1>Todo List</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} />
        { todos.map((todo) => (
           <li className="list-items" key={todo.id}>
               <input 
               type="text"
               value={todo.title}
               className="list"
               onChange={(event) => event.preventDefault()}
               />
               <button className="button-delete task-button"> 
                   <AiFillDelete 
                   onClick={()=> handleDelete(todo)}
                   className="delete-icon"/>
               </button>
               <button className="button-delete task-button"> 
                   <IoCheckmarkDoneSharp 
                   className="delete-icon"/>
               </button>
           </li>
       ))}

    </div>
  )
}

export default TodoList