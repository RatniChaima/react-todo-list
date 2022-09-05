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

    const [done, setDone] = React.useState(false);

    const isDone = () => {
      setDone(!done);
    };
   
    const isDoneTodo = (todo) => {
         setTodos(
             todos.map((item)=>{
                 if (item.id === todo.id){
                     return { ...item, done: !item.done};
                 }
                 return item;
             })
         )};

         const Checkbox = ({ label }) => {
            const [done, setdone] = useState(false);
           
         };
    const deleteTodo = ({ id }) => {
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
                   onClick={()=> deleteTodo(todo)}
                   className="delete-icon"/>
               </button>
            
            <input type="checkbox"
                label="My Value"
                value={done}
                onChange={isDone}
            /><p>Is it done {done.toString()}</p>
                    {/* <button className="button-delete task-button" type="checkbox"> 
                        <IoCheckmarkDoneSharp 
                        onClick={()=> isDoneTodo(todo)}
                        className="delete-icon"/>
                    </button> */}
                </li>
            ))}

    </div>
  )
}

export default TodoList