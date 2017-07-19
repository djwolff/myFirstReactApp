import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Some task..."></input>
        <button>Add Todo</button>
      </form>
    )
  }
}

export default InputLine
