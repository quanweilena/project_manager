import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Todos extends Component {

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map( todo => {
        return (
          <TodoItem
            todo={todo}
            key={todo.title}
          />
        );
      });
    }
    return (
      <div>
          <h3>Todo list</h3>
          {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
