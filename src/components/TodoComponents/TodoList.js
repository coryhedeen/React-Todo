// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => {
  return (
    <div>
      {props.todoItems.map(item => <Todo todoItem={item}
        toggleItem={props.toggleItem}/>)}

      <TodoForm addItem={props.addItem}/>
    </div>
  );
}

export default TodoList;
