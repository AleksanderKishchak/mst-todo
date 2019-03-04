import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

class Form extends Component {
  static propTypes = {
    store: PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
      addUser: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      userName: ''
    };
  }

  onChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  addTodo = event => {
    const {
      store: { addTodo, usersIds }
    } = this.props;
    const { inputText } = this.state;

    // get random user's ID
    const assignee = usersIds[Math.floor(Math.random() * usersIds.length)];

    event.preventDefault();
    addTodo(inputText, assignee);
    this.setState({
      inputText: ''
    });
  };

  addUser = event => {
    const {
      store: { addUser }
    } = this.props;
    const { userName } = this.state;

    event.preventDefault();
    addUser(userName);
    this.setState({
      userName: ''
    });
  };

  render() {
    const { inputText, userName } = this.state;

    return (
      <>
        <form className="form" onSubmit={this.addTodo}>
          <input
            className="input"
            type="text"
            name="inputText"
            value={inputText}
            onChange={this.onChange}
          />
          <button type="submit" className="form-button">
            Add todo
          </button>
        </form>
        <form className="form" onSubmit={this.addUser}>
          <input
            className="input"
            type="text"
            name="userName"
            value={userName}
            onChange={this.onChange}
          />
          <button type="submit" className="form-button">
            Add User
          </button>
        </form>
      </>
    );
  }
}

export default Form;
