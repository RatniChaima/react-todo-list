import React, {useState} from 'react'
import{v4 as uuidv4} from 'uuid';

function TodoForm(props) {
    const [input, setInput]= useState('');

    const handleChange = e => { setInput(e.target.value); } ;

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: uuidv4(),
            //id: Math.floor(Math.random() * 10000),
            title:input
        })
        setInput('');
    };
     

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter a Todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        />
        <button className="todo-button">Add </button>

    </form>
  )
}

export default TodoForm