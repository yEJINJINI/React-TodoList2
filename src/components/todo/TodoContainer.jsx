import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoContainer = () => {
  const [todoTodo, setTodoTodo] = useState([
    {
      id: 1,
      title: "할 일1",
      content: "할 일1 내용",
      isDone: false,
    },
  ]);

  return (
    <section>
      <h1 className="title">Todo List</h1>
      <TodoForm setTodoTodo={setTodoTodo} />
      <TodoList todoTodo={todoTodo} />
    </section>
  );
};

export default TodoContainer;
