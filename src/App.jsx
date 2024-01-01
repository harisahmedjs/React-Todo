import React, { useState, useEffect } from "react";

function App() {
  const [text, settext] = useState('');
  const [todo, settodo] = useState([]);

  useEffect(() => {
    console.log(todo);
  }, [todo]); // This useEffect will run whenever the 'todo' state changes

  function Add() {
    if (text === '') {
      alert('Enter text first');
    } else {
      settodo(prevTodo => [...prevTodo, text]);
      settext('');
    }
  }
function Edit(index){
  const update = prompt('enter new value', todo[index])
  const updatedtodo = [...todo]
  updatedtodo[index] = update
  settodo(updatedtodo)
}
function Delete(index){
  console.log('delete called');
  const updatedtodo = [...todo]
  updatedtodo.splice(index,1)
  settodo(updatedtodo)
}
  return (
    <>
    <h1>hello</h1>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={(e) => settext(e.target.value)}
        value={text}
      />
      <button onClick={Add}>Todo</button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={()=> Edit(index)} > edit</button>
            <button onClick={()=> Delete(index)} > delete</button>
            </li>
          
        ))}
      </ul>
    </>
  );
}

export default App;