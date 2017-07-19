// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

var dummyData = ["Go to School", "Go to Mariachi Band", "Do Homework", "Eat Dinner", "Go to Design", "Sleep"]

class ToDo extends React.Component {
  render() {
    return (
      <div>
        <li key={this.props.task}>
          <button type="button">X</button>
          {' '}{this.props.task}
        </li>
      </div>
    )
  }
}

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <input type="submit" value="Add Todo" />
      </div>
    )
  }
}

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <TodoApp />
        <ul>
          {this.props.data.map((todo) => <ToDo task={todo} />)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ToDoList data = {dummyData}/>,
  document.getElementById('root'));
