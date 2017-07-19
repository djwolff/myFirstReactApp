import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component {
  render() {
    var task;
    if (this.props.completed) {
      task = <strike>{this.props.task}</strike>
    } else {
      task = this.props.task
    };
    console.log(task);
    return (
      <li>
        <button>X</button>{' '}
        <span>{task}</span>
      </li>
    )
  }
}

export default Todo;
