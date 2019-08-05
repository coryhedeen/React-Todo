import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: ""
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addItem(this.state.todo);
  }

  clearItems = e => {
    e.preventDefault();
    this.setState({
      todo: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <input
          name="todo"
          placeholder="Add task"
          value={this.state.todo}
          onChange={this.changeHandler}
        />
        <button type="submit">submit</button>
        <button onClick={this.clearItems}>clear</button>
      </form>
    );
  }
}

export default TodoForm;
