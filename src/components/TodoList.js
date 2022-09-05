import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { AiFillDelete } from 'react-icons/ai';
import Todo from './Todo'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => { 
        const newTodo = [ todo, ...todos ];

        setTodos(newTodo);
        console.log(todo, ...todos);
    }

    const [done, setDone] = useState(false);

    const isDone = () => {
      setDone(!done);
    };
   
    const deleteTodo = ({ id }) => {
            setTodos(todos.filter((todo) => todo.id !== id))
    };

  return (
    <div className="container">
        <div className="title">
            To Do
        </div>
        <TodoForm   onSubmit={addTodo}/>
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
                   onClick={()=> deleteTodo(todo)}
                   className="delete-icon"/>
               </button>
            
                <input type="checkbox"
                    label="my value"
                    value={done}
                    onChange={isDone}
                />
                {/* <p>Is it done {done.toString()}</p> */}
                
            </li>
            ))}
    </div>
  )
}

export default TodoList