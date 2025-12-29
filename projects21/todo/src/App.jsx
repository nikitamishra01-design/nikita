
import { useState, useRef, useEffect } from "react";

export default function App() {
  // ✅ Step 1: localStorage se state init
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const inputRef = useRef(null);

  // ✅ Step 2: jab bhi todos change ho, save karo
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;

    setTodos([...todos, { text: value, completed: false }]);

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-purple-200 flex justify-center items-center">
      <div className="bg-white p-6 w-96 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          Todo App
        </h1>

        <div className="flex gap-2">
          <input
            ref={inputRef}
            className="border p-2 flex-1 rounded"
            placeholder="Enter todo"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(index)}
                />
                <span
                  className={
                    todo.completed
                      ? "line-through text-gray-400"
                      : ""
                  }
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
