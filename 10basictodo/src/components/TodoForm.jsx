import React, { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo("")
  }

  return (
    <div className="relative">
      <form onSubmit={add} className="relative group">
        <div className="relative flex bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl group-focus-within:border-transparent">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 bg-transparent text-white placeholder-gray-400 px-6 py-4 text-lg font-light outline-none"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!todo.trim()}
          >
            Add
          </button>
        </div>
      </form>

      <style jsx>{`
        @keyframes borderSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}

export default TodoForm
