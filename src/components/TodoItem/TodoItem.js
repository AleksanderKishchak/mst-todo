import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import './TodoItem.css';

const TodoItem = observer(
  class extends Component {
    static propTypes = {
      todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }).isRequired
    };

    onToggle = () => {
      const { todo } = this.props;

      todo.toggle();
    };

    onChangeName = () => {
      const newTitle = prompt('Enter new task', 'drink coffee');
      const { todo } = this.props;

      if (newTitle) {
        todo.setTitle(newTitle);
      }
    };

    render() {
      const { todo } = this.props;

      return (
        <li className="todoItem">
          <span>{todo.title}</span>
          {todo.userId.name ? <span>assignee: {todo.userId.name}</span> : null}

          <label>
            <input type="checkbox" checked={todo.completed} onChange={todo.toggle} />
            <span>{todo.completed ? 'Done!' : ''}</span>
          </label>

          <button className="button" type="button" onClick={this.onChangeName}>
            Edit
          </button>
        </li>
      );
    }
  }
);

TodoItem.displayName = 'TodoItem';

export default TodoItem;
