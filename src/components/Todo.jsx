import React from "react";

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div 
    className="todo" 
    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
>
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>
    <div>
    <button className="complete" onClick={() => { console.log("Completar clicado:", todo.id); completeTodo(todo.id); }}>
    Completar
</button>
<button className="remove" onClick={() => { console.log("Remover clicado:", todo.id); removeTodo(todo.id); }}>
    x
</button>
    </div>
  </div>
  );
};

export default Todo;
