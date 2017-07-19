// var React = require('react');
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

var dummyData = ["Go to School", "Go to Mariachi Band", "Do Homework", "Eat Dinner", "Go to Design", "Sleep"]

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((todo) => <li key={todo}>
            <button type="button">X</button>
            {' '}{todo}</li>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ToDoList data = {dummyData}/>,
   document.getElementById('root'));
