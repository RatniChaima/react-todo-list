import React, {useState} from 'react'
import TodoForm from './TodoForm'

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

    </div>
  )
}

export default TodoList