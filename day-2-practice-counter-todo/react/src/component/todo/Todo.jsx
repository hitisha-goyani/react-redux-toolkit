import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../reduxToolkit/todoToolkit/todoSlice";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log(todoList);

  return (
    <div className="max-w-sm mx-auto border my-10 p-5 shadow-2xl rounded-2xl">
      <div className="flex gap-2 ">
        <input
          className="border"
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        />
        <button
          onClick={() => dispatch(todoActions.addTodo(todo))}
          className="border bg-black text-white rounded-2xl p-3"
        >
          Add
        </button>
      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
