import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

const todoItem = {
  name: "",
  id: Date.now(),
  done: false
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todo: todoItem
    }
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      done: false
    }
    this.setState({
      todo: [this.state.todo, newItem]
    })
  }

  render() {
    return (
      <div>
        <TodoList todoItem={this.state.todo} addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
