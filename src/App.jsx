import React, { useState, useEffect } from "react";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // LocalStorage dan o‘qish
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  // LocalStorage ga saqlash
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Todo qo‘shish
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo = {
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  // Todo delete
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Checkbox o‘zgarsa
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To do app</h1>
      <div className="wrapper">
        <form onSubmit={addTodo}>
          <input
            id="todo-input"
            type="text"
            placeholder="write anything and hit enter to add"
            value={inputValue}
            autoComplete="off"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button id="add-btn">ADD</button>
        </form>

        <ul id="todo-list">
          {todos.map((todo, index) => {
            const todoId = `todo-${index}`;
            return (
              <li key={index} className="todo">
                <div
                  className="custom-checkbox"
                  onClick={() => toggleTodo(index)}
                  htmlFor="todoId" style={{ cursor: "pointer" }}>
                  <svg
                    fill={todo.completed ? "var(--secondary-color)" : "transparent"}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </div>
                <span style={{ textDecoration: todo.completed ? "line-through" : "none", }} htmlFor="todoId" className="todo-text">
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(index)} className="delete-btn">
                  <svg
                    fill="var(--secondary-color)"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                  >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 
                56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 
                0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
