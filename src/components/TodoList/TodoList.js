import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

/* eslint-disable */
const TodoList = observer(
  class extends Component {
    static propTypes = {
      store: PropTypes.shape({
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
      }).isRequired
    };

    onDelete = id => event => {
      const {
        store: { deleteTodo }
      } = this.props;

      deleteTodo(id);
    };

    render() {
      const {
        store: { todos }
      } = this.props;

      return (
        <ul className="list">
          {todos.length > 0
            ? todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onDelete={this.onDelete(todo.id)} />
              ))
            : 'There is no todos'}
        </ul>
      );
    }
  }
);

TodoList.displayName = 'TodoList';

export default TodoList;
