import React from 'react';

const Todo = props => {
  return (
    <div className={`item${props.todoItem.done ? ' done' : ''}`}
      onClick={() => props.toggleItem(props.todoItem.id)}
    >
      <p>{props.todoItem.name}</p>
    </div>
  );
}

export default Todo;
