import React, { useEffect, useState } from 'react'
import TodoService from './Service/todoService';
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");


    const loadTodos = async () => {
        const data = await TodoService.getAll();
        setTodos(data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const addTodo = async () => {
        await TodoService.create({ task });
        setTask("");
        loadTodos();
    };

    const deleteTodo = async (id) => {
        await TodoService.delete(id);
        loadTodos();
    };
    // Checkbox o‘zgarsa
    const toggleTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#101114] text-[#F9F9F9] font-sans p-2">
            <h1 className="mt-24 mb-5 text-5xl font-extrabold uppercase text-center text-[#00FFC4]">
                To do app
            </h1>

            <div className="w-full max-w-[700px] flex flex-col gap-3">
                <form onSubmit={addTodo} className="relative flex flex-col md:flex-row">
                    <input
                        id="todo-input"
                        type="text"
                        placeholder="write anything and hit enter to add"
                        value={inputValue}
                        autoComplete="off"
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full rounded-full border-2 border-[#4A4D57] bg-transparent px-5 py-3 text-[#F9F9F9] caret-[#00FFC4] focus:outline-none"
                    />

                    <button
                        id="add-btn"
                        className="absolute right-0 top-0 h-full rounded-full bg-[#00FFC4] px-8 font-semibold text-[#101114] cursor-pointer 
                 md:static md:mt-2 md:w-full md:py-4"
                    >
                        ADD
                    </button>
                </form>

                <ul id="todo-list">
                    {todos.map((todo) => {
                        const todoId = `todo-${index}`;
                        return (
                            <li
                                key={todo.id}
                                className="todo mb-3 flex items-center rounded-xl bg-[#1C1D20] px-4"
                            >
                                <div
                                    className="custom-checkbox flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-[#00FFC4] transition duration-200"
                                    onClick={() => toggleTodo(index)}
                                >
                                    <svg
                                        fill={todo.completed ? "#4A4D57" : "transparent"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                    >
                                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                    </svg>
                                </div>

                                <span
                                    htmlFor={todoId}
                                    className={`todo-text flex-grow px-4 py-3 transition duration-200 ${todo.completed ? "line-through text-[#4A4D57]" : ""
                                        }`}
                                >
                                    {todo.text}
                                </span>

                                <button
                                    onClick={() => deleteTodo(to.id)}
                                    className="delete-btn flex cursor-pointer items-center justify-center rounded p-1 transition duration-200 hover:[&>svg]:fill-[#ff0033]"
                                >
                                    <svg
                                        fill="#4A4D57"
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
                        );
                    })}
                </ul>
            </div>
        </div>

    );
}

export default Todo