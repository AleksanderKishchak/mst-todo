import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Statistics from '../Statistics/Statistics';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import './App.css';

const App = observer(
  // eslint-disable-next-line react/prefer-stateless-function
  class extends Component {
    static propTypes = {
      store: PropTypes.object.isRequired
    };

    render() {
      const { store } = this.props;

      return (
        <div className="App">
          <Statistics store={store} />
          <Form store={store} />
          <TodoList store={store} />
        </div>
      );
    }
  }
);

App.displayName = 'App';

export default App;
