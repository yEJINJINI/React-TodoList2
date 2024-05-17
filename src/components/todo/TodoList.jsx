import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoTodo }) => {
  return (
    <div>
      <ul>
        {todoTodo.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
