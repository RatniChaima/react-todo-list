import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { AiFillDelete } from 'react-icons/ai';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => { 
        const newTodo = [ todo, ...todos ];

        setTodos(newTodo);
        console.log(todo, ...todos);
    }
  return (
    <div>
        <h1>Todo List</h1>
        <TodoForm onSubmit={addTodo}/>
        { todos.map((todo) => (
           <li className="list-items" key={todo.id}>
               <input 
               type="text"
               value={todo.title}
               className="list"
               onChange={(event) => event.preventDefault()}
               />
               {/* <button className="button-done task-button"> */}
               <button >
                   <AiFillDelete />
                   
               </button>
           </li>
       )
       )}

    </div>
  )
}

export default TodoList