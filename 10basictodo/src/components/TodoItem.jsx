import React from "react"
import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div className="relative group">
      <div
        className={`relative flex items-center gap-4 p-4 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
          todo.completed
            ? "bg-white/5 border-2 border-green-400/60 text-green-100"
            : isTodoEditable
            ? "bg-white/5 border-2 border-gradient-to-r from-emerald-400 via-blue-500 to-purple-600"
            : "bg-white/5 border-2 border-transparent text-white group-hover:border-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500"
        }`}
        style={
          isTodoEditable
            ? {
                borderImage:
                  "linear-gradient(90deg, #34d399, #3b82f6, #8b5cf6) 1",
                borderImageSlice: 1,
              }
            : {}
        }
        onMouseEnter={(e) => {
          if (!todo.completed && !isTodoEditable) {
            e.target.style.borderImage =
              "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899) 1"
            e.target.style.borderImageSlice = "1"
          }
        }}
        onMouseLeave={(e) => {
          if (!todo.completed && !isTodoEditable) {
            e.target.style.borderImage = ""
            e.target.style.borderImageSlice = ""
          }
        }}
      >
        {/* Custom Checkbox */}
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={todo.completed}
            onChange={toggleCompleted}
          />
          <div
            className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-200 flex items-center justify-center ${
              todo.completed
                ? "bg-gradient-to-r from-green-400 to-emerald-500 border-green-400 scale-110"
                : "border-gray-400 hover:border-blue-400 hover:scale-110"
            }`}
            onClick={toggleCompleted}
          >
            {todo.completed && (
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Todo Text Input */}
        <input
          type="text"
          className={`flex-1 bg-transparent outline-none text-lg font-light transition-all duration-200 ${
            isTodoEditable
              ? "bg-white/10 px-3 py-2 rounded-xl border border-white/30"
              : "border-transparent"
          } ${todo.completed ? "line-through opacity-60" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            className={`w-10 h-10 rounded-xl border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 ${
              todo.completed
                ? "opacity-50 cursor-not-allowed"
                : "bg-white/10 hover:bg-blue-500/20 hover:border-blue-400/50"
            }`}
            onClick={() => {
              if (todo.completed) return
              if (isTodoEditable) {
                editTodo()
              } else setIsTodoEditable((prev) => !prev)
            }}
            disabled={todo.completed}
          >
            {isTodoEditable ? (
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            )}
          </button>

          <button
            className="w-10 h-10 rounded-xl border border-red-500/30 bg-red-500/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-400/50 transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => deleteTodo(todo.id)}
          >
            <svg
              className="w-5 h-5 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
