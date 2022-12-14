import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { AiFillDelete } from 'react-icons/ai';

function TodoList( ) {
    const [todos, setTodos] = useState([]);
    const [done, setDone] = useState(false);
   

    const addTodo = todo => { 
        if (!todo.task) {
            return;
        }
        const newTodo = [ todo, ...todos ];
        setTodos(newTodo);
        console.log(todo, ...todos);
    }

    const isDone = () => {
        setDone(!done);
      };

    const deleteTodo = ({ id }) => {
            setTodos(todos.filter((todo) => todo.id !== id))
    };

  return (
    <div className="container">
        <div className="title">
            To Do List
        </div>
        <TodoForm onSubmit={addTodo}/>
        { todos.map((todo) => (
            
           <li className="list-items" key={todo.id}>
                <input type="checkbox"
                    className="input-checkbox"
                    label="my value"
                    value={done}
                    onChange={isDone}
                />
                <input 
                type="text"
                value={todo.task}
                className="input-item"
                onChange={(event) => event.preventDefault()}
                />
                    
               <button className="button-delete"> 
                   <AiFillDelete 
                   onClick={()=> deleteTodo(todo)}
                   className="delete-icon"/>
               </button>
            
                
            </li>
        ))}
    </div>
  )
}

export default TodoList