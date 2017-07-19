import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';


class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <ul>
        {this.props.list.map(({taskText, completed}) => {
          return <Todo task={taskText} completed={completed}/>
        })}
      </ul>
    )
  }
}

export default TodoList;
