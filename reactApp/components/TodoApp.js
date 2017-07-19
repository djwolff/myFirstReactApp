import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

var dummyData = [
  {taskText: 'Laundry', completed: true},
  {taskText: 'Homework', completed: true},
  {taskText: 'Meal prep', completed: false},
  {taskText: 'Groceries', completed: false}
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  componentDidMount() {
    this.setState({todos: dummyData})
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList list={this.state.todos}/>
      </div>
    )
  }
}

export default TodoApp
