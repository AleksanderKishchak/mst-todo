import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Loader from '../Loader/Loader';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

/* eslint-disable */
class TodoList extends Component {
  static propTypes = {
    store: PropTypes.shape({
      todos: PropTypes.array.isRequired,
      deleteTodo: PropTypes.func.isRequired
    }).isRequired
  };

  componentDidMount = () => {
    const { store } = this.props;

    store.fetchTodos();
  };

  onDelete = id => event => {
    const {
      store: { deleteTodo }
    } = this.props;

    deleteTodo(id);
  };

  render() {
    const {
      store: { todos },
      store
    } = this.props;

    if (store.status === 'pending') {
      return <Loader />;
    }

    return (
      <ul className="list">
        {todos.length > 0
          ? todos.map(todo => {
              const { id } = todo;
              return <TodoItem key={id} todo={todo} />;
            })
          : 'There is no todos'}
      </ul>
    );
  }
}

export default observer(TodoList);
