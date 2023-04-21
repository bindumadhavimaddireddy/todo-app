import React from "react";
import TodoItem from "../TodoItem";
import "./index.css";


const TodoList = (props) => {
  const { todos, onUpdate, onDelete } = props;
  return (
    <main>
      <h2>Todo Items List</h2>
      {todos.length ? (
        <ul className="todo-list-container">
          {todos.map((todo) => (
            <li key={todo.id}> <TodoItem item={todo} onUpdate={onUpdate} onDelete={onDelete} /></li>
          ))}
        </ul>
      ) : (
        <h3 className="empty-list">No Todo's Available</h3>
      )}
    </main>
  );
};

export default TodoList;
