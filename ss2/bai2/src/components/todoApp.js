import React, { useState } from "react";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleTodo = (event) => {
    setNewTodo(event.target.value);
    console.log(newTodo);
  };
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodoList([...todoList, newTodo]);
      console.log(todoList);
      setNewTodo("");
    }
  };

  return (
    <div>
      <h1>todolist</h1>
      {todoList.map((item, index) => (
        <div key={index}> {item}</div>
      ))}
      <input className="p-5 w-12" value={newTodo} onChange={handleTodo} />
      <button onClick={addTodo}>them moi</button>
    </div>
  );
}

export default TodoApp;
