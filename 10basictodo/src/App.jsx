import { use, useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { TodoProvider } from "./contexts/TodoContext"
import { TodoForm, TodoItem } from "./components"

function App() {
  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  useEffect(() => {
    //get from local storage and set to state
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    //set to local storage
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const toggleComplete = (id) => {
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light text-white mb-2 tracking-tight">
              Todo
            </h1>
            <p className="text-gray-400 text-lg font-light">
              Simple. Beautiful. Effective.
            </p>
          </div>

          <TodoProvider
            value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
          >
            <div className="space-y-6">
              <TodoForm />
              <div className="space-y-3">
                {todos.map((todo) => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </div>

              {todos.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl">📝</span>
                  </div>
                  <p className="text-gray-500 text-lg font-light">
                    No todos yet. Create your first one above.
                  </p>
                </div>
              )}
            </div>
          </TodoProvider>
        </div>
      </div>
    </div>
  )
}

export default App
