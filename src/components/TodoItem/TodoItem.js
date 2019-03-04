import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TodoItem.css';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired
  };

  onToggle = () => {
    const { todo } = this.props;

    todo.toggle();
  };

  onChangeName = () => {
    const newName = prompt('Enter new task', 'drink coffee');
    const { todo } = this.props;

    if (newName) {
      todo.setName(newName);
    }
  };

  render() {
    const { todo, onDelete } = this.props;

    console.log(onDelete);

    return (
      <li className="todoItem" onDoubleClick={this.onChangeName}>
        <span>{todo.name}</span>
        <span>assignee: {todo.assignee.name}</span>
        <label className={classNames({ active: todo.done })}>
          <input type="checkbox" checked={todo.done} onChange={todo.toggle} />
        </label>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </li>
    );
  }
}
